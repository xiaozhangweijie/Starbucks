<template>
    <div class="wrap">
        <div class="bg" v-for="item in list" :key="item.uid">
         <div class="header">
       <span class="iconfont icon-arrow-left" @click="$router.back()">
    </span>
    <span>{{type}}</span>
    <span></span>
   </div>  
   <div>
     <dl>
         <dt>
             <img :src="item.avatar" alt=""></dt>
         <dd>
             <div>
              <span>申请人姓名</span>    
              <span>{{item.nickname}}</span>
              <span class="iconfont icon-angle-right"></span>
             </div>
             <div>
                 <span>直接主管</span>
                 <span>秦毅超</span>
                 <span></span>
             </div>
            
         </dd>
     </dl>     
   </div>   
        </div>
<div class="dd">
    <div class="up">
        <ul v-for="item in list" :key="item.uid">
            <li>
                <span>申请信息</span>
                <span></span></li>
            <li>
                <span>{{over}}日期</span>
                <span>{{new Date(item.create_at).toLocaleDateString()}}</span>
            </li>
            <li>
                <span>{{over}}类型</span>
 
                <span>{{changeType(item.type)}}</span>
                </li>
            <li>
                <span>{{over}}起始时间</span>
                <span>{{new Date(item.startTime).toLocaleDateString()}}</span>
                </li>
            <li>
                <span>{{over}}截止时间</span>
                <span>{{new Date(item.endTime).toLocaleDateString()}}</span>
                </li>
            <li>
                <span>共计时数</span>
                <span>{{endTimes(item.startTime,item.endTime)}}</span>
                </li>
        </ul>
    </div>
    <div class="work">
    <b>{{over}}事由</b>  
    <textarea placeholder="最多可输入200个字"> </textarea>
    </div>
    <div class="last">
        <span class="iconfont icon-tianjia"></span>
        上传附件</div>
        <div class="imgs">
            <div v-for="item in list" :key="item.uid">
                <span v-for="val in item.annex" :key="val">
                    <img :src="'http://localhost:3000'+val" alt="">
                </span>
            </div>
        </div>
</div>
<footer>
    <span>取消全部选择</span>
    <span>确认</span>
</footer>
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
            type:"",
            list:[],
            over:""
        }
    },
    computed:{

    },
    methods:{
        changeType(type){
  switch(type)
  {
      case 1:return '年假休假'
      case 2:return "节假日休假"
      default:return "加班"
  }
        },endTimes(start,end){
        let s=new Date(start).getTime();
        let e=new Date(end).getTime();
        let gap=(e-s)/1000/60/60/24;
        return gap.toFixed(2);
        }
    },
    created(){
        let num=this.$route.params.id;
        let types=this.$route.params.type;
          api[types+"Detail"]({applicationNumber:num}).then(({data})=>{
              this.list.push(data);
          })
       this.type= this.$route.params.type=='overtime'?'办公室加班申请表':'休假申请表'
       this.over=this.$route.params.type=="overtime"?"加班":"休假";
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../static/_minix.scss";
@import "../../static/common.scss";
.wrap> .bg{
    width:100%;
    height:pxTorem(140px);
    background:rgb(6, 114, 6);
    border-bottom-left-radius: pxTorem(20px);
    border-bottom-right-radius: pxTorem(20px);
    >div{
        width:100%;
        height:pxTorem(50px);
        dl{
            width:100%;
            padding:0 pxTorem(20px);
            @include box_flex;
            //@include justify(space-around);
            dt{
                width:pxTorem(50px);
                height:pxTorem(50px);
                background:yellow;
                border-radius:pxTorem(50px);
                >img{
                    width:100%;
                    height:100%;
                }
            }
            dd{
           width:80%;
                div{
            width:90%;
            height:pxTorem(20px);
            line-height:pxTorem(20px);
            @include box_flex;
            @include justify(space-around);
            color:#fff;
            }
            }
        }
    }
}
.header{
    width:100%;
    height:pxTorem(44px);
    line-height:pxTorem(44px);
    @include box_flex;
    @include justify(space-between);
    padding:0 pxTorem(5px);
    @include sizing;
    font-size:pxTorem(18px);
    color:#fff;
}
.dd{
    width:100%;
    height:pxTorem(500px);
    .up{
        width:90%;
        height:pxTorem(250px);
        margin-left:5%;
        margin-top:-5%;
        padding:0 pxTorem(20px);
        background:#fff;
        border-radius:pxTorem(5px);
        border:1px solid #eee;
        @include sizing;
        ul{
            width:100%;
            height:pxTorem(250px);
            li{
                height:pxTorem(40px);
                line-height:pxTorem(40px);
                border-bottom:1px solid #eee;
                @include box_flex;
                @include justify(space-between);
            }
        }
    }
     .work{
        width:90%;
        height:pxTorem(100px);
        margin-left:5%;
        padding:0 pxTorem(20px);
        background:#fff;
        border-radius:pxTorem(5px);
        border:1px solid #eee;
        @include sizing;
        margin-top:pxTorem(10px);
        >b{
            width:100%;
            display:block;
            font-size:pxTorem(18px);
            line-height:pxTorem(44px);
            border-bottom:1px solid #ccc;
        }
        >textarea{
            width:100%;
            @include sizing;
            height:pxTorem(100px);
            margin-top:pxTorem(5px);
            font-size:pxTorem(14px);
        }
    }
     .last{
        width:90%;
        height:pxTorem(50px);
        line-height:pxTorem(45px);
        margin-left:5%;
        padding:0 pxTorem(20px);
        background:#fff;
        border-radius:pxTorem(5px);
        border:1px solid #eee;
        @include sizing;
        margin-top:pxTorem(10px);
        .icon-tianjia{
            color:yellow;
            font-size:pxTorem(20px);
        }
        }
}
footer{
    width:100%;
    height:pxTorem(50px);
    @include box_flex;
    @include justify(space-between);
    position:absolute;
    bottom:0;
    box-shadow:pxTorem(0px) pxTorem(5px) pxTorem(15px) #ccc;
    >span{
        width:50%;
      text-align:center;
      line-height:pxTorem(50px);
    }
    span:nth-child(1){
        color:rgb(3, 94, 3);
    }
     span:nth-child(2){
        background:rgb(3, 94, 3);
        color:#fff;
    }
}
.imgs{
    width:100%;
    height:pxTorem(100px);
    >div{
        width:100%;
        height:100%;
        span{
        width:pxTorem(70px);
        height:pxTorem(70px);
        display:inline-block;
            >img{
                width:100%;
                height:100%;
            }
    }
    }
}
</style>