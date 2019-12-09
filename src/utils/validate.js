export function isvalidPhone(str) {
  //const valid_map = ['admin', 'test', '17633907915']
  return /^1[34578]\d{9}$/.test(str)
}

export function isvalidPassword(str) {
  return /^[0-9a-zA-Z]{6,16}$/.test(str)
}

export function isvalidPhonecode(str) {
  return /^[0-9]{4}$/.test(str)
}


