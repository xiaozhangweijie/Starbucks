import request from "../request.js";
const api={
    //登录home页面  检测是否登录
    islogin:()=>request.get("/api/user/info"),
    //login 检验密码
    userhome:(data)=>request.post("/api/login",data),
    //获取列表
    getlist:(data)=>request.get("/api/task/list",data),
    overtimeDetail:(data)=>request.get("/api/apply/overtime",data),
    vacationDetail:(data)=>request.get("/api/apply/vacation",data),
    append:(data)=>request.post("/api/upload",data),
    submitovertime:(data)=>request.post("/api/apply/overtime",data),
    submitvacation:(data)=>request.post("/api/apply/vacation",data)
    }
export default api;