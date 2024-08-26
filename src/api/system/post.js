import request from '@/utils/request'

// 查詢崗位列表
export function listPost(query) {
  return request({
    url: 'sys_post/get_post_list',
    method: 'get',
    params: query
  })
}

// 查詢崗位詳細
export function getPost(postId) {
  return request({
    url: 'sys_post/get_post/' + postId,
    method: 'get'
  })
}

// 新增崗位
export function addPost(data) {
  return request({
    url: 'sys_post/update_post',
    method: 'post',
    data: data
  })
}

// 修改崗位
export function updatePost(data) {
  return request({
    url: 'sys_post/update_post',
    method: 'put',
    data: data
  })
}

// 刪除崗位
export function delPost(postId) {
  return request({
    url: 'sys_post/delete_post/' + postId,
    method: 'delete'
  })
}
