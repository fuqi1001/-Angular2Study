import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from "./components/app/app.component";
import {BookFormComponent} from "./components/book-form/book-form.component";
import {BookComponent} from "./components/book/book.component";
import {BookDetailComponent} from "./components/book-detail/book-detail.component";
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookService} from "./services/books/books.service";

import {PostDetailComponent} from "./components/post-detail/post-detail.component";
import {PostComponent} from "./components/post/post.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {PostFormComponent} from "./components/post-form/post-form.component";
import {PostService} from "./services/posts/posts.service";

/*@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'book-list',
        pathMatch: 'full'
      },
      {path: 'book-list', component: BookListComponent},
      {path: 'book-list/new', component: BookFormComponent},
      {path: 'book-list/:id', component: BookDetailComponent}
    ])
  ],
  declarations: [
    BookComponent, BookListComponent, AppComponent, BookDetailComponent, BookFormComponent
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})*/

@NgModule({
  imports: [
    //FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'archive/0',
        pathMatch: 'full'
      },
      {path: 'archive/:id', component: PostListComponent},
      {path: 'posts/new', component: PostFormComponent},
      {path: 'posts/:id', component: PostDetailComponent}
    ])
  ],
  declarations: [
    PostComponent, PostListComponent, AppComponent, PostDetailComponent, PostFormComponent
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule {
  test(){
    console.log("run")
  }
}
