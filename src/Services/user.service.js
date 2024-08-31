import { axiosInstance } from "."

export const loginUser = ({email , password}) => {
   return axiosInstance.post('api/user/login' , { email, password })
}