<template>
	<div class="checkwrap">
		<div class="cover" v-if="isShowCheck" @click="closeSelf"></div>
		<transition name="check-trans">
			<div class="content" v-if="isShowCheck">
				<p class="close"><span @click="closeSelf">X</span></p>
				<div @click="checkStatus" class="btn success">支付成功</div>
		        <div @click="checkStatus" class="btn error">支付失败</div>
			</div>
		</transition>
	</div>
</template>

<script>
   import VueDialog from './dialog'
	export default{
		componets:{
			VueDialog
		},
		props:{
			isShowCheck:{
				type:Boolean,
				default:false
			},
			orderId:{

			}
		},
		data(){
			return{

			}
		},
		methods:{
			closeSelf(){
				this.$emit('on-close')
			},
			checkStatus(){
				this.$http.post('/api/checkOrder',this.orderId)
				    .then((res)=>{
				    	if(res.data.status=="ok"){
				    		this.$emit('on-check',true)
				    	}else{
				    		this.$emit('on-check',false)
				    	}
				    },(err)=>{
				    	this.$emit('on-check',false)
				    })
			}
		}
	}	
</script>

<style scoped>
	.checkwrap{
		position:fixed;
		width:100%;
		height:100%;
	}
	.cover{
		position:fixed;
		width:100%;
		height:100%;
		background:black;
		opacity:.3;
		left:0;
		top:0;
	}
	.content{
		position:fixed;
		top:20%;
		left:25%;
		width:50%;
		padding:2%;
		border:4px solid #000;
		background:#fff
	}
	.close{
		position:absolute;
		right:10px;
		top:10px;
	}
	.btn{
		padding:8px 10px;
		float:left;
		margin-left:10px;
		color:#fff;
		cursor:pointer;
	}
	.success{
		background:green;
	}
	.error{
		background:red;
	}
	.check-trans-enter{
		transform:translateY(-500px)
	}
	.check-trans-enter-active{
		transition:all .5s ease;
	}
	.check-trans-leave-active{
		transition:all .5s ease;
		transform:translateY(-500px)
	}
</style>