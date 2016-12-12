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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by qifu on 16/12/7.
 */
var core_1 = require("@angular/core");
var posts_service_1 = require("../../services/posts/posts.service");
var router_1 = require("@angular/router");
var PostListComponent = (function () {
    function PostListComponent(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.postList = [];
        this.pages = [];
    }
    PostListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, i, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = parseInt(this.route.snapshot.params['id']);
                        //this.postList = await this.postService.getAllPosts();
                        _a = this;
                        return [4 /*yield*/, this.postService.getAllPosts()];
                    case 1:
                        //this.postList = await this.postService.getAllPosts();
                        _a.allPost = _b.sent();
                        for (i = this.allPost.length - 20 * id - 1; i >= 0 && i >= this.allPost.length - 20 * id - 20; i--) {
                            console.log(i);
                            this.postList.push(this.allPost[i]);
                        }
                        for (i = 0; i <= this.allPost.length / 20; i++) {
                            this.pages.push(i);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //constructor(private postService: PostService) { }
    PostListComponent.prototype.goPage = function (event) {
        var id = parseInt(event);
        this.postList = [];
        for (var i = this.allPost.length - 20 * id - 1; i >= 0 && i >= this.allPost.length - 20 * id - 20; i--) {
            console.log(i);
            this.postList.push(this.allPost[i]);
        }
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    core_1.Component({
        selector: "post-list",
        templateUrl: "./app/components/post-list/post-list.component.html"
    }),
    __metadata("design:paramtypes", [posts_service_1.PostService,
        router_1.ActivatedRoute,
        router_1.Router])
], PostListComponent);
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map