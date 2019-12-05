import request from '@/utils/request'

export function login(phone, password) {
  return request({
    url: 'user/login',
    method: 'post',
    data: {
      phone,
      password
    }
  })
}

export function getInfo () {
  return request({
    url: 'user/info',
    method: 'post'
  })
}
