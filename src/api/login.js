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
