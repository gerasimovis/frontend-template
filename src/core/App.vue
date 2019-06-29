<template>
  <div>
    <Header/>
    <Content>
      <router-view></router-view>
    </Content>
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Content from './layout/Content.vue'

export default {
  name: 'app',
  components: {
    Header,
    Content
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import './scss/index.scss';
</style>
