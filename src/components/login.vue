<template>
  <v-layout>
    <v-flex lg12>
      <v-card>
        <v-card-media src="src/assets/background.jpg" class="login-bg">
          <v-container fluid>
            <v-layout justify-center ali>
              <v-flex lg3 >
                <v-card light>
                  <v-card-title primary-title>
                    <div class="title primary--text"><b>Login</b></div>

                    <v-layout class="row wrap mt-3" justify-center>
                      <v-flex lg12 class="form-filed">
                        <div class="field-title">Username</div>
                        <input type="text" class="field-control">
                      </v-flex>
                      <v-flex lg12 class="form-filed mt-3">
                        <div class="field-title">Password</div>
                        <input type="password" class="field-control">
                      </v-flex>
                      <v-flex lg12 class="form-filed mt-3 d-flex">
                        <input id="remember" type="checkbox" class="field-control" style="flex-grow: 0;">
                        <label for="remember" class="control-label" style="align-self: center">
                           remember me
                        </label>
                      </v-flex>

                      <v-flex lg12>
                        <v-btn block color="primary" depressed class="white--text">Login</v-btn>
                        <v-btn flat block small color="primary">Forget password</v-btn>
                        <v-btn flat block small color="primary mt-5">Not a customer? <b>Register</b></v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
.login-bg {
  height: calc(100vh - 160px)!important;
}
</style>
