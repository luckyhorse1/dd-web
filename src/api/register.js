import request from '@/utils/request'

export function register (phone, password, phoneCode,name) {
  return request({
    url: 'user/register',
    method:'post',
    data: {
      phone,
      password,
      phoneCode,
      name
    }
  })
}
