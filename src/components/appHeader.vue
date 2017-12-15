<template>
  <div>
    <v-toolbar class="white pl-5 pr-5 hidden-md-and-down" light>
      <v-avatar :tile="true" size="30px">
        <img src="/static/img/logo.png" alt="avatar">
      </v-avatar>
      <v-toolbar-title class="body-2">
        <router-link :to="{ name: 'home'}">
          <b>APPLICATION PORTAL</b>
        </router-link>
      </v-toolbar-title>
      <v-tabs :scrollable="false" class="header-tabs" fixed centered>
        <v-tabs-bar light>
          <v-tabs-slider color="deep-purple"></v-tabs-slider>
          <v-tabs-item
            v-for="tab in tabs"
            :key="tab.name"
            :to="tab.to"
            ripple
          >
            {{ tab.name }}
          </v-tabs-item>
        </v-tabs-bar>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <div slot="activator">
          <v-avatar :size="'40px'" class="grey lighten-4 mr-3">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="avatar">
          </v-avatar>
          John Leider
          <v-icon>arrow_drop_down</v-icon>
        </div>
        <v-list>
          <v-list-tile v-for="n in 3" :key="n" @click="">
            <v-list-tile-title>{{ n }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <div class="hidden-md-and-up">
      <v-toolbar class="white" light>
        <v-avatar :tile="true" size="30px">
          <img src="/static/img/logo.png" alt="avatar">
        </v-avatar>
        <v-toolbar-title class="body-2 primary--text">
          <router-link :to="{ name: 'home'}">
            <b>APPLICATION PORTAL</b>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon class="ma-4" @click="isOpen = !isOpen">fa-bars</v-icon>
      </v-toolbar>
      <v-layout>
        <v-flex>
          <v-expansion-panel>
            <v-expansion-panel-content v-model="isOpen">
              <v-list dense dark class="primary">
                <template v-for="(tab, index) in tabs">
                  <v-list-tile :key="tab.name" :to="tab.to">
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <b class="white--text">{{tab.name}}</b>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider></v-divider>
                </template>
                <v-list-group v-model="isActive">
                  <v-list-tile avatar slot="item">
                    <v-list-tile-action>
                      <v-avatar size="20px" slot="activator">
                        <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
                      </v-avatar>
                    </v-list-tile-action>
                    <v-list-tile-content class="b-b" @click.stop.prevent="onClick()">
                      <v-list-tile-title>John Mullen</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile class="primary">
                    <v-list-tile-content class="b-b">
                      <v-list-tile-title>reset password</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile class="primary">
                    <v-list-tile-content>
                      <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appHeader',

  data () {
    return {
      tabs: [
        {
          name: 'APPLICATIONS',
          to: 'application'
        },
        {
          name: 'PROCEDURE',
          to: 'procedure'
        },
        {
          name: 'CONTACT US',
          to: 'contact'
        }
      ],
      isOpen: false,
      isActive: true
    }
  },

  methods: {
    onClick: function () {
      console.log(1)
    }
  }
}
</script>

<style lang="scss">
.list--group__header+.list--group:after {
  opacity: 0;
}

.list--group__header--active .list__tile, .list--group__header>li:first-child:hover {
  background: inherit;
}
</style>
