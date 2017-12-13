<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex md3 xs12>
        <v-expansion-panel class="">
          <v-expansion-panel-content hide-actions v-model="isOpen">
            <div slot="header" class="deep-purple--text text--darken-4 hidden-sm-and-down">
              <span class="mr-2"><v-icon class="deep-purple--text text--darken-4">fa-list</v-icon></span>
              <span class="title">Application Form</span>
            </div>
            <div slot="header" class="d-flex align-items-center justify-end hidden-sm-and-up">
              <v-icon class="text-xs-center">fa-list</v-icon>
              <span class="title">step content</span>
              <template v-if="isOpen">
                <v-icon class="text-xs-right">fa-caret-up</v-icon>
              </template>
              <template v-else>
                <v-icon class="text-xs-right">fa-caret-down</v-icon>
              </template>
            </div>
            <v-stepper vertical class="elevation-0 ">
              <template v-for="(step, index) in steps">
                <v-stepper-step :step="index+1" :complete="step.isDone">Program Preference</v-stepper-step>
                <v-stepper-content :step="index+1"></v-stepper-content>
              </template>
            </v-stepper>
          </v-expansion-panel-content>
          <v-expansion-panel-content hide-actions class="hidden-sm-and-down">
            <div slot="header" class="deep-purple--text text--darken-4">
              <span class="mr-2">
                <v-icon class="deep-purple--text text--darken-4">fa-list</v-icon>
              </span>
              <span class="title">Application Payment</span>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex md9 xs12>
        <v-card class="pr-3 pl-3">
          <v-card-title primary-title tile>
            <h2 class="deep-purple--text text--darken-4 mb-0"><b>PERSON PARTICULARS</b></h2>
          </v-card-title>
          <v-card-text class="text-md-left">
            <v-layout row wrap>
              <v-flex md2 xs12>
                NAME
              </v-flex>
              <v-flex md10 xs12>
                <v-layout class="row wrap" justify-start>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Passport Family Name</div>
                    <input type="text" class="field-control">
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Passport Given Name</div>
                    <input type="text" class="field-control">
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                </v-layout>
                <v-layout class="row wrap mt-4" justify-start>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Alias / Nickname</div>
                    <input type="text" class="field-control">
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Chinese Name (if any)</div>
                    <input type="text" class="field-control">
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>

            <v-divider class="mt-5 mb-5"></v-divider>

            <v-layout row wrap>
              <v-flex md2 xs12>
                NATIONALITY
              </v-flex>
              <v-flex md10 xs12>
                <v-layout class="row wrap" justify-start>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Passport Family Name</div>
                    <v-select
                      v-bind:items="items"
                      v-model="nationality"
                      label="Select"
                      single-line
                      bottom
                      @input="onInput"
                    ></v-select>
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Passport Given Name</div>
                    <input type="text" class="field-control">
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                </v-layout>
                <v-layout class="row wrap mt-4" justify-start>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Alias / Nickname</div>
                    <input type="text" class="field-control">
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                  <v-flex md6 class="form-filed">
                    <div class="field-title">Chinese Name (if any)</div>
                    <input type="text" class="field-control">
                    <div class="field-comment">Same as your ID or passport</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>

            <v-divider class="mt-5 mb-5 hidden-sm-and-down"></v-divider>

            <v-layout wrap class="hidden-sm-and-down">
              <v-btn outline color="indigo">Previous</v-btn>
              <v-layout row justify-end class="white--text">
                <v-btn color="indigo" depressed class="white--text">Save</v-btn>
                <v-btn color="indigo" depressed class="white--text">Save and Next</v-btn>
              </v-layout>
            </v-layout >

            <v-layout wrap class="hidden-sm-and-up">
              <v-btn outline color="indigo" small><v-icon>fa-long-arrow-left</v-icon></v-btn>
              <v-btn color="indigo" small depressed class="white--text flex justify-end">Save</v-btn>
              <v-btn color="indigo" small depressed class="white--text flex justify-end">Save and Next</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      steps: [
        {name: 'Program Preference', isDone: true},
        {name: 'Personal Particulars', isDone: false},
        {name: 'Contact Infomation', isDone: false}
      ],
      isOpen: true,
      items: ['China', 'USA', 'Australia', 'New Zealand'],
      nationality: ''
    }
  },

  methods: {
    onInput: function () {
      console.log(this.nationality)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-filed {
  .field-title {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .field-comment {
    font-size: 12px;
    margin-top: 4px;
    color: #777;
  }

  input.field-control {
    width: 100%;
    height: 30px;
    border: 1px solid #311b92;
    border-radius: 2px;
  }
}
</style>
