<template>
  <div class="counter-wrap">
        <div class="counter-btn" @click="minus"> - </div>
		<div class="counter-show">
		     <input type="text" v-model="number" @keyup="fixNumber">
	    </div>
		<div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>
export default {
  name: 'vuecounter',
  props:{
  	min:{
  		type:Number,
  		default:0
  	},
  	max:{
  		type:Number,
  		default:10
  	}
  },
  data () {
    return {
      number: this.min
    }
  },
  watch:{
  	number(){
  	  this.$emit('on-change',this.number)
  	  console.log(this.number)
  	}
  },
  methods:{
  	fixNumber(){
  		if(this.number > this.max){
  			this.number = this.max
  		}
  		if(this.number < this.min){
  			this.number = this.min
  		}
  	},
  	add(){
  		if(this.number>=this.max){
  			this.number=this.max
  		}else{
  			this.number=this.number+1
  		}
  	},
  	minus(){
  		if(this.number<=this.min){
  			this.number=this.min
  		}else{
  			this.number=this.number-1
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .counter-wrap div{
		display: inline-block;
		float: left;
	}
	.counter-btn{
		padding:8px 12px;
		background: #e4e4e4;
		cursor: pointer;
	}
	.counter-show input{
	 text-align: center;
     width: 40px;
     height: 26px;
     outline: none;
     border: 1px solid #e4e4e4;
	}
</style>
