import request from '@/utils/request'
export const GetMima = (data) => {
  return request({
    method: 'POST',
    url: 'user/login',
    data

  })
}

export const GetHome = () => {
  return request({
    url: 'home/swiper'
  })
}

export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}
