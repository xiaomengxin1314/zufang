import request from '@/utils/request'
export const getMap = (id) => {
  return request({
    url: 'area/map',
    params: {

      id
    }
  })
}
