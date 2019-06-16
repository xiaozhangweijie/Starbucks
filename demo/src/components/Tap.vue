<template>
    <div>
 <dl v-for="(item,index) in list" :key="index" @click="change(index)" :class="{active:ind==index}">
     <dt>
         <span :class="'iconfont'+  item.icon"></span>
     </dt>
     <dd>{{item.name}}</dd>
 </dl>
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
list:[
    {"name":"待处理",
    "index":0,
    "icon":"  icon-05"
    }, {"name":"已发起",
    "index":1,
    "icon":"  icon-07"
    }, {"name":"已处理",
    "index":2,
    "icon":"  icon-dui"
    }
]
        }
    },
    computed:{

    },
    methods:{
change(ind){
    this.ind=ind;
  this.$emit('change',ind);
}
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.active{
    color:green;
}
</style>