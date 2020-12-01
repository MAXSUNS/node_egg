<template lang="html">

    <div class="wrap">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">订单详情</h1>
      </v-header>
      <!-- 根据购物车是否有商品加载不同的组件 -->

      <ul class="something" v-if='this.orders'>
        <li v-for="k in this.orders">
          <div class="something-right">
            <p>{{k.goods_name}} 第{{k.number}}份</p>
            <p >订单状态：</p>
            <p >{{k.specifications}}</p>
          </div>
        </li>
        <li >
          <div class="something-right">
            <p>我也是有底线的!!!</p>
          </div>
        </li>
      </ul>
      <v-footer/>

    </div>
</template>

<script>
import Header from '@/common/_header.vue'
import footer from '@/components/order/footer.vue'
import content from '@/components/order/content.vue'

export default {
  components:{
    'v-footer':footer,
    'v-header':Header,
    'v-content':content
  },

  computed:{
    count(){
      return this.$store.state.detail.orderInfo
    }
  },
  data () {
    return {
      userId: "",
      orders:{}
    }
  },
  mounted() {
    this.orders=this.$store.state.detail.selectOrder.orders
  }

}
</script>

<style lang="less" scoped>
@import "../assets/fz.less";

.wrap {
  width: 100%;
  .something {
    width: 100%;
    > li {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 4vw 2vw;
      position: relative;
      height: 15vw;
      .something-right {
        -ms-flex: 7;
        -webkit-box-flex: 7;
        flex: 7;
        height: 100%;
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-left: 6vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          .fz(font-size,26);
        }
        p:last-of-type {
          .fz(font-size,22);
          color: rgb(168, 168, 168);
        }
      }
    }
  }
  label,
  span {
    &:active {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}

</style>
