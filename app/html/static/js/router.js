// ルートオプションを渡してルーターインスタンスを生成
var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<top-menu-component></top-menu-component>'
      }
    },
    {
      path: '/selected/:selectedTag',
      name: 'selected',
      component: {
        template: '<div>あなたが選択したのは {{ $route.params.selectedTag }}です。</div>'
      }
    }
  ]
})
//
// var app = new Vue({
//     router: router
// }).$mount('#router')
