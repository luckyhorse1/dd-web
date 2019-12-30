import request from '@/utils/request'

export function getPhoneCode (phone) {
  return request({
    url: 'user/getPhoneCode?phone='+phone,
    method: 'get'
  })
}

export function checkPhoneCode (phone, code) {
  return request({
    url: 'user/checkPhoneCode?phone='+phone+'&code='+code,
    method: 'get',
  })
}