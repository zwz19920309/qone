const DBHelper = require('../../common/db/db-helper')
/**
  * 获取平台列表
  * @method getPlatFormList
  * @param  {object} params - 参数
  * @return {object}
 */
const getPlatFormList = async (params) => {
  let platFormList = await DBHelper.getPlatFormList()
  return platFormList
}
/**
  * 增加平台
  * @method addPrize
  * @param  {object} params 参数
  * @return {object} 增加结果
 */
const addPlatForm = async (params) => {
  let result = await DBHelper.addPlatForm(params)
  return result
}
/**
  * 修改平台
  * @method addPrize
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const updatePlatForm = async (params) => {
  let result = await DBHelper.updatePlatForm(params)
  return result
}
/**
  * 查询唯一平台
  * @method addPrize
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const findOnePlatForm = async (params) => {
  let result = await DBHelper.findOnePlatForm(params)
  return result
}
/**
  * 删除平台
  * @method addScene
  * @param  {object} params -平台参数
  * @return {object} 删除结果
 */
const bulkDeletePlatForm = async (params) => {
  let result = await DBHelper.bulkDetelePlatForm(params)
  return result
}

module.exports = {
  getPlatFormList,
  addPlatForm,
  updatePlatForm,
  findOnePlatForm,
  bulkDeletePlatForm
}
