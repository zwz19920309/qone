const apiRouter = require('koa-router')()
const platformCtrl = require('../../controllers/admin/platform-ctrl')
const authUtil = require('../../common/utils/auth-util')
// 获取平台列表
apiRouter.post('/getPlatFormList', platformCtrl.getPlatFormList)
// 添加平台类型
apiRouter.post('/addPlatForm', platformCtrl.addPlatForm)

module.exports = router => {
  router.use('/admin/platform', authUtil.checkAuth, apiRouter.routes(), apiRouter.allowedMethods())
}
