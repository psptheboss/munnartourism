webpackJsonp([20,28],{

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "#firDiv {\n  padding-right: 0%; }\n\n#scndDiv {\n  padding-left: 0%;\n  padding-right: 0%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1030:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\" id=\"scndDiv\">\r\n        <div class=\"panel  panel-transparent animated zoomIn\" zoom-in=\"\" >\r\n        <div class=\"panel-heading\" >Online Enquiry</div>\r\n        <div class=\"panel-body\" id=\"scndDiv\" >\r\n          \r\n            <table class=\"table table-hover\" style=\"width:100%\" >\r\n                <thead >\r\n                  <tr style=\"background-color:rgb(82, 189, 153)\" >\r\n                    <th>Name</th>\r\n                    <th>Mobile</th>\r\n                    <th>Email</th>\r\n                    <th>Place</th>\r\n                    <th>Query</th>\r\n                    <th id=\"firDiv\">Actions</th>\r\n                    \r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngFor =\"let post of posts | async\">\r\n                  <tr (click)=\"getPost(post.id)\">\r\n                    <td >{{ post.data.fname }}  {{ post.data.lname }}</td>\r\n                    \r\n                    <td><input style=\" background:transparent;border:none\" type=\"text\" [(ngModel)]=\"post.data.mobile\"></td>\r\n                    \r\n                    <td>{{post.data.email}}</td>\r\n                    <td>{{post.data.place}}</td>\r\n                    <td>{{post.data.content}}</td>\r\n                    <td><input type=\"button\" class=\"btn btn-default\" (click)=\"deletePost(post.id)\" value=\"Delete\">\r\n                    <!-- <td><input type=\"button\" class=\"btn btn-default\" (click)=\"editPost(post.id)\" value=\"Edit\"> -->\r\n                      </td>\r\n                  </tr>\r\n                  \r\n                </tbody>\r\n              </table>\r\n        </div>\r\n        </div>\r\n        </div>\r\n</div>\r\n\r\n    <div class=\"container\">\r\n  \r\n          </div>\r\n    "

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_routing__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_dashboard_dashboard_component__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__dashboard_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2_app_pages_dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        providers: []
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(afs, toastr, vcr) {
        this.afs = afs;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.toastr.info('Welcome Admin!');
        this.postCol = this.afs.collection('posts');
        this.posts = this.postCol.snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
    };
    DashboardComponent.prototype.addPost = function (e) {
        this.afs.collection('posts').add({ 'fname': this.fname, 'lname': this.lname, 'email': this.email, 'mobile': this.mobile, 'place': this.place, 'content': this.content });
    };
    DashboardComponent.prototype.getPost = function (postId) {
        this.postDoc = this.afs.doc('/posts/' + postId);
        this.post = this.postDoc.valueChanges();
    };
    DashboardComponent.prototype.deletePost = function (postId) {
        this.afs.doc('posts/' + postId).delete();
        this.toastr.error('Query Deleted');
    };
    DashboardComponent.prototype.editPost = function (postId) {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__(1030),
        styles: [__webpack_require__(1001)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["b" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["b" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_pages_dashboard_dashboard_component__ = __webpack_require__(944);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1_app_pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ })

});
//# sourceMappingURL=20.chunk.js.map