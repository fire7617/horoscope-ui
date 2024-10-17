import request from '@/utils/request'

//取得星座列表
export function listPlanet(query) {
  return request({
    url: '/api/sys_config/get_config',
    method: 'get',
    params: query
  })
}
