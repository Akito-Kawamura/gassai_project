Vue.component('main-menu-component', {
  template: `
  <el-menu mode="horizontal" router>
      <el-menu-item  v-for="menuItem in menuItems" :index="menuItem.index">
        <router-link :to="{ name: 'selected', params: { selectedTag: menuItem.tag }}"><span>{{menuItem.tag}}</span></router-link>
      </el-menu-item>
  </el-menu>
  `,
  data: function(){
    return{
      menuItems:[
        {"tag":"Home", "index": "/top", "route": "/top",
          "subItems":[
            {"tag":"新着情報", "index": "1-1", "route": "/top"},
            {"tag":"新着情報一覧", "index": "1-2", "route": "/top"},
          ]},
        {"tag":"参加団体", "index": "/selected/123", "route": "/top"},
        {"tag":"開催概要", "index": "/selected/6", "route": "/top"},
        {"tag":"日程・会場", "index": "/selected/selected", "route": "/top"},
        {"tag":"募集概要", "index": "/selected/3", "route": "/top"},
        {"tag":"特別企画", "index": "/selected/4", "route": "/top"},
        {"tag":"組織概要", "index": "/selected/5", "route": "/top"},
      ]
    }
  },
  mounted: function(){
    this.activeIndex = this.$route.name;
  }

})
