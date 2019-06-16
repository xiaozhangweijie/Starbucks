import elAlert from "../components/el-alert.vue";
export default{
    install(Vue){
        const alertClass=Vue.extend(elAlert);
        console.log(alertClass);
        Vue.prototype.$alert=(text)=>{
            console.log(text);
        }
    }
}