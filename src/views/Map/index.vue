<template>
  <div>
    <van-nav-bar title="地图找房" left-arrow @click-left="$router.back()" />
    <div id="container"></div>
  </div>
</template>

<script>
import { getMap } from '@/api/map'
export default {
  created () {
    this.getMap()
  },
  mounted () {
    const { BMapGL } = window
    const map = new BMapGL.Map('container')
    map.centerAndZoom(new BMapGL.Point(116.280, 40.049), 18)
    map.enableScrollWheelZoom(true)
    const opts = {
      position: new BMapGL.Point(116.2787, 40.0492), // 指定文本标注所在的地理位置
      offset: new BMapGL.Size(30, -30) // 设置文本偏移量
    }

    // 创建文本标注对象
    const label = new BMapGL.Label('朝阳', opts)
    // 自定义文本标注样式
    label.setStyle({
      // color: 'green',
      color: '#fff',
      fontSize: '14px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'green',
      textAlign: 'center',
      lineHeight: '40px'
    })
    map.addOverlay(label)
    label.addEventListener('click', function () {
      alert('您点击了标注')
    })
  },
  data () {
    return {
      mapAll: {}
    }
  },
  methods: {
    async getMap () {
      try {
        //  name: this.$store.state.city.label, id: this.$store.state.city.value
        const res = await getMap(this.$store.state.city.value)
        this.mapAll = res.data.body
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#container {
  height: 750px;
  height: 750px;
}
</style>
