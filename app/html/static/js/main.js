var App = new Vue({
  router: router,
  el: '#app',
  template: `
  <div>
  <el-container>
  <el-header><header-component></header-component></el-header>
  <el-main>

    <el-container>
      <el-header><main-menu-component></main-menu-component></el-header>
      <el-main>Mainコンテナ</el-main>
      <router-view></router-view>
    </el-container>

  </el-main>
  <el-footer>
    <footer-buttons></footer-buttons>
    <footer-component></footer-component>
  </el-footer>
  </el-container>
  `,
})
