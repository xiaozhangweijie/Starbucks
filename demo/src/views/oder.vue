<template>
    <div>
<div class="header">
    <span class="iconfont icon-arrow-left">
    </span>
    <b>筛选</b>
    <span></span>
</div>
<section>
    <div>
       <span>级别</span>
    <div>
       <p class="active">直接下属</p>
    <p>二级下属</p>   
    </div>  
    </div>
     <div>
       <span>假期类型</span>
    <div>
       <p class="active">全部</p>
    <p>年假</p>  
    <p>Carryover年假</p> 
    <p>病假</p>
    <p>调休假</p>
    <p>丧假</p>
    <p>陪产假</p>
    </div>  
    </div>
</section>
<footer>
    <span>取消全部选择</span>
    <span>确认</span>
</footer>
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
.header{
    width:100%;
    height:pxTorem(44px);
    line-height:pxTorem(44px);
    @include box_flex;
    @include justify(space-between);
    padding:0 pxTorem(5px);
    @include sizing;
    font-size:pxTorem(18px);
}
section{
    div{
        margin-top:pxTorem(20px);
        width:100%;
        padding:0 pxTorem(15px);
        @include sizing;
        span{
            margin-left:pxTorem(20px);
            font-size:pxTorem(16px);
        }
        >div{
            @include box_flex;
            //@include justify(space-around);
            flex-wrap: wrap;
            >p{
                width:30%;
                background:#eee;
                text-align:center;
                border-radius:pxTorem(4px);
                padding:pxTorem(10px) pxTorem(20px);
                margin-top:pxTorem(5px);
                margin-left:pxTorem(15px);
            }
        }
    }
    .active{
        background:rgb(3, 94, 3);
        color:#fff; 
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
</style>