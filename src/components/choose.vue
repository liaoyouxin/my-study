<template>
	<div class="choose-wrap">
		<ul class="choose-list">
			<li v-for="(item,index) in chooses" :key="index"
			:class="[{active:index === nowIndex}]"
			@click="chooseThis(index)"
			>{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'vuechoose',
		props:{
			chooses:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				nowIndex:0
			}
		},
		methods:{
			chooseThis(index){
				this.nowIndex = index
				this.$emit('on-change',this.chooses[index])
			}
		}
	}
</script>

<style scoped>
     .choose-list li{
     	padding:8px 10px;
     	float:left;
     	margin-left:10px;
     	border:1px solid #e4e4e4;
     	border-radius:3px;
     	cursor:pointer;
     }
     .choose-list li:first-child{
     	margin-left:0;
     }
     .choose-list .active{
     	background:green;
     	color:#fff;
     }
</style>