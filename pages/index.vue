<template>
  <div class="main-page">
    <Map :map-array="mapArray" />

    <RoutesMainPage :map-array="mapArray" />

    <BottomExpanders />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { mapArray } from '~/backendInfo/map.js'

export default {
  name: 'HomePage',

  components: {
    BottomExpanders: () => import('./-bottomExpanders'),
    RoutesMainPage: () => import('./-routesMainPage'),
    Map: () => import('./-map'),
  },

  data() {
    return {
      mapArray,
    }
  },

  computed: {
    ...mapState({
      headerTitle: state => state.header.title,
    }),
  },


  created() {
    this.changeHeaderAction('openLeftMenu')
    this.changeHeaderTitle(this.headerTitle)
    this.changeHeaderBottom('default')
  },

  methods: {
    ...mapMutations({
      changeHeaderAction: 'header/CHANGE_MAIN_BUTTON_ACTION',
      changeHeaderTitle: 'header/CHANGE_TITLE',
      changeHeaderBottom: 'header/CHANGE_BOTTOM_SECTION',
    }),
  },
}
</script>

<style lang="scss">
</style>
