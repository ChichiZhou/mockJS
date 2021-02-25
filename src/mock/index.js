// github 上搜索 mock.js
import Mock from 'mockjs'

// 模拟 API 接口
Mock.mock('/api/goodslist', 'get', {
  status: 200,
  message: 'success',
  data: [1, 2, 3]
})
