import Vue from "vue";
import VueRouter from "vue-router";
const Home=()=>import("../views/home.vue");
const Login=()=>import("../views/login.vue");
const Oder=()=>import("../views/oder.vue");
const Work=()=>import("../views/work.vue");
const Overtime=()=>import("../views/overtime.vue");
const Vacation=()=>import("../views/vacation.vue");
const Commit=()=>import("../views/commit.vue");
Vue.use(VueRouter);
const router=new VueRouter({
    routes:[{
        path:"/",
       redirect:"/home"
    },{
        path:"/home",
        meta:{
            title:"首页"
        },
        component:Home
    },{
        path:"/login",
        meta:{
            title:"登录"
        },
        component:Login
    },{
        path:"/oder",
        meta:{
            title:"筛选"
        },
        component:Oder
    },{
        path:"/work/:type/:id",
        name:"work",
        meta:{
            title:"加班/休假申请"
        },
        component:Work
    },{
        path:"/commit/:type",
        name:"commit",
        meta:{
            title:"提交申请表"
        },
        props:true,
        component:Commit
    }
]
})
router.beforeEach((to,from,next)=>{
   document.title=to.meta.title;
   next();
})
export default router;