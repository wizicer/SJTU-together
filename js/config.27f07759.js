(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config"],{1071:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"config"},[a("el-form",{ref:"form",attrs:{"label-position":"top"}},[a("el-form-item",{attrs:{label:"Config"}},[a("el-input",{attrs:{type:"textarea",rows:"20"},model:{value:t.config,callback:function(e){t.config=e},expression:"config"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.saveData}},[t._v("Save")]),a("el-button",{on:{click:t.loadData}},[t._v("Reset")])],1)],1)],1)},n=[],i=a("d4ec"),c=a("bee2"),s=a("262e"),l=a("2caf"),r=a("9ab4"),f=a("60a3"),u=function(t){Object(s["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.config="",t}return Object(c["a"])(a,[{key:"mounted",value:function(){this.loadData()}},{key:"loadData",value:function(){this.config=window.localStorage.getItem("config")||"{}"}},{key:"saveData",value:function(){try{JSON.parse(this.config)}catch(t){return void this.$notify({type:"error",title:"Error",message:"Failed to save due to: "+t})}window.localStorage.setItem("config",this.config),this.loadData(),this.$notify({type:"success",title:"Success",message:"Success Saved"})}}]),a}(f["b"]);u=Object(r["a"])([Object(f["a"])({components:{}})],u);var p=u,v=p,b=a("2877"),d=Object(b["a"])(v,o,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=config.27f07759.js.map