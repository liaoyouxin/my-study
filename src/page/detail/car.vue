<template>
	<div class="car-wrap">
		<div class="car-buy">
			<h2 class="name">开发工具</h2>
			<p class="description">开发工具是一种用于开发编程的便捷工具，对于程序员来说是必不可少的，熟练运用开发工具能极高的提升工作效率，规范代码，管理，更新代码。</p>
			<hr>
			<ul class="buy-control">
				<li>
					<span class="buy-item">购买数量</span>
					<span class="buy-details">
						<vue-counter :min="1" :max='20' @on-change="getParams('number',$event)"></vue-counter>
					</span>
				</li>
				<li>
					<span class="buy-item">商品名</span>
					<span class="buy-details">
						<vue-selection :selections="selections"  @on-change="getParams('goodtype',$event)"></vue-selection>
					</span>
				</li>
				<li>
					<span class="buy-item">使用年限</span>
					<span class="buy-details">
						<vue-choose :chooses="chooses"  @on-change="getParams('time',$event)"></vue-choose>
					</span>
				</li>
				<li>
					<span class="buy-item">总价</span>
					<span class="buy-item">
						{{ price }}
					</span>
				</li>
				<li>
					<div class="button" @click="showBuyCar = !showBuyCar">立即购买</div>
				</li>
			</ul>
		</div>
		<div class="car-details">
			<h2 class="name">开发工具</h2>
			<p class="description">开发工具是一种用于开发编程的便捷工具，对于程序员来说是必不可少的，熟练运用开发工具能极高的提升工作效率，规范代码，管理，更新代码。</p>
			<p class="description">开发工具是一种用于开发编程的便捷工具，对于程序员来说是必不可少的，熟练运用开发工具能极高的提升工作效率，规范代码，管理，更新代码。</p>
			<p class="description">开发工具是一种用于开发编程的便捷工具，对于程序员来说是必不可少的，熟练运用开发工具能极高的提升工作效率，规范代码，管理，更新代码。</p>
			<p class="description">开发工具是一种用于开发编程的便捷工具，对于程序员来说是必不可少的，熟练运用开发工具能极高的提升工作效率，规范代码，管理，更新代码。</p>
			<p class="description">开发工具是一种用于开发编程的便捷工具，对于程序员来说是必不可少的，熟练运用开发工具能极高的提升工作效率，规范代码，管理，更新代码。</p>
		</div>
		<vue-dialog :is-show="showBuyCar" @close="closeDialog('showBuyCar')">
			<h2 class="pay-title">购物清单：</h2>
			<table class="buy-dialog-table">
      	 	<tr>
      	 		<th>购买数量</th>
      	 		<th>产品类型</th>
      	 		<th>有效时间</th>
      	 		<th>总价</th>
      	 	</tr>
      	 	<tr>
      	 		<td>{{ number }}</td>
      	 		<td>{{ goodtype.name }}</td>
      	 		<td>{{ time.name }}</td>
      	 		<td>
      	 			{{ price }}
      	 		</td>
      	 	</tr>
      	 </table>
      	 <h3 class="pay-title">请选择支付方式</h3>
      	 <pay-choose @on-change="getParams('paytype',$event)"></pay-choose>
      	 <div class="btn" @click="tobuy">确认购买</div>
	    </vue-dialog>	
	    <check-dialog :is-show-check="isShowCheck" :orderId="orderId"
	     @on-close="closeDialog('isShowCheck')"
	     @on-check="showCheck"></check-dialog>
	     <vue-dialog :is-show="isSuccess" @close="closeDialog('isSuccess')">
	     	支付成功！！！
	     </vue-dialog>
	     <vue-dialog :is-show="isError" @close="closeDialog('isError')">
	     	支付失败！！！
	     </vue-dialog>
	</div>
</template>

<script>
   import VueCounter from '../../components/vuecounter'
   import VueSelection from '../../components/vueselect'
   import VueChoose from '../../components/choose'
   import VueDialog from '../../components/dialog'
   import PayChoose from '../../components/paychoose'
   import CheckDialog from '../../components/checkdialog'
	export default{
		name:'car',
		components:{
			VueCounter,
			VueSelection,
			VueChoose,
			VueDialog,
			PayChoose,
			CheckDialog
		},
		data(){
			return{
				showBuyCar:false,
				isShowCheck:false,
				isSuccess:false,
				isError:false,
				price:0,
				number:0,
				time:0,
				goodtype:0,
				orderId:null,
				paytype:null,
				selections:[
				  {
				  	name:'vue.js开发',
				  	value:0
				  },
				  {
				  	name:'less',
				  	value:1
				  },
				  {
				  	name:'webpack',
				  	value:2
				  }
				],
				chooses:[
				  {
				  	name:'一年',
				  	value:0
				  },
				  {
				  	name:'两年',
				  	value:1
				  },
				  {
				  	name:'三年',
				  	value:2
				  }
				]
			}
		},
		methods:{
			getParams(attr,value){
				this[attr] = value
				this.getPrice()
			},
			getPrice(){
				let params = {
					number:this.number,
					goodtype:this.goodtype.value,
					time:this.time.value
				}
				this.$http.post('/api/getPrice',params)
				    .then((res)=>{
				    	this.price = res.data.amount
				    },(err)=>{
				    	console.log(err)
				    })

			},
			closeDialog(attr){
				this[attr] = false
				if( attr == 'isSuccess'){
					this.$router.push({path:'/orderlist'})
				}
			},
			tobuy(){
				this.isShowCheck = true
				this.showBuyCar = false
				let params={
					number:this.number,
					goodtype:this.goodtype.value,
					time:this.time.value,
					paytype: this.paytype
				}
				this.$http.post('/api/createOrder',params)
				    .then((res)=>{
				    	this.orderId=res.data.orderId
				    })
			},
			showCheck(value){
				this.isShowCheck = false
				if(value){
					this.isSuccess = true
				}else{
					this.isError = true
				}
			}
		},
		mounted(){
			this.number = 1
			this.goodtype = this.selections[0]
			this.time = this.chooses[0]
			this.paytype = 'wechat'
			this.getPrice()
		}
	}
</script>

<style scoped>
  .car-wrap{
  	width:820px;
  }
  .car-buy,.car-details{
  	width:780px;
  	padding:20px;
  	background:#fff;
  }
  .car-details{
  	margin-top:20px;
  }
  .name{
  	font-weight:bold;
  	font-size:18px;
  	margin-bottom:10px;
  }
  .description{
  	line-height:1.6;
  	color:#666;
  }
  .buy-control li{
  	height:30px;
  	margin-top:10px
  }
  .buy-item{
  	display:inline-block;
  	float:left;
  	line-height:30px;
  	margin-right:20px;
  }
  .buy-details{
  	display:inline-block;
  	float:left;
  }
  .button{
  	width:80px;
  	text-align:center;
  	height:30px;
  	background:green;
  	color:#fff;
  	line-height:30px;
  	border-radius:3px;
  	cursor:pointer;
  	margin-top:20px;
  }
  .buy-dialog-table{
  	width:90%;
  	margin:10px auto;
  }
  .buy-dialog-table td{
  	line-height:30px;
  	text-align:center;
  	border:1px solid #ccc;
  }
  .buy-dialog-table th{
  	background:green;
  	color:#fff
  }
  .pay-title{
  	font-size:18px;
  	font-weight:bold;
  }
  .btn{
  	float:left;
  	padding:5px 8px;
  	background:green;
  	color:#fff;
  	cursor:pointer
  }
</style>