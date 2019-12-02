export function isvalidUsername(str) {
  const valid_map = ['admin', 'test', '17633907915']
  return valid_map.indexOf(str.trim()) >= 0
}