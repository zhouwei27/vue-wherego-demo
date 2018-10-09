<template>
<div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li class="item" v-for="item of list" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" />
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     weekendList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
  //       title: '上海必游',
  //       desc: '中西合璧，现代和传统各有各的精彩'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
  //       title: '亲子时光',
  //       desc: '走进自然或玩转乐园，感知大千世界'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
  //       title: '上海城市观光',
  //       desc: '来这里寻找你所认识的上海'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    font-size: .32rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .6rem
      color: #ccc
      font-size: .28rem
      ellipsis()
</style>
