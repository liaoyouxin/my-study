<template>
  <div id="app">
    <div class="app-head">
      <div class="app-head-inner">
      <div class="head-logo">
        <router-link :to="{path:'/'}">
          <img src="./assets/logo.png" >
          <b class="web-name">StudyShop</b>
        </router-link>
      </div>
      <div class="head-nav">
        <ul class="login-list">
         <li @click="showLogin">登录 </li>
         <li class="nav-pile">|</li>
         <li>注册 </li>
         <li class="nav-pile"> | </li>
         <li> 关于</li>
       </ul>
      </div>
      </div>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="app-foot">
      ©2018
    </div>
    <vue-dialog :is-show="isShowLogin" @close="closeDialog('isShowLogin')">
       hello
    </vue-dialog>  
  </div>
</template>

<script>
import VueDialog from './components/dialog'

export default {
  name: 'App',
  components:{
    VueDialog
  },
  data(){
    return{
      isShowLogin:false
    }
  },
  methods:{
    showLogin(){
      this.isShowLogin = !this.isShowLogin
    },
    closeDialog(attr){
      this[attr] = false
    }
  }
}
</script>

<style>
/*css reset*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
html {
    font-size: 62.5%;
    color: #222;
}

::selection {
    background-color: #b3d4fc;
    text-shadow: none;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}
.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}
/* ===============
   自定义页面样式
   =============== */
body {
    background: #f0f2f5;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #444;
}

a {
    color: #666;
    text-decoration: none;
}
.app-head{
  background: #363636;
  color: #b2b2b2;
  height: 60px;
  line-height: 60px;
  width: 100%;
}
.app-content{
  min-height: 600px;
}
.app-head-inner{
  width: 1200px;
  margin: 0 auto;
}
.head-logo{
  float: left;
}
.app-head-inner img{
  width: 40px;
  margin-top: 10px;
}
.head-nav{
  float: right;
}
.head-nav ul{
  overflow: hidden;
}
.head-nav li{
  cursor: pointer;
  float: left;
}
.nav-pile{
  padding: 0 10px;
}
.app-foot{
  text-align: center;
  height: 60px;
  width: 100%;
  line-height: 60px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container{
  width: 1200px;
  margin:0 auto;
}
.web-name{
    float: right;
    margin-left: 10px;
    display: inline-block;
    font-size: 20px;
    line-height: 60px;
    color: #fff;
}
</style>
