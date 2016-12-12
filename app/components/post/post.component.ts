/**
 * Created by qifu on 16/12/7.
 */
import {Component, Input} from "@angular/core";
import {IPost} from "../../interfaces/posts/ipost";

@Component({
  selector: "post",
  templateUrl: "./app/components/post/post.component.html"
})
export class PostComponent {
  @Input() post: IPost;
}
