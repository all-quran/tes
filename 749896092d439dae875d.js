(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{230:function(t,e,r){var content=r(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("979ab12c",content,!0,{sourceMap:!1})},231:function(t,e,r){var content=r(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("2b9897cc",content,!0,{sourceMap:!1})},276:function(t,e,r){"use strict";var n=r(230);r.n(n).a},277:function(t,e,r){(e=r(33)(!1)).push([t.i,".surah__header[data-v-4442a390]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.surah__title[data-v-4442a390]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-4442a390]{width:100%;font-size:1.2rem}.surah__trans[data-v-4442a390]{font-style:italic;line-height:2}.surah__count[data-v-4442a390],.surah__trans[data-v-4442a390]{text-align:right}.surah svg[data-v-4442a390]{fill:var(--text-color)}",""]),t.exports=e},278:function(t,e,r){"use strict";var n=r(231);r.n(n).a},279:function(t,e,r){(e=r(33)(!1)).push([t.i,".feed[data-v-2c87ec2c]{display:block;width:90%;margin:1em auto;padding-bottom:1em;border-bottom:1px solid #ccc}.feed__title[data-v-2c87ec2c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:1.5rem}.feed__title svg[data-v-2c87ec2c]{margin-right:.2em}.feed__empty[data-v-2c87ec2c]{text-align:left;padding-top:1em;color:var(--text-color);font-style:italic}",""]),t.exports=e},446:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(15),r(55),r(40);var n=r(6),c=(r(111),r(26)),o=r(35),l=r(28),d=r(27),f=r(16),h=r(3),v=r(17),_=r(8),y=r(139),m=r.n(y),x={translation:"",arabic:"",latin:"",ayah_count:0,index:0,opening:"",closing:""};function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var k=function(t){Object(l.a)(r,t);var e=j(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"getSurahDetailUrl",value:function(t,e){return"/".concat(t,"#verse-").concat(e)}},{key:"goToSurahDetail",value:function(t,e){var path=this.getSurahDetailUrl(t,e);this.$router.push(path)}}]),r}(v.Vue);Object(h.a)([Object(v.Prop)({default:function(){return x}})],k.prototype,"surah",void 0);var O=k=Object(h.a)([v.Component],k),R=(r(276),r(5)),w=Object(R.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah__root"},[r("a",{staticClass:"surah block_content has-shadow",on:{click:function(e){return e.preventDefault(),t.goToSurahDetail(t.surah.index,t.surah.verse)}}},[r("div",{staticClass:"surah__header"},[r("div",{staticClass:"surah__header--left"},[r("div",{staticClass:"surah__index tag_index",staticStyle:{width:"130px"}},[t._v("\n          Ayat ke "+t._s(t.surah.verse)+"\n        ")])]),t._v(" "),r("div",{staticClass:"surah__header--right"},[r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl",lang:"ar"}},[t._v("\n            "+t._s(t.surah.arabic)+"\n          ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n            "+t._s(t.surah.latin)+"\n          ")])])])])])])}),[],!1,null,"4442a390",null).exports,C=r(66),D=r(31);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var A=function(t){Object(l.a)(r,t);var e=S(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle(C.a.LAST_READ),this.setPage("last-verse")}},{key:"activated",value:function(){this.setHeaderTitle(C.a.LAST_READ),this.setPage("last-verse")}},{key:"metaHead",get:function(){return{title:C.r,meta:[{hid:"og:title",property:"og:title",content:C.r},{hid:"twitter:title",name:"twitter:title",content:C.r},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"isHaveLastRead",get:function(){return Object(D.c)(this.lastReadVerse&&this.lastReadVerse.surah)}},{key:"lastReadVerseData",get:function(){var t=this;if(this.isHaveLastRead){var e=this.allSurahList.find((function(e){return e.index===t.lastReadVerse.surah}));return Object.assign({},e,{verse:this.lastReadVerse.verse})}return null}}]),r}(v.Vue);Object(h.a)([_.State],A.prototype,"settingActiveTheme",void 0),Object(h.a)([_.State],A.prototype,"lastReadVerse",void 0),Object(h.a)([_.Mutation],A.prototype,"setHeaderTitle",void 0),Object(h.a)([_.Mutation],A.prototype,"setPage",void 0);var L=A=Object(h.a)([Object(v.Component)({components:{IosBookmarkIcon:m.a,LastReadCard:w},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(0).then(r.t.bind(null,440,3));case 2:return e=t.sent,t.abrupt("return",{allSurahList:e.surah_info.map((function(t,e){return Object.assign({},t,{index:e+1})}))});case 4:case"end":return t.stop()}}),t)})))()}})],A),T=(r(278),Object(R.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosBookmarkIcon",{attrs:{w:"1em",h:"1em"}}),this._v("Ayat terakhir dibaca:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveLastRead?e("div",[e("LastReadCard",{attrs:{surah:this.lastReadVerseData}})],1):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.\n      ")])])])])}),[],!1,null,"2c87ec2c",null));e.default=T.exports}}]);