/**
 * Created by qifu on 16/12/7.
 */
const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const xss = require('xss');

const router = express.Router();
const postList = [];
const uuid = require("node-uuid");




function makepost(title, body, photo) {
  return {
    title: title,
    body: body,
    photo: photo,
    id: uuid.v4()
  };
}
for(let i = 1; i < 100; i++){
  let temp = "post" + i;
  let ttemp = "post" + i + " body"
  postList.push(makepost(temp, ttemp, "public/images/image1.gif"));
}



router.get("/", (req, res) => {
  res.json(postList);
})
;

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  let post = postList.filter(x => x.id === id)[0];
  console.log(post);
  if (!post) {
    res.sendStatus(404);
  } else {
    res.json(post);
  }
})
;


router.post("/new", (req, res) => {
  //console.log(req.body);
  //postList.push(makepost(req.body.title, req.body.body, req.body.photo));
  let photo = "uploads/";
  console.log("get request");
  var form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = path.join(__dirname, '/../uploads');
  files = [],
    fields = [];
  form.on('file', function(field, file) {
    files.push([field, file]);
    console.log(files);
    //fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  form.on('field', function(field, value) {
    fields.push([field, value]);
    console.log(fields[0]);
  })

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    var item = {};
    item.images = [];
    files.map(file => {
      //console.log(file);
      var newPath = path.join(form.uploadDir, file[0] + file[1].name);
      //console.log("-----------")
      photo += file[0] + file[1].name;
      //console.log(photo);

      item.images.push(newPath);
      fs.rename(file[1].path, newPath);
    })

    fields.map(field => {
      console.log(field);
      item[field[0]] = field[1];
    })
    console.log(JSON.stringify(item));
    postList.push(makepost(xss(item.title), xss(item.body), xss(photo)));
    res.redirect("/");
  });

  form.parse(req);

  //res.json("success");
  //console.log("run in post");
});

// Capture any other uncoded routes and 404 them
router.use("*", (req, res) => {

  res.sendStatus(404);
});

module.exports = router;
