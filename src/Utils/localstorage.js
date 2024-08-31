export const saveAccessToken = (token) => {
    localStorage.setItem('accesstoken' , token)
}

export const getAccessToken = () => {
    localStorage.getItem('accesstoken')
}

export const saveRefreshToken = (token) => {
    localStorage.setItem('refreshtoken' , token)
}

export const getRefreshToken = () => {
    localStorage.getItem('refreshtoken')
}