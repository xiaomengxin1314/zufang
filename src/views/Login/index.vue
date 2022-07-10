<template>
  <div>
    <van-nav-bar @click-left="$router.back()" title="页面登录" left-arrow />
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请输入账号' },
          {
            pattern: /^\d{3,16}$/,
            message: '不符合账号模式',
          },
        ]"
      />
      <van-field
        v-model="password"
        name="password"
        type="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern: /^(\w){6,20}$/,
            message: '不符合密码格式',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button size="large" block type="primary" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>

import { GetMima } from '@/api/users'
export default {
  created () {

  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (value) {
      const res = await GetMima(value)
      if (res.data.status === 200) {
        this.$store.commit('setUser', res.data.body)
        console.log(res)
        this.$router.push({ name: 'my' })
      } else {
        console.log('登陆失败')
      }
    }
    // async sendFn () {
    //   try {
    //     await this.$refs.form.validate(this.data)
    //     try {
    //       // await GetMima()
    //       this.$toast.success('登录成功')
    //     } catch (err) {
    //       console.log(err)
    //       this.toast.fail('登陆失败')
    //     }
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    // onSubmit (values) {
    //   console.log(values)
    // }
    // async GetMi () {
    //   const res = await GetMima()
    //   console.log(res)
    // }
  },
  computed: {

  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.van-field {
  font-size: 20px;
  margin-top: 15px;
}
</style>
