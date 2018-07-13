<template>
	<div class="pay">
		<ul class="paylist">
			<li v-for="(item,index) in payTypes" :class="[{active:index === nowIndex}]" 
			:key="index" @click="chooseMe(index)">
				<img :src="item.src" alt="">
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				nowIndex:0,
				payTypes:[
				{
					value:'wechat',
					src:require('../assets/images/wechat.png')
				},
				{
					value:'alipay',
					src:require('../assets/images/alipay.png')
				}
				]
			}
			
		},
		methods:{
			chooseMe(index){
				this.nowIndex = index
				this.$emit('on-change',this.payTypes[index].value)
			}
		}
	}
</script>

<style scoped>
	.paylist{
		width:100%;
		float:left;
		margin-top:10px;
		margin-bottom:10px;
	}
	.paylist li{
		float:left;
		height:32px;
		width:100px;
		border:1px solid #e4e4e4;
		margin-right:10px;
		border-radius:3px;
		cursor:pointer
	}
	.paylist .active{
		border:1px solid green;
	}
	.paylist img{
		width:100px;
		height:30px
	}
</style>