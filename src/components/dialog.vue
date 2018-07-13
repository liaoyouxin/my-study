<template>
	<div>
		<div class="dialog">
			<div class="dialog-cover" v-show="isShow" @click="closeMysel"></div>
			<transition name="dialog-trans">
				<div class="dialog-content" v-if="isShow">
					<p class="dialog-close" @click="closeMysel">x</p>
				     <slot></slot>
			    </div>
			</transition>
			
	    </div>
	</div>
</template>

<script>
	export default{
		name:'vuedialog',
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			closeMysel(){
				this.$emit("close")
			}
		}
	}
</script>

<style scoped> 
   .dialog{
  	position:fixed;
  	width:100%;
  	height:100%;
  }
  .dialog-cover{
  	background:#000;
  	opacity:.3;
  	position:fixed;
    z-index:100;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
  .dialog-content{
     width:50%;
     position:fixed;
     top:20%;
     left:50%;
     margin-left:-25%;
     background:#fff;
     z-index:110;
     border:2px solid #464068;
     padding:2%;
     line-height:1.6;
     overflow:auto;
  }
  .dialog-close{
  	position:absolute;
  	right:10px;
  	top:5px;
  }
  .dialog-trans-enter,.dialog-trans-leave-active{
  	transform:translateY(-500px)
  }
  .dialog-trans-enter-active{
  	transition:.5s ease;
  }
  .dialog-trans-leave-active{
  	transition:.5s ease;
  }
</style>