// pages/cart/cartList/cartList.js
Page({
  data: {
    goods: [
      {
        "title": "效果图",
        "total": 7,
        "items": [
          {
            "id": 1,
            "title": "西兰花鸡翅饭",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 12,
            "msale": 105,
            "tags": [
              1,
              2,
              3
            ]
          },
          {
            "id": 2,
            "title": "日式炸虾便当",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 16,
            "msale": 321,
            "tags": [
              1
            ]
          },
          {
            "id": 3,
            "title": "香酥鸡排饭",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 16,
            "msale": 240,
            "tags": [
              2,
              3
            ]
          },
          {
            "id": 4,
            "title": "招牌卤肉套餐",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 18,
            "msale": 105,
            "tags": [
              3
            ]
          },
          {
            "id": 5,
            "title": "糖醋荔枝肉饭",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 18,
            "msale": 98,
            "tags": []
          },
          {
            "id": 6,
            "title": "蜜汁鸡腿便当",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 20,
            "msale": 50,
            "tags": []
          },
          {
            "id": 7,
            "title": "骨汤猪排套餐",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 25,
            "msale": 60,
            "tags": []
          }
        ]
      },
      {
        "title": "沙盘",
        "total": 4,
        "items": [
          {
            "id": 8,
            "title": "雪碧335ml",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 3,
            "msale": 12,
            "tags": []
          },
          {
            "id": 9,
            "title": "百事可乐355ml",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 3,
            "msale": 33,
            "tags": []
          },
          {
            "id": 10,
            "title": "雀巢咖啡500ml",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 5,
            "msale": 10,
            "tags": []
          },
          {
            "id": 11,
            "title": "营养快线500ml",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 5,
            "msale": 8,
            "tags": []
          }
        ]
      },
      {
        "title": "户型",
        "total": 5,
        "items": [
          {
            "id": 12,
            "title": "单点-猪扒",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 33,
            "tags": []
          },
          {
            "id": 13,
            "title": "单点-猪颈肉",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 120,
            "tags": []
          },
          {
            "id": 14,
            "title": "单点-豆腐",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 11,
            "tags": []
          },
          {
            "id": 15,
            "title": "单点-鸡排",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 8,
            "msale": 9,
            "tags": []
          },
          {
            "id": 16,
            "title": "单点-鸡腿",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 9,
            "msale": 5,
            "tags": []
          }
        ]
      },
      {
        "title": "周边",
        "total": 5,
        "items": [
          {
            "id": 12,
            "title": "单点-猪扒",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 33,
            "tags": []
          },
          {
            "id": 13,
            "title": "单点-猪颈肉",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 120,
            "tags": []
          },
          {
            "id": 14,
            "title": "单点-豆腐",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 11,
            "tags": []
          },
          {
            "id": 15,
            "title": "单点-鸡排",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 8,
            "msale": 9,
            "tags": []
          },
          {
            "id": 16,
            "title": "单点-鸡腿",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 9,
            "msale": 5,
            "tags": []
          }
        ]
      },
      {
        "title": "周边",
        "total": 5,
        "items": [
          {
            "id": 12,
            "title": "单点-猪扒",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 33,
            "tags": []
          },
          {
            "id": 13,
            "title": "单点-猪颈肉",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 120,
            "tags": []
          },
          {
            "id": 14,
            "title": "单点-豆腐",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 7,
            "msale": 11,
            "tags": []
          },
          {
            "id": 15,
            "title": "单点-鸡排",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 8,
            "msale": 9,
            "tags": []
          },
          {
            "id": 16,
            "title": "单点-鸡腿",
            "image": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=46a89346c9fdfc03f175ebeab556ecf1/9f510fb30f2442a75767981ddb43ad4bd1130218.jpg",
            "price": 9,
            "msale": 5,
            "tags": []
          }
        ]
      },
      
      
    ],
    preImageUrl: '',
    hidePreview: true,
    hideCartList: true,
    colorReduce: '#80848f',
    colorAdd: '#293',
    controlSize: 32,
    listViewScrollTop: 0,
    foodAreaHeight: [0],
    cateListActiveIndex: 0
  },
  onLoad: function(options) {
    // 一定要设置它的高度
    this.setFoodListAreaHeight()

  },

  /////////////////////////////////////////// * 下面是自定义事件 *///////////////////////////////////////////
  /////////////////////////////////////////// * 下面是自定义事件 *///////////////////////////////////////////
  /////////////////////////////////////////// * 下面是自定义事件 *///////////////////////////////////////////

  setFoodListAreaHeight() {
    let query = wx.createSelectorQuery();
    let that = this;
    //分类栏的高度
    query.select('.category_title').boundingClientRect(function(rect) {
      that.setData({
        eleCateTitleHeight: rect.height
      })
    }).exec();
    //商品item的高度
    query.select('.food').boundingClientRect(function(rect) {
      that.setData({
        eleFoodHeight: rect.height
      })
    }).exec();

    //把商品列表每个分类的区间高度计算，并放进数组
    //上面获取元素的高度可能不是同步的，所以把下面的放在setTimeout里面
    let foodAreaHeight = [0]
    let heightCount = 0
    setTimeout(() => {
      this.data.goods.forEach((item, index) => {
        //console.log(item.items.length * this.data.eleFoodHeight);
        heightCount += item.items.length * this.data.eleFoodHeight + this.data.eleCateTitleHeight
        foodAreaHeight.push(heightCount)
      })
      this.setData({
        foodAreaHeight
      })
    }, 100)

  },

  /**
   * 滚动到右边的高度
   * @param {*} e 
   */
  scrollToCategory(e) {
    // console.log(e.currentTarget.dataset);
    let idx = e.currentTarget.dataset.index
    let foodcount = e.currentTarget.dataset.foodcount
    this.setData({
      listViewScrollTop: this.data.foodAreaHeight[idx]
    })
  },
  /**
   * 滚动商品的时候
   * @param {*} event 
   */
  foodListScrolling(event) {
    let scrollTop = event.detail.scrollTop
    let foodAreaHeight = this.data.foodAreaHeight
    // console.log(scrollTop);
    foodAreaHeight.forEach((item, index) => {
      if (scrollTop >= foodAreaHeight[index] && scrollTop < foodAreaHeight[index + 1]) {
        this.setData({
          cateListActiveIndex: index
        })
      }
    })
  },

  /**
   * 点击图片，显示预览图
   * @param {} e 
   */
  bindImgPreView(e) {
    
    let preImageUrl = e.target.dataset.url

    console.log(preImageUrl)
    this.setData({
      preImageUrl: preImageUrl,
      hidePreview: false
    })
  },
  hideIMgpreview() {
    this.setData({
      preImageUrl: '',
      hidePreview: true
    })
  },

  /**
   * 改变商品的数量 
   */

  
  
})