<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">地址修改页</h1>
    </v-header>
    <section>
      <mt-field
          label="收件人"
          placeholder="请输入收件人姓名"
          type = "text"
          v-model = "consignee"
      ></mt-field>
      <mt-field
          label="地址"
          placeholder="请输入完整"
          type = "text"
          v-model = "address"
      ></mt-field>
      <mt-field
       label="收货电话"
       placeholder="请输入收货"
       type="text"
       v-model="mobile"
        ></mt-field>
      <p class="tip">Tip : 请输入正确的收货信息，将根据收货地址进行发货</p>
    </section>
    <mt-button
        plain
        size="large"
        @click="exchange"
    >提交</mt-button>

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
        console.log("------------"+JSON.stringify(this.$store.state.detail))
        let userId=this.$store.state.detail.userInfo.id
        console.log("------------"+userId)

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
