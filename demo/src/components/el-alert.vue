<template>
    <div class="alert" v-show="open">
        {{text}}
    </div>
</template>
<script>
export default {
    props:["text"],
    components:{

    },
    data(){
        return {
  open:true,
  timer:null
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){
this.timer=setInterval(()=>{
    this.open=false;
},2000)
    },destroyed(){
        clearInterval(this.timer);
    }
}
</script>
<style scoped lang="scss">
@import "../../static/_minix.scss";
@import "../../static/common.scss";
.alert{
width:50%;
height:pxTorem(100px);
position:absolute;
top:50%;
left:20%;
background:#000;
opacity: .5;
z-index:99999;
color:#fff;
line-height:pxTorem(100px);
text-align: center;
}
</style>