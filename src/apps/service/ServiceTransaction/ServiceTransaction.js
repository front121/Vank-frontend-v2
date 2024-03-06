import {userApi} from "../api/userApi"

export const getUserField = async (field,email) => {
  try{
    const response = await userApi.get(`/${field}/${email}`)
    return response.data;
  }catch(error){
    throw error;
  }
    
  }

  

  export const findById = async (id) => {
    try{
      const response = await userApi.get(`/user/${id}`)
      return response.data;
    }catch(error){
      throw error;
    }
      
  }

  export const convertir = async (type,amount) => {
    try{
      const response = await userApi.get(`/type/${type}/${amount}`)
      return response.data;
    }catch(error){
      throw error;
    }
      
  }

  