<template>
    <div>
        <div class="mask" @click="flag=true">+发起服务</div> 
        <transition name="slide-fade">
           <div class="msg" v-show="flag" @click='flag=false'></div>  
        </transition>
     <transition name="fade">
   <div class="small" v-show="flag">
        <div>
           <div @click="$router.push({path:'/commit/overtime',params:{type:'overtime'}})">
          <span class="iconfont icon-jianpan"></span>
          <span>加班</span>
        </div>
          <div @click="$router.push({path:'/commit/vacation',params:{type:'vacation'}})">
          <span class="iconfont icon-whatsapp"></span>
          <span>休假</span>
        </div>
        </div>  
      </div>  
     </transition>
                 
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
flag:false,
show:true
        }
    },
    computed:{

    },
    methods:{

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
.mask {
  width: pxTorem(70px);
  height: pxTorem(30px);
  background: green;
  position: absolute;
  bottom: pxTorem(20px);
  border-radius: pxTorem(30px);
  color: #fff;
  text-align: center;
  line-height: pxTorem(30px);
  right: pxTorem(20px);
}
.msg {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: absolute;
  top: 0;
  z-index:99;
}

.small {
  width: 100%;
  height: pxTorem(200px);
  background: #fff;
  position: absolute;
  bottom: 0;
  z-index: 999;
  >div{
    @include box_flex;
    @include align;
   @include justify(space-around);
   >div{
     @include box_flex;
     @include justify;
     margin-top:20%;
     @include direction(column);
   }
   div>span:nth-child(1){
     font-size:pxTorem(15px);
     color:yellow;
   }
    div:nth-child(2)>span:nth-child(1){
     font-size:pxTorem(15px);
     color:green;
   }
  }
}
.fade-enter-active,.fade-leave-active {
  transition: transform 1s;
}
 .fade-fade-enter-to, .fade-leave{
  transition:translateY(0);
  opacity: 0;
}
.fade-enter, .fade-leave-to
 {
  transform: translateY(100%);
  opacity: 0;
}
</style>