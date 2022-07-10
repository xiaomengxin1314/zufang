import request from '@/utils/request'
import store from '@/store/index'
// 获取房屋查询条件
export const doorModel = () => {
  return request({
    url: 'houses/condition',
    params: {
      id: store.state.city.value
    }
  })
}

export const getHouseMode = (params) => {
  return request({
    url: 'houses',
    params
  })
}
// 查询房屋具体信息
export const getMapS = (id) => {
  return request({
    url: `houses/${id}`
  })
}
