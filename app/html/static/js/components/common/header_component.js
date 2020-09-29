Vue.component('header-component', {
  template: `
  <div id="header-wrap">
			<div class="container">
				<table id="header">
					<tbody><tr>
						<td id="header-right">
							<table>
								<tbody><tr>
									<td class="phone-number"><span class="wsite-text wsite-phone">
                  	<a href="/">
                  		<img src="./static/image/mainimage.jpg">
                  	</a>
                  </span></td>
									<td class="social"></td>
									<td class="search" style="margin: 0 0 0 auto"><span class="wsite-search">
                  	<el-input placeholder="検索" v-model="input"></el-input>
                  </span></td>
								</tr>
							</tbody></table>
							<div class="clear"></div>
						</td>
					</tr>
				</tbody></table>
			</div><!-- end container -->
		</div>
  `,
  data:function(){
    return{
      input: ''
    }
  }
})
