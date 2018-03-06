webpackJsonp([22,28],{

/***/ 1028:
/***/ (function(module, exports) {

module.exports = "\n<h2 id=\"titlehead\"> \"Meet The Team\" </h2>\n\n<hr>\n<br>\n<div class=\"row\">\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"../assets/pup.jpg\" alt=\"Jane\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Sreenivasan</h2>\n        <p class=\"title\">Admin & Founder</p>\n        <p>Some text that describes me lorem ipsum ipsum lorem.</p>\n        <p>example@example.com</p>\n        <p><button class=\"button\">Contact</button></p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"../assets/pup.jpg\" alt=\"Mike\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Mugesh</h2>\n        <p class=\"title\">Co-Founder/Operations</p>\n        <p>Some text that describes me lorem ipsum ipsum lorem.</p>\n        <p>example@example.com</p>\n        <p><button class=\"button\">Contact</button></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"../assets/pup.jpg\" alt=\"John\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Ramesh</h2>\n        <p class=\"title\">Co-Founder/Marketing</p>\n        <p>Some text that describes me lorem ipsum ipsum lorem.</p>\n        <p>example@example.com</p>\n        <p><button class=\"button\">Contact</button></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n        <div class=\"card\">\n          <img src=\"../assets/pup.jpg\" alt=\"John\" style=\"width:100%\">\n          <div class=\"container\">\n            <h2>Nikkash</h2>\n            <p class=\"title\">Co-Founder/Marketing</p>\n            <p>Some text that describes me lorem ipsum ipsum lorem.</p>\n            <p>example@example.com</p>\n            <p><button class=\"button\">Contact</button></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"column\">\n            <div class=\"card\">\n              <img src=\"../assets/pup.jpg\" alt=\"John\" style=\"width:100%\">\n              <div class=\"container\">\n                <h2>Palavesam</h2>\n                <p class=\"title\">Designer and Developer</p>\n                <p>Some text that describes me lorem ipsum ipsum lorem.</p>\n                <p>example@example.com</p>\n                <p><button class=\"button\">Contact</button></p>\n              </div>\n            </div>\n          </div>\n</div>\n"

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aboutus_component__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_routing__ = __webpack_require__(976);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusModule", function() { return AboutusModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutusModule = (function () {
    function AboutusModule() {
    }
    return AboutusModule;
}());
AboutusModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__aboutus_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__aboutus_component__["a" /* AboutusComponent */]
        ]
    })
], AboutusModule);

//# sourceMappingURL=aboutus.module.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    return AboutusComponent;
}());
AboutusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aboutus',
        template: __webpack_require__(1028),
        styles: [__webpack_require__(999)]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);

//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aboutus_component__ = __webpack_require__(942);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_1__aboutus_component__["a" /* AboutusComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=aboutus.routing.js.map

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "html {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\np {\n  color: orange; }\n\n#titlehead {\n  text-align: center;\n  color: orange; }\n\nhr {\n  border-color: skyblue; }\n\nH2 {\n  color: black; }\n\n.column {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 16px;\n  padding: 0 8px; }\n\n@media (max-width: 650px) {\n  .column {\n    width: 100%;\n    display: block; } }\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.container {\n  padding: 0 16px; }\n\n.container::after, .row::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.title {\n  color: grey; }\n\n.button {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%; }\n\n.button:hover {\n  background-color: #555; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=22.chunk.js.map