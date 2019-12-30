import request from '@/utils/request'

export function getPhoneCode (phone) {    //用于注册和修改手机号
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

export function getPhoneCodeBySelf () {    //仅用于验证(比如：修改密码)
  return request({
    url: 'user/getPhoneCode?phone=SELF',
    method: 'get'
  })
}

export function checkPhoneCodeBySelf (code) {
  return request({
    url: 'user/checkPhoneCode?phone=SELF&code='+code,
    method: 'get',
  })
}
