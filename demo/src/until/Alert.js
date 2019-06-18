import elAlert from "../components/el-alert";
export default {
    install(Vue){
        const AlertZu=Vue.extend(elAlert);//组件类
        const AlertShi=new AlertZu({
            propsData:{
                txt:"mmm"
            }
        });//组件实例
        AlertShi.$mount();
        document.body.appendChild(AlertShi.$el);
        Vue.prototype.$alert=(text)=>{
            AlertShi.alertO(text)
        }
    }
}