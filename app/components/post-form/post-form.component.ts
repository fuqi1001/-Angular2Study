/**
 * Created by qifu on 16/12/7.
 */
import {Component, Input} from "@angular/core";
import {IPost} from "../../interfaces/posts/ipost";
import {NgForm} from '@angular/forms';
import {Headers} from '@angular/http'
import {Http} from "@angular/http";
import {FileUploader} from 'ng2-file-upload';

//import {UPLOAD_DIRECTIVES} from 'ng2-file-uploader/ng2-file-uploader';

@Component({
  selector: "post-form",
  templateUrl: "./app/components/post-form/post-form.component.html",
})
export class PostFormComponent {
  @Input() post: IPost;

  /*model = {
   title: "",
   body: "",
   photo: ""
   };

   submitted = false;

   constructor(private  http: Http) {
   this.model = {
   title: '',
   body: '',
   photo: ''
   };
   }

   onSubmit() {
   //this.submitted = true;
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
   console.log(123);
   console.log(this.model);
   this.http.post('posts/new', JSON.stringify(this.model),{headers: headers}).subscribe();
   }

   get diagnostic() {
   return JSON.stringify(this.model);
   }*/
}
