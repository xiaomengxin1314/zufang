<template>
  <div>
    <van-nav-bar left-arrow slot="right" @click-left="$router.push('/home')">
      <template #right><van-icon name="map-marked" /></template>
      <template #title>
        <van-search
          class="search"
          @click="$router.push('/city')"
          v-model="value"
          show-action
          :label="$store.state.city.label"
          placeholder="请输入搜索小区地址"
        >
          <template #action>
            <div>搜索</div>
          </template>
        </van-search>
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" title="区域">
        <van-picker
          ref="vall"
           show-toolbar
          :columns="areaList"
          toolbar-position="bottom"
          @change="onArea"
        />
        <!-- <QuYue></QuYue> -->
      </van-dropdown-item>
      <van-dropdown-item v-model="value1" title="方式">
        <van-picker
          ref="va12"
          show-toolbar
          :columns="doorList.rentType"
          :default-index="2"
          @change="onMode"
          toolbar-position="bottom"
        />
      </van-dropdown-item>
      <van-dropdown-item v-model="value1" title="租金">
        <van-picker
          show-toolbar
          :columns="doorList.price"
          :default-index="2"
          toolbar-position="bottom"
          ref="va13"
          @change="onRent"
        />
      </van-dropdown-item>

      <van-dropdown-item v-model="value1" title="筛选" @open="show = true">
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-popup v-model="show" position="right" :style="{ width: '80%' }">
      <div class="shaixuan">
        <van-checkbox-group v-model="result">
          <van-cell>
            <span class="huxing">户型</span>
            <div class="hx">
              <van-checkbox
                v-model="checked"
                v-for="(item, index) in doorList.roomType"
                :key="index"
              >
                <template #icon="props">
                  <span
                    class="btn img-icon"
                    :class="{ proe: props.checked ? 'green' : '' }"
                    >{{ item.text }}</span
                  >
                </template>
              </van-checkbox>
            </div>
          </van-cell>
          <van-cell
            ><div class="zhong">
              <span class="huxing">朝阳</span>
              <div class="hx chaoxiang">
                <van-checkbox
                  v-model="checked"
                  v-for="(item, index) in doorList.oriented"
                  :key="index"
                >
                  <template #icon="props">
                    <span
                      class="btn img-icon"
                      :class="{ isactive: props.checked }"
                      >{{ item.text }}</span
                    >
                  </template>
                </van-checkbox>
              </div>
            </div></van-cell
          >
          <van-cell>
            <div class="xia zhong">
              <span class="huxing">楼层</span>
              <div class="hx louceng">
                <van-checkbox
                  v-model="checked"
                  v-for="(item, index) in doorList.floor"
                  :key="index"
                  ref="checkbox1"
                >
                  <template #icon="props">
                    <span
                      class="btn img-icon"
                      :class="{ isactive: props.checked }"
                      >{{ item.text }}</span
                    >
                  </template>
                </van-checkbox>
              </div>
            </div></van-cell
          >
          <van-cell>
            <div class="fangwu">
              <span class="huxing">房屋亮点</span>
              <div class="hx louceng">
                <van-checkbox
                  v-model="checked"
                  v-for="(item, index) in doorList.characteristic"
                  :key="index"
                >
                  <template #icon="props">
                    <span
                      class="btn img-icon"
                      :class="{ isactive: props.checked }"
                      >{{ item.text }}</span
                    >
                  </template>
                </van-checkbox>
              </div>
            </div></van-cell
          >
        </van-checkbox-group>
      </div>
      <div class="btns">
        <van-button class="cancel1">清除</van-button>
        <van-button class="sure1">确定</van-button>
      </div>
    </van-popup>
    <div>
      <div class="nav" v-for="(item, index) in getCityList" :key="index">
        <div class="left">
          <img :src="'http://liufusong.top:8080' + item.houseImg" />
        </div>
        <div class="right">
          <h4 class="title">{{ item.title }}</h4>
          <p class="desc">{{ item.desc }}</p>
          <p class="tags">{{ item.tags[0] }}</p>
          <h4 class="price">{{ item.price }}元/月</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doorModel, getHouseMode } from '@/api/housing'
// import QuYue from './commponents/QuYue.vue'
export default {
  created () {
    this.doorModel()
    this.getHouseMode()
    // this.getMapS()
  },
  data () {
    return {
      // loadings: false,
      value: '',
      value1: 0,
      more: [],
      show: false,
      isShown: false,
      // checked: true,
      columns: [],
      columns2: {
        value: [],
        defaultIndex: 0
      },
      columns3: {
        value: [],
        defaultIndex: 0
      },
      result: [],
      paramsObj: {
        cityId: this.$store.state.city.value,
        start: 1,
        end: 20

      },
      doorList: {},
      checked: true,
      getCityList: []

      // cityAll: []

    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    onArea () {
      const value = this.$refs.vall.getValues()
      console.log(value)
      let area = null
      if (value[0].value !== 'area') {
        delete this.paramsObj.area
        area = 'subway'
      } else {
        delete this.paramsObj.subway
        area = 'area'
      } if (value[1].value !== 'null') {
        if (value[2].value === 'null') {
          // console.log(value[1].text)
          this.paramsObj[area] = value[1].value
        } else {
          console.log(value[2].text)
          this.paramsObj[area] = value[2].value
          // this.loading = false
        }
      }
    },
    onMode () {
      const value = this.$refs.val2.getValues()
      delete this.paramsObj.rentType
      if (value[0].value !== 'null') {
        console.log(value[0].value)
        this.paramsObj.rentType = value[0].value
      }
    },
    onRent () {
      const value = this.$refs.val3.getValues()
      delete this.paramsObj.price
      if (value[0].vale !== 'null') {
        console.log(value[0].value)
        this.paramsObj.price = value[0].value
      }
    },
    async doorModel () {
      // this.cityAll = []
      try {
        //
        // this.isShown = true
        const res = await doorModel(this.$store.state.city)
        console.log(res)
        // this.doorList = res.data.body
        const josn = JSON.stringify(res.data.body).replace(/label/g, 'text').replace(/"null"/g, '"null","children":[""]')
        this.doorList = JSON.parse(josn)
        console.log(this.doorList)
      } catch (err) {
        console.log(err)
      }
    },

    // toggle1(index) {
    //   this.$refs.checkbox[index] = !this.$refs.checkbox[index]
    // }
    async getHouseMode () {
      try {
        const res = await getHouseMode(this.paramsObj)
        console.log(res)
        this.getCityList = res.data.body.list
        console.log(this.getCityList)
      } catch (err) {
        console.log(err)
      }
    }

  },
  computed: {
    areaList () { // 区域下拉菜单数据
      // const doorList = this.$store.state.allDatas
      // 拼接区域和地铁的数据、第一个下拉菜单有两组数据、故需要拼接
      const data = [this.doorList.area, this.doorList.subway]
      return data
    }
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-search {
  width: 339px;
  height: 35px;
}
.search {
  margin-left: 0;
}

/deep/ .van-dropdown-menu__bar--opened {
  z-index: 10;
}
.van-popup {
  z-index: 12;
}
.img-icon {
  height: 20px;
}
/deep/.huxing {
  width: 265px;
  height: 17px;
  margin-bottom: 20px;
}
/deep/.van-picker__toolbar {
  width: 375px;
  height: 49px;
  border-top: 1px solid #ccc;

  .van-picker__cancel {
    width: 30%;
    height: 50px;
  }
  .van-picker__confirm {
    width: 70%;
    height: 50px;
    background-color: rgb(33, 185, 122);
  }
}

.hx {
  display: flex;
  width: 225px;
  height: 156px;
  flex-flow: wrap;
  margin-top: 20px;
  padding: 0 0 10px 40px;
  align-items: start;
  border-bottom: 1px solid #ccc;

  .btn {
    color: #ccc;
  }
}
/deep/.van-checkbox__icon--round {
  display: inline-block;
  width: 68px;
  height: 30px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  margin: 0 18px 15px 0;
  font-size: 15px;
}
/deep/.chaoxiang {
  width: 225px;
  height: 203px;
}
.zhong {
  margin-top: 20px;
}
/deep/.louceng {
  width: 252px;
  height: 109px;
  border: 0px;
}
.btns {
  position: fixed;
  bottom: -430px;
  left: 0px;
}
.cancel1 {
  width: 100px;
  color: #4eb979;
}
.sure1 {
  width: 200px;
  color: #fff;
  background-color: #4eb979;
}
.img-icon {
  height: 20px;
}
.fangwu {
  height: 380px;
}
.nav {
  display: flex;
  width: 345px;
  height: 120px;
  padding-top: 18px;
  margin-left: 15px;
  border-bottom: 1px solid #ccc;
  .left {
    width: 106px;
    height: 80px;
    img {
      width: 106px;
      height: 80px;
      overflow: hidden;
    }
  }
  .right {
    width: 239px;
    height: 86px;
    padding-left: 12px;
    p {
      height: 22px;
      font-size: px;
    }
  }
}
.title {
  font-size: 14px;
}
.desc {
  font-size: 10px;
  color: #ccc;
}
.tsgs {
  font-size: 10px;
  // background-color: rgb(225, 245, 248);
}
.price {
  color: red;
}
</style>
