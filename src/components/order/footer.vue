<template lang="html">

    <footer class="footer">

      <div class="footer-result">
        <p>收货地址：{{orderInfo.address}}</p>
        <p>收件人：{{orderInfo.consignee}}</p>
        <p>手机号：{{orderInfo.mobile}}</p>
      </div>
      <a class="footer-pay" @click="address">
        编辑地址
      </a>
    </footer>

</template>

<script>

export default {
  data () {
    return {
      orderInfo:{}
    }
  },
  computed: {

  },

  methods: {
    //点击跳转到支付页
    address () {
      this.$router.replace({
        path: '/address'
      })

    }
  },
  mounted() {
    this.orderInfo=this.$store.state.detail.selectOrder
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";

.footer {
  width: 100%;
  height: 30vw;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  .footer-result,
  a {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
  }

  .footer-result {
    p {
      .fz(font-size,24);
      color: #999;
    }

    p:last-of-type {
      padding: 1vw 0 0 1vw;
      span {
        color: @cl;
        .fz(font-size,42);
      }
    }
  }

  .footer-goon {
    background-color: #f4f4f4;
    line-height: 30vw;
  }

  .footer-pay {
    background-color: @cl;
    line-height: 30vw;
    color: #fff;
  }
}
</style>
