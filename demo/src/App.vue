<template>
  <div id="app">
    <keep-alive include="home">
  <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import request from "./request";
import api from "./api/index";
import axios from "axios";
export default {
  name: 'App',
  created(){
    api.islogin();
    //request.get("/api/user/info")
    // axios.get("/api/user/info").catch(res=>{
    //   if(res.response.status===401){
    //     alert("未登录");
    //   }                                                                                                                                                                              、

    
    // })
  }
}
</script>

<style lang="scss">
@import "./static/_minix.scss";
@import "./static/common.scss";
#app{
  width:100%;
  height:100%;
  @include box_flex;
  @include direction(column);
  @include sizing;
  >div{
    width:100%;
    height:100%;
  }
}
header{
  width:100%;
  height:pxTorem(150px);
  border-bottom:1px solid #000;
  box-shadow:pxTorem(0px) pxTorem(5px) pxTorem(15px) #ccc;
  >div:nth-child(1){
    width:100%;
    height:pxTorem(50px);
    line-height:pxTorem(50px);
    @include box_flex;
    @include justify(space-between);
    span{
      font-size:pxTorem(14px);
    }
    p{
      font-size:pxTorem(15px);
    }
  }
  >div:nth-child(2){
    width:100%;
    @include box-flex;
    margin-top:pxTorem(30px);
    dl{
   width:33%;
   height:pxTorem(50px);
    @include box_flex;
    @include justify(space-between);
    @include align;
    @include direction(column);
    dt>span{
     font-size:pxTorem(16px);
    }
    dd{
      line-height:pxTorem(30px);
    }
    }
  }
}
</style>
