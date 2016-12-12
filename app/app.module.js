"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./components/app/app.component");
var post_detail_component_1 = require("./components/post-detail/post-detail.component");
var post_component_1 = require("./components/post/post.component");
var post_list_component_1 = require("./components/post-list/post-list.component");
var post_form_component_1 = require("./components/post-form/post-form.component");
var posts_service_1 = require("./services/posts/posts.service");
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.test = function () {
        console.log("run");
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            //FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: 'archive/0',
                    pathMatch: 'full'
                },
                { path: 'archive/:id', component: post_list_component_1.PostListComponent },
                { path: 'posts/new', component: post_form_component_1.PostFormComponent },
                { path: 'posts/:id', component: post_detail_component_1.PostDetailComponent }
            ])
        ],
        declarations: [
            post_component_1.PostComponent, post_list_component_1.PostListComponent, app_component_1.AppComponent, post_detail_component_1.PostDetailComponent, post_form_component_1.PostFormComponent
        ],
        providers: [posts_service_1.PostService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map