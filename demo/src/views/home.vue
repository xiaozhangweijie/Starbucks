<template>
  <div>
    <header>
      <div>
        <span class="iconfont icon-xiangzuo"></span>
        <p>加班/休假</p>
        <div>
          <span class="iconfont icon-riqixuanze"></span>&nbsp;&nbsp;
          <span class="iconfont icon-fangdajing"></span>
        </div>
      </div>
      <Tap @change="change"></Tap>
    </header>
    <section>  
      <el-over @chooseFn="chooseFn">              
              </el-over>
      <div class="leave">
   <el-list v-for="(item,ind) in list" :key="ind" :item="item"></el-list>
      </div>  
     <el-mask></el-mask>
      <!-- <div class="mask" @click="flag=true">+发起服务</div>
      <div class="msg" v-show="flag" @click='flag=false'></div>
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
      </div> -->
    </section>
  </div>
</template>
<script>
import Tap from "../components/Tap.vue";
import elList from "../components/el-list.vue";
import elOver from "../components/el-over.vue";
import elMask from "../components/el-mask.vue";
import api from "../api/index";
import request from "../request.js";
export default {
  name:"home",
  props: {},
  components: {
    Tap,
    elList,
    elOver,
   elMask
  },
  data() {
    return {
      flag: false,
      sta:false,
      tableOptions:{
          status:0,
          type:"overtime",
          create_at:0,
          pageSize:10,
          page:1
      },
      list:[],
         ind:0

    };
  },
  computed: {},
  methods: {
    change(ind) {
      this.tableOptions.status = ind;
      this.tableOptions.type ="overtime";
      this.getTaskList();
    },
    getTaskList() {
     api.getlist({
          ...this.tableOptions
        })
        .then(res => {
           res.data.map(item=>{
               item.endTime=this.ends(item.startTime,item.endTime);
               item.startTime=this.transfrom(item.startTime);
           }) 
          this.list=res.data;
        });
    },transfrom(time){
     let data=new Date(time);
     let year=data.getFullYear();
     let month=data.getMonth()+1;
         month<10?'0'+month:month;
     let day=data.getDate();
     return `${year}-${month}-${day}`
    },
    ends(start,end){
        let s=new Date(start).getTime();
        let e=new Date(end).getTime();
        let gap=(e-s)/1000/60/60/24;
        return gap.toFixed(2);
    },
      chooseFn(index,type){
     this.tableOptions.type = type;
     this.getTaskList();
      }
    
  },
  created() {
    this.getTaskList();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/_minix.scss";
@import "../../static/common.scss";
section {
  width: 100%;
  height: pxTorem(515px);
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

.holiday {
  width: 100%;
  height: pxTorem(80px);
  @include box_flex;
  @include justify(space-between);
  > div {
    margin-left: 18%;
    width: 40%;
    margin-top: pxTorem(30px);
    height: pxTorem(30px);
    border: 1px solid #ccc;
    @include box_flex;
    border-radius: pxTorem(30px);
    @include justify(space-between);
    line-height: pxTorem(30px);
    span {
      padding: 0px pxTorem(10px);
      color: green;
      @include sizing;
      overflow: hidden;
    }
    .active {
      color: #fff;
      background: green;
      padding: 0 pxTorem(30px);
      border-radius: pxTorem(30px) 0 0 pxTorem(30px);
    }
  }
  > p {
    margin-top: pxTorem(40px);
    padding: 0 pxTorem(10px);
    color: #ccc;
  }
}
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
</style>