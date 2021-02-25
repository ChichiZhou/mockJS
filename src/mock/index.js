// github 上搜索 mock.js
import Mock, { Random } from 'mockjs'
// 使用随机生成
const itemList = {
  'items|5': [
    {
      id: '@increment(1)',
      name: '@name',
      text: '@sentence',
      price: '@natural(100, 999)',
      date: '@datetime'
    }
  ]
}

// 自定义随机函数
// 可使用 @fruit 调用这个随机函数
Random.extend({
  fruit: function () {
    const arr = ['apple', 'banana', 'pinapple', 'cherry']
    return this.pick(arr)
  }
})
// 模拟 API 接口
// Mock.mock() 需要传的参数：
// url: 地址
// method： 采用的方法，post，put，get
// function(): 返回方法，这个方法一定要有 return，而且return应该是如下形式：
// {
//     status: ,
//     message: ,
//     data:
// }
// 或者直接是如上形式的一个 json

// 如何表示数组中的一个元素
Mock.mock('/api/goodslist', 'get', {
  status: 200,
  message: 'success',
  data: itemList['items|5']
})

Mock.mock('/api/addonegood', 'post',
  // 请求相关的信息会放在 inputInfo 中
  // 为了能够保证post的信息能够传递到后端，一般这里都要先 console.log 一下用来检验
  function (inputInfo) {
    console.log(inputInfo)
    return Mock.mock({
      status: 200,
      message: 'success'
    })
  })

// 使用正则来匹配带参数的URL
Mock.mock(/\/api\/getOneGood/, 'get', function (option) {
  console.log(option)
  // 把URL中的参数搞出来
  const res = /\/api\/getOneGood\/(\d+)/.exec(option.url)
  // console.log(res)
  var inputID = res[1]
  return Mock.mock({
    status: 200,
    message: 'success',
    data: {
      id: inputID,
      name: '@fruit()'
    }
  })
})
