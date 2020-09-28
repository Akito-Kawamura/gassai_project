var App = new Vue({
  el: '#header',
  template: `
  <div id="header-wrap">
			<div class="container">
				<table id="header">
					<tbody><tr>
						<td id="header-right">
							<table>
								<tbody><tr>
									<td class="phone-number"><span class="wsite-text wsite-phone">
	人の人による人のためのお祭り　九州のお祭りが大集合！
</span></td>
									<td class="social"></td>
									<td class="search"><span class="wsite-search">
	<form id="wsite-header-search-form" action="/apps/search" method="get">
		<input type="text" name="q" class="wsite-search-input" autocomplete="off" placeholder="検索"><span class="wsite-search-button"><span class="wsite-search-button-inner"></span></span>
	</form>
</span></td>
								</tr>
							</tbody></table>
							<div class="clear"></div>
						</td>
					</tr>
				</tbody></table>
			</div><!-- end container -->
		</div>

    <div id="nav-wrap">
			<div class="container">
				<table>
					<tbody><tr>
						<td id="logo"><span class="wsite-logo">

	<a href="/">
		<img src="./static/image/mainimage.jpeg">
	</a>

</span></td>
						<td id="nav"><div id="navigation"><ul class="wsite-menu-default">
		<li id="active" class="wsite-menu-item-wrap  wsite-nav-1" style="position: relative;">
			<a href="/" class="wsite-menu-item" style="position: relative;">
				Home
			</a>


		</li>
		<li id="pg549194168788394819" class="wsite-menu-item-wrap  wsite-nav-2" style="position: relative;">
			<a href="/38283206522701035201.html" class="wsite-menu-item" style="position: relative;">
				開催概要
			</a>


		</li>
		<li id="pg404790003502875599" class="wsite-menu-item-wrap  wsite-nav-3" style="position: relative;">
			<a href="/21442211522224320307.html" class="wsite-menu-item" style="position: relative;">
				参加団体
			</a>


		</li>
		<li id="pg202856312269664719" class="wsite-menu-item-wrap  wsite-nav-4" style="position: relative;">
			<a href="/schedule-place.html" class="wsite-menu-item" style="position: relative;">
				日程・会場
			</a>


		</li>
		<li id="pg864696945665477681" class="wsite-menu-item-wrap  wsite-nav-5" style="position: relative;">
			<a href="/21215385982701035201.html" class="wsite-menu-item" style="position: relative;">
				募集概要
			</a>


		</li>
		<li id="pg822759590265339938" class="wsite-menu-item-wrap  wsite-nav-6" style="position: relative;">
			<a href="/29305210292022530011.html" class="wsite-menu-item" style="position: relative;">
				特別企画
			</a>


		</li>
		<li id="pg162827707272391516" class="wsite-menu-item-wrap  wsite-nav-7" style="position: relative;">
			<a href="/32068323402701035201.html" class="wsite-menu-item" style="position: relative;">
				組織概要
			</a>


		</li>
</ul>
</div></td>
					</tr>
				</tbody></table>
			</div><!-- end container -->
		</div>
  `
})
