<template lang="html">
  <section class="content">
    <div class="img-wrap" v-for="k in datas">
      <p>{{k.id}}</p>
    </div>
  </section>

</template>

<script>
export default {
  props: {
    datas:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  computed:{
  }
}
</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    margin-top: 10px;
    border-top: 20px solid #F8FCFF;
    .img-wrap {
    height: 120vw;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
