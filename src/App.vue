<template>
  <v-app id="app">
    <template v-if="$route.name!=='ui'">
      <app-header></app-header>
      <v-content>
        <router-view></router-view>
      </v-content>
      <app-footer></app-footer>
    </template>
    <v-container v-else>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      tabs: ['APPLICATIONS', 'PROCEDURE', 'CONTACT US']
    }
  }
}
</script>

<style lang="scss">
.header-tabs {
  width: 65%;

  > .tabs__bar {
    height: 64px;
  }
}
.grow-0 {
  flex-grow: 0
}
</style>
