var App = new Vue({
  el: '#app',
  template: `
  <div>
  <el-container>
  <el-header><header-component></header-component></el-header>
  <el-main>

    <el-container>
      <el-header><main-menu-component></main-menu-component></el-header>
      <el-main>Main</el-main>
    </el-container>

  </el-main>
  <el-footer><footer-component></footer-component></el-footer>
  </el-container>
  </div>
  `,

  data: function(){
    const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item),
        activeName: 'first'
      }
  },

  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
})
