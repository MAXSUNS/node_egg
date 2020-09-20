<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">兑换页</h1>
    </v-header>
    <section>
      <mt-field
       label="兑换账号"
        placeholder="请输入账号"
        type = "text"
        v-model = "account"
        ></mt-field>
      <mt-field
       label="兑换密码"
       placeholder="请输入兑换密码"
       type="password"
       v-model="password"
        ></mt-field>
      <p class="tip">提示 : 一经激活后，兑换商品将于账号绑定</p>
    </section>
    <mt-button
     plain
     size="large"
     @click="login"
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
  methods:{
    // 登录按钮
    login(){
      if(this.account!=="" && this.password!=="") {

        this.$api({
          method: 'get',
          url: '/api/user?code='+code
        }).then((response) => {
          Toast('兑换成功，请在-我的订单-中完善收货信息。');
          setTimeout(()=>{
            this.$router.replace({
              path: 'user'
            })
          },1000);
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
