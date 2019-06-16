<template>
  <div class="tabBox">
            <div>
     <b :class="{active:ind===index}" v-for="(item,index) in chooseObject" :key="index" @click="chooseFn(index,item.type)">{{item.title}}</b>
    </div>
         <p>
                   <span class="icon iconfont">批量</span>
                    <span class="iconfont icon-gengduo-2"></span>
               </p>
           </div>
   
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            ind:0,
            chooseObject:[
                {
                    title:"加班",
                    type:"overtime"
                },
                 {
                    title:"休假",
                    type:"vacation"
                }
            ]
        }
    },
    computed:{

    },
    methods:{
chooseFn(index,type){
    this.ind=index;
  this.$emit("chooseFn",index,type);
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
.tabBox{
       
        width:100%;
        height: pxTorem(60px);
        @include box_flex;
       @include justify;
       @include align;
       margin-top: pxTorem(20px);
       @include sizing;
       background: #fff;
     
       >div{
           @include box_flex;
           width:pxTorem(200px);
           height: pxTorem(25px);
           b{
              @include flex;
              border:1px solid #0C6142; 
              text-align: center;
              line-height: pxTorem(25px);
              color: #000;
           }
           .active{
               background: #0C6142;
               color: #fff;
           }
           b:nth-child(2){
               border-bottom-right-radius: pxTorem(20px);
               border-top-right-radius: pxTorem(20px);
           }
           b:nth-child(1){
            border-bottom-left-radius: pxTorem(20px);
            border-top-left-radius: pxTorem(20px);
           }
          
       }
    }
</style>