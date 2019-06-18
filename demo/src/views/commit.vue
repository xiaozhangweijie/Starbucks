<template>
    <div class="wrap">
        <div class="bg">
         <div class="header">
       <span class="iconfont icon-arrow-left" @click="$router.back()">
    </span>
    <span>{{over}}</span>
    <span></span>
   </div>  
   <div>
     <dl>
         <dt>
             <img :src="img" alt="">
            </dt>
         <dd>
             <div>
              <span>申请人姓名</span>    
              <span>{{name}}</span>
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
                <span>
                    </span></li>
            <li>
                <span>{{over}}日期</span>
                <span>
                  <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>  
</span>
            </li>
            <li>
                <span>{{over}}类型</span>
 <span>
     <select name="" id="" v-if="a==='overtime'" v-model="userType">
         <option value="-1">默认</option>
         <option v-for="val in overtimeType" :key="val.id" :value="val.id">{{val.name}}</option>
     </select>
      <select name="" id="" v-else v-model="userType">
         <option value="-1">默认</option>
         <option v-for="val in vacationType" :key="val.id" :value="val.id">{{val.name}}</option>
     </select>
 </span>
                </li>
            <li>
                <span>{{over}}起始时间</span>
                <span>   <el-time-picker
    v-model="start"
      :selectableRange="[
      '21:00:00 - 24:00:00',
      '07:00:00 - 09:00:00'
   ]"
    placeholder="00:00:00">
  </el-time-picker></span>
                </li>
            <li>
                <span>{{over}}截止时间</span>
<span>   <el-time-picker
    v-model="end"
      :selectableRange="[
      '18:30:00 - 20:30:00',
      '07:00:00 - 09:00:00'
      ]"
    placeholder="00:00:00" @change="changeTime">
  </el-time-picker></span>
                </li>
            <li>
                <span>共计时数</span>
<span>{{num}}</span>
                </li>
        </ul>
    </div>
    <div class="work">
    <b>{{over}}事由</b>  
    <textarea placeholder="最多可输入200个字" v-model="textare"> </textarea>
    </div>
    <div class="last">
        <span class="iconfont icon-tianjia"></span>
        上传附件
        <input type="file"  @change="subFile($event)"  class="files"></div>
        <div class="imgs">
            <div>
             <span v-for="(val,ind) in imgs" :key="ind">
                <p @click="imgs.splice(ind,1)">X
                    </p> 
         <img :src="'http://localhost:3000'+val" alt="">        
            </span>    
            </div>
           
        </div>
</div>
<footer>
    <span @click="his">历史审核</span>
    <span>取消全部选择</span>
    <span @click="sure">确认</span>
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
            userType:-1,
            type:"",
            list:[],
            over:"",
            name:"",
            img:"",
            value1:'',
          start:"",
          end:"",
            a:"",
            textare:"",
            overtimeType:[{
                id:0,name:"双休日"
            },{
                id:1,name:"节假日"
            },{
                id:2,name:"工作日"
            }],
            vacationType:[{
                id:0,
                name:"年假"
            },{
                id:1,
                name:"调休"
            }],num:0,imgType:{
                type:["jpeg","jpg","gif","png"],
                size:3
            },imgs:[]
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
        },changeTime(){
           let a=new Date(this.start)*1;
           let b=new Date(this.end)*1;
           let cha=b-a;
           if(b-a<0){
               return this.$alert("选择错误");
           }else{
               this.num=b-a;
           }
        },subFile(e){
            let file=e.target.files[0];
            let {type,size}=file;
            let filesType=type.match(/\/(\w+)$/)[1];
            let error="";
if(!this.imgType.type.includes(filesType)){
    error=`请上传${this.imgType.type.join()}类型的文件`
}
if(this.imgType.size*1024*1024<size){
    error=`请上传小于${this.imgType.size}的文件`
};
if(error){
    this.$alert(error);
    return 
}
const fromdata=new FormData();
fromdata.append('file',file);
api.append(fromdata).then((res)=>{
    this.imgs.push(res.url);
})
        },sure(){
         let options={
             describe:this.textare,
             annex:this.imgs,
             endTime:this.end,
             startTime:this.start,
             type:this.userType
         }
         api["submit"+this.a](options).then((res)=>{
             if(res.msg==="提交成功"){
                this.$router.back();
             }else{
                 this.$alert(res.msg);
             }
         })
        },his(){
           api.history("3gvn7916rwg0").then((res)=>{
               console.log(res);
           })
        }
    },
    created(){
        let num=this.$route.params.id;
        let types=this.$route.params.type;
        this.a=this.$route.params.type;
         api.islogin().then((res)=>{
            this.list.push(res.data);
            this.name=res.data.nickname;
            this.img=res.data.avatar;
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
.files{
    opacity: 0;
    position:absolute;
    bottom:pxTorem(130px);
   left:pxTorem(70px);
}
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
    // height:auto;
    // height:pxTorem(500px);
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
        color:rgb(3, 94, 3);
    }
     span:nth-child(3){
        background:rgb(3, 94, 3);
        color:#fff;
    }
}
.imgs{
    width:100%;
   height:pxTorem(100px);
   overflow:hidden;
    >div{
        width:100%;
        height:100%;
        @include flex;
        span{
        width:pxTorem(70px);
        height:pxTorem(60px);
        display:inline-block;
            >img{
                width:100%;
                height:100%;
            }
    }
    }
}
</style>