Vue.component('main-menu-component', {
  template: `
  <el-menu mode="horizontal" >
  <el-menu-item index="1">Home</el-menu-item>
  <el-submenu index="2">
    <template slot="title">参加団体</template>
    <el-menu-item index="2-1">熊本</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">開催概要</template>
    <el-menu-item index="2-1">ああ</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">日程・会場</template>
    <el-menu-item index="2-1">ああ</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">募集概要</template>
    <el-menu-item index="2-1">ああ</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">特別企画</template>
    <el-menu-item index="2-1">ああ</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">組織概要</template>
    <el-menu-item index="2-1">ああ</el-menu-item>
  </el-submenu>
</el-menu>
  `
})
