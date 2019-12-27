import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: 'user/info',
    method: 'post'
  })
}

export function updateUserInfo(name) {
  return request({
    url: 'user/updateInfo',
    method: 'post',
    data: {
      name
    }
  })
}
