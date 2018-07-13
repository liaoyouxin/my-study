<template>
	<div class="select-wrap">
		<div class="select-info" @click="isShow = !isShow">
			<span>{{selections[nowIndex].name}}</span>
			<div class="arrow"></div>
		</div>
		<div class="select-list">
			<ul v-if="isShow">
				<li v-for="(item,index) in selections" @click="selectThis(index)">
					{{ item.name }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'selection',
		props:{
			selections:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				isShow:false,
				nowIndex:0
			}
		},
		methods:{
			selectThis(index){
				this.nowIndex = index 
				this.isShow = false
				this.$emit('on-change',this.selections[index])
			}
		}
	}
</script>

<style scoped>
    .select-wrap{
    	position:relative;
    }
	.select-info{
		padding:8px 20px 8px 10px;
		background:#e4e4e4;
		border-radius:3px;
		cursor:pointer;
		position:relative;
	}
	 .arrow{
    	display: inline-block;
    	border-left: 4px solid transparent;
    	border-right: 4px solid transparent;
    	border-top: 5px solid #666;
    	width: 0;
    	height: 0;
    	margin-top: -1px;
    	margin-left: 6px;
    	margin-right: -14px;
    	vertical-align: middle;
    }
    .select-list{
    	position:absolute;
    	top:30px;
    	width:100%;
    	z-index:5;
    }
    .select-list li{
    	width:100%;
    	line-height:26px;
    	background:#f2f2f2;
    	text-align:center;
    	overflow:hidden;
    	text-overflow:ellipsis;
    	white-space:nowrap;
    	cursor:pointer;
    }
    .select-list li:hover{
    	background:#f5f5f5
    }
</style>