/**
 * Created by qifu on 16/12/7.
 */
import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

import {IPost} from "../../interfaces/posts/ipost";
import {PostService} from "../../services/posts/posts.service";
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: "post-list",
  templateUrl: "./app/components/post-list/post-list.component.html"
})
export class PostListComponent implements OnInit {
  postList: IPost[] = [];
  allPost: IPost[];
  pages: number[] = [];

  async ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id']);
    //this.postList = await this.postService.getAllPosts();

    this.allPost= await this.postService.getAllPosts();
    for(var i = this.allPost.length - 20 * id - 1; i >= 0 && i >= this.allPost.length - 20 * id - 20; i--) {
      console.log(i);
      this.postList.push(this.allPost[i]);
    }
    for(var i = 0; i <= this.allPost.length / 20; i++) {
      this.pages.push(i);
    }
  }

  //constructor(private postService: PostService) { }
  goPage(event: string) {
    let id = parseInt(event);
    this.postList = []
    for(var i = this.allPost.length - 20 * id - 1; i >= 0 && i >= this.allPost.length - 20 * id - 20; i--) {
      console.log(i);
      this.postList.push(this.allPost[i]);
    }
  }

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) {
  }
}
