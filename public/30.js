webpackJsonp([30],{

/***/ "./node_modules/_babel-loader@7.1.1@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/tag/Create.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            formItem: {
                type: [],
                thumb: ''
            },
            imgName: '',
            visible: false,
            csrfToken: window.Laravel.csrfToken,
            plug_tags: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        axios.get('admin/plug_all_info').then(function (res) {
            console.log(res);
            _this.plug_tags = res.data;
        });
    },

    methods: {
        handleSuccess: function handleSuccess(res, file) {
            this.formItem.thumb = res.url;
        },
        handleView: function handleView(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove: function handleRemove() {
            this.formItem.thumb = '';
        },
        on_sel: function on_sel(v) {
            this.formItem.type = v;
            console.log(this.formItem.type);
        },
        add_to: function add_to() {
            axios.put('admin/tag/create', { data: this.formItem }).then(function (res) {
                console.log(res);
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/_css-loader@0.28.4@css-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3262f356\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/tag/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.4@css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.small-upload-list[data-v-3262f356] {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.2);\n  margin-right: 4px;\n}\n.small-upload-list img[data-v-3262f356] {\n  width: 100%;\n  height: 100%;\n}\n.small-upload-list-cover[data-v-3262f356] {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0,0,0,0.6);\n}\n.small-upload-list:hover .small-upload-list-cover[data-v-3262f356] {\n  display: block;\n}\n.small-upload-list-cover i[data-v-3262f356] {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n.div_center[data-v-3262f356] {\n  margin: 50px auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_vue-loader@12.2.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3262f356\",\"hasScoped\":true}!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/tag/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Breadcrumb', {
    staticStyle: {
      "margin-bottom": "15px",
      "font-size": "12px"
    }
  }, [_c('Breadcrumb-item', [_vm._v("主页")]), _vm._v(" "), _c('Breadcrumb-item', [_vm._v("分类管理")]), _vm._v(" "), _c('Breadcrumb-item', [_vm._v("新增标签")])], 1), _vm._v(" "), _c('Form', {
    staticClass: "div_center",
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "model": _vm.formItem,
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "名称"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入"
    },
    model: {
      value: (_vm.formItem.name),
      callback: function($$v) {
        _vm.formItem.name = $$v
      },
      expression: "formItem.name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "类型"
    }
  }, [(_vm.plug_tags.length > 0) ? _c('Cascader', {
    attrs: {
      "data": _vm.plug_tags,
      "change-on-select": ""
    },
    on: {
      "on-change": _vm.on_sel
    },
    model: {
      value: (_vm.formItem.type),
      callback: function($$v) {
        _vm.formItem.type = $$v
      },
      expression: "formItem.type"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "分享图片",
      "prop": "share_img"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formItem.thumb !== ''),
      expression: "formItem.thumb !== ''"
    }],
    staticClass: "small-upload-list"
  }, [_c('img', {
    attrs: {
      "src": _vm.formItem.thumb
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "small-upload-list-cover"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-eye-outline"
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleView(_vm.formItem.thumb)
      }
    }
  }), _vm._v(" "), _c('Icon', {
    attrs: {
      "type": "ios-trash-outline"
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleRemove(1)
      }
    }
  })], 1)]), _vm._v(" "), _c('Upload', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formItem.thumb === ''),
      expression: "formItem.thumb === ''"
    }],
    ref: "upload",
    staticStyle: {
      "display": "inline-block",
      "width": "58px"
    },
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.handleSuccess,
      "type": "drag",
      "headers": {
        "X-CSRF-TOKEN": _vm.csrfToken
      },
      "action": "/admin/upload_tag_img"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "58px",
      "height": "58px",
      "line-height": "58px"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "camera",
      "size": "20"
    }
  })], 1)])], 1), _vm._v(" "), _c('Form-item', [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.add_to
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('Button', {
    staticStyle: {
      "margin-left": "8px"
    },
    attrs: {
      "type": "ghost"
    }
  }, [_vm._v("取消")])], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "查看图片"
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [(_vm.visible) ? _c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": _vm.imgName
    }
  }) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3262f356", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/_vue-style-loader@3.0.1@vue-style-loader/index.js!./node_modules/_css-loader@0.28.4@css-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3262f356\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/tag/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.4@css-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3262f356\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/tag/Create.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.0.1@vue-style-loader/lib/addStylesClient.js")("920bde22", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3262f356\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!../../../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3262f356\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!../../../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/admin/tag/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/_vue-style-loader@3.0.1@vue-style-loader/index.js!./node_modules/_css-loader@0.28.4@css-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3262f356\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_stylus-loader@3.0.1@stylus-loader/index.js!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/tag/Create.vue")
}
var Component = __webpack_require__("./node_modules/_vue-loader@12.2.2@vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/_babel-loader@7.1.1@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/tag/Create.vue"),
  /* template */
  __webpack_require__("./node_modules/_vue-loader@12.2.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3262f356\",\"hasScoped\":true}!./node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/tag/Create.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3262f356",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\www\\wowo\\resources\\assets\\js\\components\\admin\\tag\\Create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3262f356", Component.options)
  } else {
    hotAPI.reload("data-v-3262f356", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});