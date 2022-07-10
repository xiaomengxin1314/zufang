<template>
  <div class="main">
    <van-search v-model="value" show-action placeholder="请输入搜索关键词">
      <template #label>
        <van-button hairline to="city"
          >{{ $store.state.city.label }}
          <template> <van-icon name="arrow-down" /></template>
        </van-button>
      </template>
      <template #action>
        <van-icon name="map-marked" @click="$router.push('map')" />
      </template>
    </van-search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in GetImg" :key="item.id"
        ><van-image :src="'http://liufusong.top:8080' + item.imgSrc"
      /></van-swipe-item>
    </van-swipe>

    <van-grid :border="false" text="14">
      <van-grid-item text="整租">
        <template #icon>
          <img src="@/assets/01.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="合租">
        <template #icon>
          <img src="@/assets/02.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="合租">
        <template #icon>
          <img src="@/assets/03.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="去出租" @click="$router.push('rental')">
        <template #icon>
          <img src="@/assets/04.png" alt="" />
        </template>
      </van-grid-item>
    </van-grid>
    <div class="box">
      <div class="zufang">
        <h4>租房小组</h4>
        <p>更多</p>
      </div>
      <div class="wenben">
        <van-grid
          direction="horizontal"
          :column-num="2"
          :border="false"
          icon-size="12"
        >
          <van-grid-item text="家住回龙观归属的感觉">
            <template #icon
              ><van-icon name="photo-o" /><span>图片</span></template
            >
          </van-grid-item>
          <van-grid-item text="家住回龙观归属的感觉">
            <template #icon
              ><van-icon name="photo-o" /><span>图片</span></template
            >
          </van-grid-item>
          <van-grid-item text="家住回龙观归属的感觉">
            <template #icon
              ><van-icon name="photo-o" /><span>图片</span></template
            >
          </van-grid-item>
          <van-grid-item text="家住回龙观归属的感觉">
            <template #icon
              ><van-icon name="photo-o" /><span>图片</span></template
            >
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { GetHome } from '@/api/users'
export default {
  created () {
    this.getHomeImg()
  },
  data () {
    return {
      GetImg: '',
      value: ''

    }
  },
  methods: {
    async getHomeImg () {
      const res = await GetHome()
      console.log(res)
      this.GetImg = res.data.body
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
}
/deep/.van-swipe__indicators {
  position: fixed;
  bottom: 90px;
}
.van-search {
  width: 375px;
  position: absolute;
  top: 8px;
  left: 0px;
  z-index: 1;
  background-color: transparent;
}
.van-icon-map-marked {
  margin-top: 2px;
  font-size: 25px;
}
.van-swipe-item {
  width: 375px;
  height: 200px;
}
/deep/.van-grid-item__content {
  width: 87px;
  height: 121px;
  // font-size: 60px;
}
img {
  width: 60px;
}
.zufang {
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 10px;
}
/deep/.van-grid-item__content--horizontal {
  width: 172px;
  height: 50px;
  margin-bottom: 10px;
}
/deep/.van-grid-item__text {
  padding: 10px 15px 0 10px;
}
/deep/.van-grid-item__icon-wrapper {
  width: 70px;
  height: 50px;
  span {
    font-size: 12px;
  }
}
.box {
  background-color: #f5f7f9;
}
</style>
