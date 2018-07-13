<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2 class="index-type-title index-h">最新产品</h2>
				<template v-for="(product,index) in products">
					<h3 class="index-good-type index-h">{{product.title}}</h3>
					<ul>
					  <li v-for="item in product.goods" :key="item.id">
					  	<a :href="item.url">{{item.name}}</a>
					  	<span class="index-hot" v-if="item.hot"></span>
					  </li>
					</ul>
					<div class="hr" v-if="!product.islast"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2 class="index-type-title index-h">最新新闻</h2>
				<ul>
					<li v-for="(item,index) in newsList" :key="index">
						<a :href="item.url">{{item.name}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<vue-slide :slides="slides" :invtime="invtime"></vue-slide>
			 <div class="index-board-list">
	         <div class="index-board-item"
	              v-for="(item,index) in boardList"
	              :class="[{'line-last': index%2!=0},
	              'index-board-'+item.id]"
	         >  
	           <div class="index-board-item-inner">
	               <h2 class="index-board-h">{{item.title}}</h2>
	               <p class="index-board-description">{{item.description}}</p>
	               <div class="index-board-button">
	                 <a href="" class="button">立即购买</a>
	               </div>
	           </div>
	         </div>
       </div>
    </div>
		</div>
	</div>
</template>

<script>
    import VueSlide from '../components/vueslide'

	export default{
		name:'index',
		components:{
			VueSlide
		},
		data(){
			return{
				invtime:3000,
				products:[
				  {
				  	title:'开发工具',
				  	islast:false,
				  	goods:[
				  	  {id:0,name:"webStorm-11.0.3",url:'/details/car',hot:true},
				  	  {id:1,name:"sublime text 3",url:'/details/loud'},
				  	  {id:2,name:"photoShop",url:'/details/earth',hot:true},
				  	  {id:3,name:"koala",url:'/details/mounter'}
				  	]
				  },
				  {
				  	title:"开发框架",
				  	islast:true,
				  	goods:[
				  	  {id:0,name:"webStorm-11.0.3",url:'https://www.baidu.com'},
				  	  {id:1,name:"sublime text 3",url:'https://www.baidu.com'},
				  	  {id:2,name:"photoShop",url:'https://www.baidu.com'},
				  	  {id:3,name:"koala",url:'https://www.baidu.com'}
				  	]
				  }
				],
				newsList:[
				      {id:0,name:"大新闻啊大新闻",url:'https://www.baidu.com'},
				  	  {id:1,name:"大新闻啊大新闻",url:'https://www.baidu.com'},
				  	  {id:2,name:"大新闻啊大新闻",url:'https://www.baidu.com'},
				  	  {id:3,name:"大新闻啊大新闻",url:'https://www.baidu.com'}
				],
				slides:[
				  {
				  	id:0,
				  	src:require('../assets/slides/slide-1.jpg'),
				  	url:'https://www.baidu.com'
				  },
				  {
				  	id:1,
				  	src:require('../assets/slides/slide-2.jpg'),
				  	url:'https://www.baidu.com'
				  },
				  {
				  	id:2,
				  	src:require('../assets/slides/slide-3.jpg'),
				  	url:'https://www.baidu.com'
				  },
				  {
				  	id:3,
				  	src:require('../assets/slides/slide-4.jpg'),
				  	url:'https://www.baidu.com'
				  }
				],
				boardList:[
					 {
					 	id:'car',
					 	title:'开发必备',
					 	description:'开发任何东西都需要的'
					 },
					 {
					 	id:'earth',
					 	title:'开发必备',
					 	description:'开发任何东西都需要的'
					 },
					 {
					 	id:'loud',
					 	title:'开发必备',
					 	description:'开发任何东西都需要的'
					 },
					 {
					 	id:'mounter',
					 	title:'开发必备',
					 	description:'开发任何东西都需要的'
					 }
				]
			}
		}
	}
</script>

<style scoped>
	.index-wrap{
    width: 1090px;
    margin: 30px auto;
  }
  .index-wrap>div{
    float: left;
  }
  .index-left{
    width: 250px;
    text-indent: 25px;
  }
  .index-left-block{
    width: 100%;
    height: 400px;
    background:#fff;
  }
  .lastest-news{
    margin-top: 20px;
    height: 380px;
  }
  .index-h{
    text-indent: 15px;
    font-weight: bold;
  }
  .index-hot{
  	display:inline-block;
  	width:30px;
  	height:20px;
  	background:url('../assets/images/hot.gif') no-repeat;
  }
  .index-type-title{
    background: #04BB7F;
    height: 40px;
    line-height:40px;
    color:#fff;
  }
  .index-good-type{
    font-weight: bold;
    height: 40px;
    line-height:40px;
  }
  .hr{
    margin-top: 10px;
    width: 100%;
    height: 1px;
    background:#ccc;
  }
  .index-left li{
   line-height: 30px;
  }
  .index-right{
    width: 820px;
    height: 800px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .newsList{
    margin-top:10px;
  }
  .index-board-item{
    width: 400px;
    height: 140px;
    background:#fff;
    float: left;
    margin-top: 20px;
  }
  .line-last{
    margin-left: 20px;
  }
  .index-board-item-inner{
    height: 100%;
    text-indent: 160px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/car.png) no-repeat 20px ;
    background-size: 110px 110px;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/loud.png) no-repeat 20px ;
    background-size: 110px 110px;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/earth.png) no-repeat 20px;
    background-size: 110px 110px;
  }
  .index-board-mounter .index-board-item-inner{
    background: url(../assets/images/mounter.png) no-repeat 20px;
    background-size: 110px 110px;
  }
  .index-board-h{
    font-size: 16px;
    font-weight: bold;
    padding-top: 20px;
  }
  .index-board-description{
    padding-top: 10px;
  }
  .index-board-button{
    padding-top: 20px;
  }
  .button {
    background: #04BB7F;
    color: #fff;
    padding:6px 8px;
    cursor:pointer
  }
</style>