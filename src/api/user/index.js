import request from '@/utils/request'

// 查询定时任务调度列表
export function getAccessToken(params) {
  return request({
    url: '/cgi-bin/gettoken',
    method: 'get',
    params
  })
}
