import request from '@/utils/request'

export function checkForCreateComp () {
  return request({
    url: 'comp/checkForCreateComp',
    method: 'post'
  })
}
