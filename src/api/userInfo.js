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

export function updatePhone (newPhone) {
  return request({
    url: 'user/updatePhone?newPhone='+newPhone,
    method: 'get'
  })
}

export function updatePass (newPass) {
  return request({
    url: 'user/updatePass?newPass='+newPass,
    method: 'get'
  })
}
