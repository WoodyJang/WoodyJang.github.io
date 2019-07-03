(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{170:function(e,t,i){e.exports=i.p+"assets/img/mvvm.79a53661.png"},171:function(e,t,i){e.exports=i.p+"assets/img/mvvm2.85ba41bb.png"},183:function(e,t,i){"use strict";i.r(t);var a=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"谈谈对mvvm的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对mvvm的理解","aria-hidden":"true"}},[e._v("#")]),e._v(" 谈谈对MVVM的理解")]),e._v(" "),a("h5",{attrs:{id:"mvvm软件架构模式是由model-view-viewmodel组成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm软件架构模式是由model-view-viewmodel组成。","aria-hidden":"true"}},[e._v("#")]),e._v(" mvvm软件架构模式是由Model-View-ViewModel组成。")]),e._v(" "),a("p",[a("img",{attrs:{src:i(170),alt:"“图片描述”"}})]),e._v(" "),a("ol",[a("li",[e._v("View 故名思议就是视图层，主要负责界面和数据的展示")]),e._v(" "),a("li",[e._v("Model 也就是数据层，主要是后端与数据库进行的相关交互所返回的数据，对我们前端而言，也就是我们通常通过api所获取到的数据。")])]),e._v(" "),a("h5",{attrs:{id:"mvvm原理各个部分的分工"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm原理各个部分的分工","aria-hidden":"true"}},[e._v("#")]),e._v(" mvvm原理各个部分的分工")]),e._v(" "),a("p",[a("img",{attrs:{src:i(171),alt:"“图片描述”"}})]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("ViewModel 是视图数据层，也是MVVM模式中的核心。ViewModel主要包含两个方面，视图的行为和视图的状态。通常我们通过api所获取到的数据，一般是视图的状态，举个栗子，比如一个2个tab页，我们需要tab也展示第二个tab页的内容（默认一般显示第一个），但是我们通过api接口所获取到的数据，只有第二个tab页的数据，并没有包含展示第二个tab页的行为描述。也就是说我们能拿到数据，但是页面并不会像我们想象的一样去直接显示第二个tab页。这个时候ViewModel核心作用就来了，我们让Model与ViewModel进行交互，通过ViewModel对数据进行再封装，将数据以及行为都封装在ViewModel中,然后通过ViewModel去控制View层的界面行为和数据展示。同时由于MVVM实现了双向数据绑定，ViewModel的内容的更改会直接展现在View层，不需要我们再去获取DOM元素去更新视图，MVVM框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护ViewModel，更新数据视图就会自动得到相应更新，真正实现数据驱动开发。这样就完全解耦了View和Model层，使前后端分离成为了可能。")])])])}],s=i(0),v=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);v.options.__file="MVVM.md";t.default=v.exports}}]);