<template>
  <v-app id="app">
    <app-header></app-header>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <app-footer></app-footer>
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
