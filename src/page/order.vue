<template>
	<div class="order-wrap">
		<ul class="order-nav">
			<li style="margin-top:2px">
				<span class="nav-title">选择产品：</span>
				<span class="nav-component">
					<selection :selections="selections"></selection>
				</span>
			</li>
			<li>
				<span class="nav-title">选择开始时间：</span>
				<span class="nav-component">
					<date-picker v-model="startTime"></date-picker>
				</span>
			</li>
			<li>
				<span class="nav-title">选择结束时间：</span>
				<span class="nav-component">
					<date-picker v-model="endTime"></date-picker>
				</span>
			</li>
			<li>
				<span class="nav-title"></span>
				<span class="nav-component">
					<input class="keys" placeholder="请输入关键字" type="text" v-model="keys" />
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
    import Selection from '../components/vueselect'
    import DatePicker from 'vue2-datepicker'
	export default{
		components:{
			Selection,
			DatePicker
		},
		data(){
			return{
				keys:'',
				startTime:null,
				endTime:null,
				selections:[
				   {
				   	name:'vue.js教程',
				   	value:0
				   },
				   {
				   	name:'webpack实战',
				   	value:1
				   },
				   {
				   	name:'微信小程序开发',
				   	value:2
				   }
				]
			}
		}
	}
</script>

<style scoped>
    .order-wrap{
    	width:90%;
    	margin-left:auto;
    	padding-top:20px;
    }
	.order-nav li{
		float:left;
		margin-left:10px
	}
	.nav-title{
		display:inline-block;
	}
	.nav-component{
		display:inline-block;
		padding:2px;
	}
	.keys{
		height:30px;
		padding-left:10px;
		border:1px solid #ccc;
		border-radius:5px;
		outline:none;
	}
</style>