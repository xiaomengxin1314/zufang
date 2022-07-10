import request from '@/utils/request'
export const cityAllList = () => {
  return request({
    url: '/area/city',
    params: {
      level:
        1

    }
  })
}
// 热门城市
export const reCityList = () => {
  return request({
    url: '/area/hot'
  })
}
