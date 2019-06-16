<template>
    <div class="wrap">
<div> 
    <span> &nbsp;&nbsp;&nbsp;X</span>
    <span>&nbsp;&nbsp;欢迎来到星享俱乐部</span>
   </div>
   <div>
       <input type="text" placeholder="手机号码" v-model="text"><br>
       <input type="password" placeholder="验证码" v-model="pwd"><br>
       <button @click="login">登录/注册</button>
   </div>
    </div>
</template>
<script>
import request from "@/request.js";
import api from "../api/index";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
       text:"",
       pwd:""
        }
    },
    computed:{

    },
    methods:{
login(){
const reg=/^1[359]\d{9}/;
  if(reg.test(this.text)&&this.pwd.trim()!=="")
  {
    api.userhome({
          phone:this.text,
          password:this.pwd
      }).then(res=>{
          window.localStorage.setItem("token",res.token);
          this.$router.back();
      }).catch(error=>{
          console.log(error.response);
      })
  }else{
      alert("请输入正确答案");
  }
}
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../static/_minix.scss";
@import "../../static/common.scss";
.wrap{
    width:100%;
    height:100%;
    div:nth-child(1){
        width:100%;
        height:pxTorem(80px);
        box-shadow:pxTorem(0px) pxTorem(5px) pxTorem(15px) #ccc;
        span{
            display:block;          
        }
        span:nth-child(1){
        padding:pxTorem(5px) 0 ;  
        @include sizing;
        }
        span:nth-child(2){
            margin-top:pxTorem(10px);
            font-size:pxTorem(18px);
        }
    }
    div:nth-child(2){
        width:100%;
        input{
            width:90%;
            height:pxTorem(50px);
             line-height:pxTorem(50px);
            border-bottom:pxTorem(1px) solid #ccc;
            padding:0 pxTorem(10px);
            @include sizing;
            margin-left:5%;
        }
        button{
            background:#eee;
            width:90%;
            height:pxTorem(45px);
            line-height:pxTorem(45px);
            font-size:pxTorem(18px);
            margin-left:5%;
            border:none;
            border-radius:pxTorem(45px);
            margin-top:pxTorem(50px);
            color:#fff;
        }
    }
}
</style>