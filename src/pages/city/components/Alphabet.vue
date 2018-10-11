<template>
  <ul class="alphabet">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .alphabet
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 3.2rem
    right: 0
    bottom: 0
    font-size: .28rem
    list-style: none
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
