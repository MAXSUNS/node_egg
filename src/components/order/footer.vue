<template lang="html">

    <footer class="footer">

      <div class="footer-result">
        <p>收货地址：</p>
        <p><span>收件人： </span>元</p>
      </div>
      <a class="footer-pay" @click="address">
        修改地址
      </a>
    </footer>

</template>

<script>

export default {
  computed: {
    // 勾选的商品数量
    count () {
      // 如果已选择列表为空 就返回0
      if (this.$store.getters.selectedList == undefined) {
        return 0
      } else {
        return this.$store.getters.selectedList.length
      }
    },

    //勾选的商品的价格总和
    allpay () {
      let all = 0;
      // 如果有勾选商品,计算总价格
      if (this.$store.getters.selectedList != undefined) {

        for (let i = 0; i < this.$store.getters.selectedList.length; i++) {

          all += this.$store.getters.selectedList[i].price;

        }

      }
      // 没有勾选 即为0
      return all
    }
  },

  methods: {
    //点击跳转到支付页
    address () {

      this.$router.replace({
        path: '/address'
      })

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";

.footer {
  width: 100%;
  height: 16vw;
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
    line-height: 16vw;
  }

  .footer-pay {
    background-color: @cl;
    line-height: 16vw;
    color: #fff;
  }
}
</style>
