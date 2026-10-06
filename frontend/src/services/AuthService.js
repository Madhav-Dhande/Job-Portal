import api from "./api";

export const login =(data)=>{
    return api.post("/auth/login",data);
}

export const register =(data)=>{
    return api.post("/auth/register",data);
}

export const getRoles = (data) => {
    return api.get("/common/getRoles",data)
}