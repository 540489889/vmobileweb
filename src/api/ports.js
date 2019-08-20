/*
 * 后台接口
 */
export default {
  //
  home: {
    index: '/api/v1/index',//首页
  },
  goods: {
    index: '/api/v1/goods',//商品详情
    collection: '/api/v1/collection', //商品收藏

  },
  sort: {
    index: '/api/v1/nav',//首页
    list: '/api/v1/goods',//分类列表页
  },
  cart: {
    index: '/api/v1/cart',//购物车列表
  },
  order: {
    index: '/api/v1/order',//获取订单列表
    create: '/api/v1/order/create',//提交订单
    pay: '/api/v1/order/pay',//支付
    orderstatus: '/api/v1/order/orderstatus',//订单状态
    confirm_order: '/api/v1/order/confirm'//确认收货
  },
  refund: {
    aftersave:'/api/v1/order/aftersave',//申请退货
    afterindex:'/api/v1/order/afterindex',//售后申请页
    afterlog: '/api/v1/order/afterlog',//申请记录
  },
  me: {
    index: '/api/v1/member',//个人中心首页
    address: '/api/v1/address',//我的地址
    team: '/api/v1/distribution/team',//我的团队
    distribution:'/api/v1/distribution',//成为分销商
    code:'/api/v1/qrcode/index',//我的推广码
    dxCode: '/api/v1/member/code', //获取验证码 参数 ?phone=
    bindTell: '/api/v1/member/bind',//绑定手机
  },
  integral: {
    index: '/api/v1/points',//积分首页
    loglist: '/api/v1/points/loglist',//积分明细
    sign: '/api/v1/points/sign',//签到
    goodsIndex: '/api/v1/points/goodsindex',//积分商城首页
    points: '/api/v1/points',//详情页
    create: '/api/v1/points/create',//兑换
    orderlist: '/api/v1/points/orderlist',//积分商城我的订单
  },
  search: {
    index: '/api/v1/search'
  },
}
