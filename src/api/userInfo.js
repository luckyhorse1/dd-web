import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: 'user/info',
    method: 'post'
  })
}

export function updateUserInfo(name, sex, age, wx) {
  return request({
    url: 'user/updateInfo',
    method: 'post',
    data: {
      name,
      sex,
      age,
      wx
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
