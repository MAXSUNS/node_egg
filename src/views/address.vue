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
          value={{orderInfo.consignee}}
          v-model = "consignee"
      ></mt-field>
      <mt-field
          label="地址"
          placeholder="请输入完整"
          type = "text"
          value={{orderInfo.address}}
          v-model = "address"
      ></mt-field>
      <mt-field
       label="收货电话"
       placeholder="请输入收货"
       type="text"
       value={{orderInfo.mobile}}
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
import isValidPhone from '@/util/check'

import { Toast } from 'mint-ui'
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      mobile:'',
      consignee:'',
      address:'',
      orderInfo:{}
    }
  },
  methods:{
    // 登录按钮
    exchange(){
      if(this.mobile !=="" && this.consignee !==""&&this.address !==""&&isValidPhone(this.mobile)) {
        let order=this.$store.state.detail.selectOrder
        this.$api({
          method: 'post',
          data: {
            "mobile":this.mobile,
            "consignee":this.consignee,
            "address":this.address,
            "orderId":order.id,
          },
          url: '/api/order/address'
        }).then((response) => {
          Toast(response.data);
          setTimeout(()=>{
            this.$router.replace({
              path: '/'
            })
          },2000);
        }).catch(function(error) {
          Toast('更改地址失败，请检查网络后重新尝试！');
        })
      }else {
        Toast('请确保填写信息的正确性和完整性！');
      }

    },

  },
  mounted() {
    this.orderInfo=this.$store.state.detail.selectOrder
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
