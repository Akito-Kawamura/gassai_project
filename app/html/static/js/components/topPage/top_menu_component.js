Vue.component('top-menu-component', {
  template: `
    <span>ここはトップページ</span>
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>
  `,
  data: function(){
    return{
      videoId: 'fHuO3Xaje98'
    }
  },
  mounted:{
    import VueYoutube from 'vue-youtube'
  },
  methods: {
    playVideo(): {
      this.player.playVideo()
    },
    playing(): {
      console.log('\o/ we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
})
