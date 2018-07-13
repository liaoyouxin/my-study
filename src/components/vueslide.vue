<template>
	<div class="slide-wrap" @mouseover="stopplay" @mouseout="autoplay">
		<div class="slide-img">
			<a :href="slides[nowIndex].url">
				<transition name="slide-old">
					<img class="oldSlide" v-if="!isShow" :src="slides[nowIndex].src" alt="">
				</transition>
				<transition name="slide-new">
					<img class="newSlide" v-if="isShow" :src="slides[nowIndex].src" alt="">
				</transition>	
			</a>
		</div>
		<div class="slide-info">
			<p class="slide-title">123</p>
			<ul class="slide-nav">
				<li @click="pickme(prevIndex)">&lt;</li>
				<li v-for="(item,index) in slides" :class="{ 'active': index == nowIndex }" @click="pickme(index)"
				>
				{{index + 1}}
			    </li>
				<li @click="pickme(nextIndex)">&gt;</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'vue-slide',
		props:{
			slides:{
				type:Array,
				default:[]
			},
			invtime:{
				type:Number,
				default:2000
			}
		},
		data(){
			return{
				nowIndex:0,
				isShow:true
			}
		},
		methods:{
		   pickme(index){
		   	 this.isShow = false
		   	 setTimeout(()=>{
		   	 	this.nowIndex = index
		   	 	this.isShow=true
		   	 },10)
		   },
		   autoplay(){
		   	this.time=setInterval(()=>{ 
		   		this.pickme(this.nextIndex)
		   	},this.invtime)
		   },
		   stopplay(){
		   	clearInterval(this.time)
		   }
	    },
	    computed:{
	    	prevIndex(){
	    		if(this.nowIndex === 0){
	    			return this.slides.length-1
	    		}
	    		return this.nowIndex-1
	    	},
	    	nextIndex(){
	    		if(this.nowIndex === this.slides.length-1){
	    			return 0
	    		}
	    		return this.nowIndex+1
	    	}

	    },
	    mounted(){
	    	this.autoplay()
	    }
	}
</script>

<style scoped>
	.slide-wrap{
		width:100%;
		position:relative;
	}
	.slide-img{
		position:relative;
		width:100%;
		height:300px;
		overflow:hidden;
	}
	.slide-wrap img{
		width:100%;
		height:300px;
		position:absolute;
	}
	.slide-info{
		position:absolute;
		bottom:0px;
		left:0px;
		width:100%;
		height:30px;
		line-height:30px;
		background:rgba(0,0,0,.6);
		color:#fff;
	}
	.slide-title{
		float:left;
		text-indent:20px;
		width:300px;
	}
	.slide-nav{
		float:right
	}
    .slide-nav li{
    	float:left;
    	width:30px;
    	height:30px;
    	cursor: pointer;
    	text-align:center;
    }
    .slide-nav .active{
    	background:green;
    }
    .slide-new-enter{
    	transform:translateX(820px);
    }
    .slide-new-enter-active{
    	transition:all 1s ease;
    }
    .slide-old-leave{
    	transform:translateX(0px)
    }
    .slide-old-leave-active{
    	transition:all 1s ease;
    	transform:translateX(-820px)
    }
</style>