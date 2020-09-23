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
              path: '/'
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
