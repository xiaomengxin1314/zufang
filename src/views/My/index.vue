<template>
  <div>
    <div class="header header-login" v-if="user && user.token">
      <div class="inner">
        <div class="men"></div>
        <div class="nav">
          <div class="banner">
            <van-image
              round
              scale-down
              width="70"
              height="70"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <p>游客</p>
            <van-button type="primary" @click="Logout">退出</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="header header-notlogin" v-else>
      <div class="inner">
        <div class="men"></div>
        <div class="nav">
          <div class="banner">
            <van-image
              round
              scale-down
              width="70"
              height="70"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <p>游客</p>
            <van-button type="primary" @click="$router.push('login')"
              >去登陆</van-button
            >
            <p>编辑资料</p>
          </div>
        </div>
      </div>
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="star-o" text="我的收藏">
      </van-grid-item>
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="comment-o" text="成为房主" />
      <van-grid-item icon="friends-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <div class="footer">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () { },
  data () {
    return {

    }
  },
  methods: {
    async Logout () {
      try {
        await this.$dialog.confirm({ message: '你确定要退出码' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header-notlogin,
.header-login {
  padding-bottom: 130px;
}
.men {
  width: 375px;
  height: 191px;
  background-color: rgb(111, 111, 172);
}
.nav {
  width: 318px;
  height: 150px;
  position: fixed;
  left: 50%;
  top: 225px;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #fff;

  box-shadow: 0px 4px rgb(247, 246, 246);
}
.banner {
  position: fixed;
  left: 50%;
  top: 45px;
  transform: translate(-50%, -50%);
}
.van-image {
  background-color: #fff;
}
.van-button {
  width: 100px;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  background-color: #21b97a;
}
.footer {
  width: 345px;
  height: 84px;
  margin-left: 15px;
  margin-top: 10px;
  img {
    width: 100%;
  }
}
</style>
