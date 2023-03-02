import request from '@/utils/request'

// 查询定时任务调度列表
export function get(query) {
  return request({
    url: '/schedule/job/list',
    method: 'get',
    params: query
  })
}
