<template>
    <div class="box" v-show="open">{{txt}}</div>
</template>

<script>
export default {
    data() {
        return {
            txt:"",
            open:false,
            timer:null
        }
    },
    methods: {
        alertO(txt){
            this.txt=txt;
            this.open=true;
            this.timer=setTimeout(()=>{
                this.open=false
            },2000)
        }
    },
    destroyed() {
        clearTimeout(this.timer)
    },
}
</script>

<style lang="scss" scoped>
@import "../../static/_minix.scss";
@import "../../static/common.scss";
// @import "../static/scss/common";
.box{
    padding: pxTorem(20px);
    font-size: pxTorem(14px);
    color: #eee;
    background: rgba(0,0,0,.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
}
</style>
