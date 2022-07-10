<template>
  <div>
    <van-nav-bar
      @click-left="$router.go(-1)"
      fixed
      title="城市列表"
      left-arrow
    />
    <div class="city">
      <van-index-bar :index-list="comCity">
        <van-index-anchor index="#">
          <p>当前城市</p>
          <van-cell :title="$store.state.city.label"> </van-cell>
        </van-index-anchor>
        <van-index-anchor index="热"
          ><p>热门城市</p>
          <van-cell
            @click="toggle(item)"
            v-for="(item, index) in reList"
            :key="index"
            :title="item.label"
          >
          </van-cell>
        </van-index-anchor>

        <van-index-anchor
          :index="item.ind"
          v-for="(item, index) in compLet"
          :key="index"
        >
          <p>{{ item.ind }}</p>
          <van-cell
            v-for="(obj, index) in item"
            :key="index"
            @click="toggle(obj)"
          >
            {{ obj.label }}
          </van-cell>
        </van-index-anchor>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { cityAllList, reCityList } from '@/api/city'

export default {
  created () {
    this.cityAllList()
    this.reCityList()
    console.log(this.compLet)
  },
  data () {
    return {
      // indexList: [],
      cityList: [],
      reList: []
      // NewLetterList: []
    }
  },
  methods: {
    // 城市列表
    async cityAllList () {
      try {
        const res = await cityAllList()
        this.cityList = res.data.body
        // this.indexList = res.data.body.short

        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    // 热门城市
    async reCityList () {
      try {
        const res = await reCityList()
        // console.log(res)
        this.reList = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    toggle (obj) {
      this.$store.commit('setCity', obj)
      this.$router.go(-1)
    }

  },

  computed: {
    comCity () {
      const letter = this.cityList.map((value) => {
        return value.short.slice(0, 1).toUpperCase()
      })
      console.log(letter)

      const letterList = new Set(letter)
      // console.log(letterList)
      const NewLetterList = Array.from(letterList).sort()
      // console.log(NewLetterList)
      NewLetterList.unshift('#', '热')
      // this.NewLetterList = NewLetterList
      return NewLetterList
    },
    compLet () {
      const letAll = []
      const letter = this.cityList.map((value) => {
        return value.short.slice(0, 1)
      })
      const letters = new Set(letter)
      // console.log(letters)
      const letterse = Array.from(letters).sort()
      // console.log(letterse)
      letterse.forEach((val, index) => {
        letAll.push(this.cityList.filter(value => {
          const a = value.short.slice(0, 1)
          return a === val
        }))
        letAll[index].ind = val.toUpperCase()
      })
      // console.log(letAll)
      return letAll
    }

  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  z-index: 9999;
}
.city {
  margin-top: 46px;
}
/deep/.van-index-bar__index {
  margin-top: 10px;
}
</style>
