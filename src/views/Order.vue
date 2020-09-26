<template lang="html">

    <div class="car">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">订单列表</h1>
      </v-header>
      <!-- 根据购物车是否有商品加载不同的组件 -->

      <section v-if="count" class="view">
        <v-something :datas="orders"/>
        <router-view
            :datas="orders"
        />
      </section>
      <v-nothing v-else/>
      <v-footer/>
    </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Nothing from '@/components/order/nothing.vue'
import Something from '@/components/order/something.vue'

export default {
  components:{
    'v-header':Header,
    'v-nothing':Nothing,
    'v-something':Something
  },

  computed:{
    count(){
      return this.$store.state.detail.orderInfo.length
    }
  },
  data () {
    return {
      userId: "",
      orders:[]
    }
  },
  mounted() {

    // console.log(this.$route.query)
    // console.log("------------"+JSON.stringify(this.$store.state))


    if (this.$store.state.detail.userInfo.hasOwnProperty('id')){
      this.userId = this.$store.state.detail.userInfo.id
      console.log("-----------====="+this.userId)
      this.$api({
        method: 'get',
        url: '/api/order?userId='+this.userId
      }).then((response) => {
        this.orders=response.data
        this.$store.commit('SET_ORDER', response.data);

      }).catch(function(error) {
        console.log(error)
      })
    }else {
        this.$router.replace({
          path: '/login'
        })
    }
  }

}
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  padding-bottom: 14vw;
}
</style>
