<template>
      <!-- <div class="leave"> -->
        <div @click="$router.push({name:'work',params:{type:item.list_type,id:item.applicationNumber}})">
           <div>
           <span>{{item.applicationNumber}}</span>
           <span>
           <span class="iconfont icon-xuanzhong-01"></span>
           待审批</span> 
           </div> 
        <div>
               <span>申请人</span>&nbsp;
               &nbsp;&nbsp;<span>{{item.nickname}}</span>
               &nbsp;<span>加班类型</span>
               <span>{{changeType(item.type,item.list_type)}}</span>           
            </div> 
             <div>
               <span>加班日期</span>
               <span>{{item.startTime}}</span>
               <span>加班时数</span>
               <span>{{item.endTime}}</span>        
            </div>     
       </div> 
   <!-- </div> -->
</template>
<script>
export default {
    props:["item"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
    
    },
    methods:{
  changeType(type,listType){
      if(listType==="overtime"){
          switch (type){
          case 1: return "双休日"
          case 2: return "节假日"
          case 3: return "工作日"
          default :return "调休"
        } 
      }else{
          switch(type){
              case 1:
              return "年假休假"
              case 2:
              return "节假日加班"
              default:return '加班'
          }
      }
     
  }
    },
    created(){
    },
    mounted(){

    }
}
</script>
<style lang="scss">
@import "../../static/_minix.scss";
@import "../../static/common.scss";
.leave{
    width:100%;
    height:pxTorem(440px);
    background:#eee;
    overflow-y: auto;
    >div{
        width:100%;
        margin-top:pxTorem(5px);
        div{
        width:100%;
        height:pxTorem(40px);
        @include box_flex;
        @include justify(space-between);
        @include sizing;
        @include align;
        padding:pxTorem(3px) pxTorem(5px);
        background:#fff;
        .icon-xuanzhong-01{
            color:yellow !important;
            font-size:pxTorem(15px);
        }
        >span{
            text-align:right;
            border:none;
        }
        span:nth-child(1){
            color:#ccc;
        }
        span:nth-child(3){
             color:#ccc;
        }
    }
    }
    }
</style>