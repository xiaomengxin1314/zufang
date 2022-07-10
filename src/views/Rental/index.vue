<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-cell title="房源信息" />
      <van-cell title="房源信息" value="请输入小区名称" is-link />
      <van-field v-model="value" label="租 金" placeholder="请输入租金/月">
        <template #extra><span>￥/月</span></template>
      </van-field>
      <van-field v-model="value" label="建筑面积" placeholder="请输入建筑面积">
        <template #extra><span>m²</span></template>
      </van-field>
      <van-cell title="户 型" value="请选择" is-link />
      <van-cell title="所在楼层" value="请选择" is-link />
      <van-cell title="朝  向" label="房屋标题" value="请选择" is-link />
      <van-cell
        class="biaoti"
        title="请输入标题 (例如: 整租小区名 2室 5000元)"
        label="房屋标题"
      />
    </van-cell-group>
    <div class="shangchuan"><van-uploader :after-read="afterRead" /></div>
    <div class="beizhi">
      <p>房屋配置</p>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.biaoti {
  border-top: 1px solid #eee;
}
.shangchuan {
  margin: 10px 0 0 10px;
}
.beizhi {
  p {
    margin-top: 20px;
  }
}
</style>
