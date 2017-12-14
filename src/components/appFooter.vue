<template>
  <v-footer color="primary white--text caption" app>
    <v-container fluid class="pt-4 pb-4 pr-5 pl-5">
      <v-layout>
        <v-layout column>
          <v-flex>@2017 All rights reserver Lorem ipsum dolor sit amet, consectetur adipiscing elit</v-flex>
          <v-flex>privacy statement | Disclaimer</v-flex>
        </v-layout>
        <v-flex class="d-flex" justify-end>
          <v-avatar class="grow-0 mr-3">
            <img src="../assets/logo.png" alt="avatar">
          </v-avatar>
          <h3 class="grow-0">
            某某某某大学
            <br>
            <span class="body-2">
              The Chinese University  Lorem ipsum dolor sit
            </span>
          </h3>

        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'appFooter'
}
</script>

<style>
</style>
