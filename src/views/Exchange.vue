<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">兑换页</h1>
    </v-header>
    <section>
      <mt-field
       label="卡号"
        placeholder="请输入卡号"
        type = "text"
        v-model = "account"
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入密码"
       type="password"
       v-model="password"
        ></mt-field>
      <p class="tip"  href="tel:10086#mp.weixin.qq.com">提示 : 若果您在使用过程中有任何疑问，请致电客服热线：*********！</p>
    </section>
    <mt-button
     plain
     size="large"
     @click="exchange"
     >兑换</mt-button>

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      account:'',
      password:''
    }
  },
  mounted() {
    if (!this.$store.state.detail.userInfo.hasOwnProperty('id')) {
      let code = this.$route.query.code
      if (code){
        this.$api({
          method: 'get',
          url: '/api/user?code='+code
        }).then((response) => {
          this.$store.commit('SET_USER', response.data);
          this.userInfo = response.data;
        }).catch(function(error) {
          console.log(error)
        })
      }else {
        this.$router.replace({
          path: '/login'
        })
      }
    }
  },
  methods:{
    // 登录按钮
    exchange(){
      if(this.account!=="" && this.password!=="") {
        let userId=this.$store.state.detail.userInfo.id

        this.$api({
          method: 'get',
          url: '/api/order/exchange?code='+this.account+'&password='+this.password+'&userId='+userId
        }).then((response) => {
          Toast(response.data);
          setTimeout(()=>{
            this.$router.replace({
              path: '/order'
            })
          },2000);
        }).catch(function(error) {
          Toast('兑换失败，请检查网络后重新尝试！');
        })
      }else {
        Toast('兑换账号密码不能为空');
      }

    },

  }
}

</script>

<style lang="less" scoped>
.login {
  >section {
    .tip {
      padding: 6vw 3vw;
      color:rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
</style>
