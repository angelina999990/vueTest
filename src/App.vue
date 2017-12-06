<template>
  <v-app id="app">
    <v-toolbar color="grey darken-1" dark dense>
      <v-avatar tile="true" size="30px">
        <img src="./assets/logo.png" alt="avatar">
      </v-avatar>
      <v-toolbar-title class="body-2">PwC's Enterprise Risk Manager</v-toolbar-title>
      <v-tabs :scrollable="false" class="d-inline-flex" app>
        <v-tabs-bar dark>
          <v-tabs-item
            v-for="tab in tabs"
            :key="tab"
            :href="'#' + tab"
            ripple
          >
            {{ tab }}
          </v-tabs-item>
          <v-menu :nudge-width="100">
            <v-toolbar-title slot="activator">
              <span>All</span>
              <v-icon dark>arrow_drop_down</v-icon>
            </v-toolbar-title>
            <v-list>
              <v-list-tile v-for="item in 5" :key="item" @click="">
                <v-list-tile-title v-text="item"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-tabs-bar>
      </v-tabs>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- <v-navigation-drawer fixed dark app></v-navigation-drawer> -->

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app></v-footer>
  </v-app>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      tabs: ['税务管理平台', '风险管理平台', '文档管理']
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
