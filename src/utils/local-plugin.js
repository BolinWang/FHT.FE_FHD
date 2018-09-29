/*
 * @Author: FT.FE.Ghost
 * @Date: 2018-08-03 10:10:05
 * @Last Modified by: ghost
 * @Last Modified time: 2018-09-30 01:35:23
 */

const Storage = { }

Storage.get = function(keyname) {
  return JSON.parse(sessionStorage.getItem(keyname))
}

Storage.set = function(keyname, val) {
  sessionStorage.setItem(keyname, JSON.stringify(val))
}

Storage.add = function(keyname, addVal) {
  const oldVal = Storage.get(keyname)
  const newVal = oldVal.concat(addVal)
  Storage.set(keyname, newVal)
}

Storage.removeItem = function(keyname, i) {
  const val = Storage.get(keyname)
  val.splice(i, 1)
  Storage.set(keyname, val)
}

Storage.remove = function(keyname) {
  sessionStorage.removeItem(keyname)
}

export default Storage
