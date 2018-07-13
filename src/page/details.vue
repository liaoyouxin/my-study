<template>
  <div class="details-wrap">
      <div class="details-left">
      	 <div class="details-control">
      	 	  <img class="details-img" :src="currentRouter" alt="">
      	 	  <ul class="details-links">
      	 	  	<router-link v-for="(item,index) in links"  :key="index"
      	 	  	:to="{path:item.path}" tag="li" active-class="active"
      	 	  	>
      	 	  	  {{item.name}}
      	 	  	</router-link>
      	 	  </ul>
      	 </div>
      </div>
      <div class="details-right">
        <keep-alive>
      	<router-view></router-view>
      </keep-alive>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
       links:[
          {
          	src:require('../assets/images/car.png'),
          	name:"开发工具",
          	path:'/details/car'
          },
          {
          	src:require('../assets/images/loud.png'),
          	name:"开发框架",
          	path:'/details/loud'
          },
          {
          	src:require('../assets/images/earth.png'),
          	name:"开发用途",
          	path:'/details/earth'
          },
          {
          	src:require('../assets/images/mounter.png'),
          	name:"开发产品",
          	path:'/details/mounter'
          }
       ],
       imgMap:{
       	  '/details/car':require('../assets/images/car.png'),
       	  '/details/loud':require('../assets/images/loud.png'),
       	  '/details/earth':require('../assets/images/earth.png'),
       	  '/details/mounter':require('../assets/images/mounter.png')
       }
    }
  },
  computed:{
  	currentRouter(){
  		return this.imgMap[this.$route.path]
  	}
  }
}
</script>

<style scoped>
  .details-wrap{
  	width:1090px;
  	margin:auto;
  	margin-top:20px;
  }
  .details-wrap>div{
  	float:left;
  }
  .details-left{
  	width:200px;
  	padding-top:20px;
  	padding-bottom:20px;
  	background:#fff;
  }
  .details-right{
  	width:820px;
  	height:500px;
  	margin-left:20px;
  }
  .details-img{
  	width:100px;
  	height:100px;
  	margin-left:50px;
  }
  .details-links{
  	padding-top:10px;
  }
  .details-links li{
  	line-height:36px;
  	text-align:center;
  	cursor:pointer;
  }
  .details-links li:hover{
  	background:green;
  	color:#fff;
  }
  .details-links .active{
  	background:green;
  	color:#fff;
  }
</style>
