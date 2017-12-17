<template>
  <v-layout justify-center>
    <v-flex md6>
      <v-card light >
        <v-card-title primary-title>
          <div class="title">Form control</div>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex md12 sm12 mb-2>
              <h3>text input</h3>
              <v-divider></v-divider>
            </v-flex>
            <v-flex md6 sm12>
              <div class="form-control-field">
                <label class="field-label">input box</label>
                <input type="text" class="field-input">
                <span class="field-hint">this is hind</span>
                <span class="field-error">thit is error</span>
              </div>
            </v-flex>
            <v-flex md6 sm12>
              <div class="form-control-field">
                <label class="field-label">select menu</label>
                <select class="field-select">
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
                <span class="field-hint">this is hind</span>
                <span class="field-error">thit is error</span>
              </div>
            </v-flex>
            <v-flex md6 sm12>
              <div class="form-control-field">
                <label class="field-label">this is field title</label>
                <input type="text" class="field-input">
                <span class="field-hint">this is hind</span>
                <span class="field-error">thit is error</span>
              </div>
            </v-flex>
            <v-flex md6 sm12>
              <div class="form-control-field">
                <label class="field-label">this is field title</label>
                <select class="field-select">
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
                <span class="field-hint">this is hind</span>
                <span class="field-error">thit is error</span>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row wrap mt-4>
            <v-flex md12 sm12>
              <h3>checkbox</h3>
              <v-divider class="mb-3"></v-divider>
            </v-flex>
            <v-flex sm12 md6>
              <div class="form-control-field">
                <input id="o-checkbox" type="checkbox">
                <label for="o-checkbox">original checkbox</label>
                <span class="field-error">this is error</span>
              </div>
              <div class="form-control-field">
                <v-checkbox color="indigo darken-3" v-model="checkboxModel2" v-bind:label="`vuetify style - value : ${checkboxModel2}`" hide-details light></v-checkbox>
              </div>
              <div class="form-control-field control-checkbox">
                <label class="checkbox-label">
                  checkbox with customized style - unchecked
                  <input type="checkbox" v-model="checkboxModel3" />
                  <div class="control-indicator"></div>
                </label>
                <span class="field-error">this is an error</span>
                <label class="checkbox-label">
                  checkbox with customized style - checked
                  <input type="checkbox" v-model="checkboxModel4" />
                  <div class="control-indicator"></div>
                </label>
                <label class="checkbox-label">
                  checkbox with customized style - disabled
                  <input type="checkbox" v-once :disabled="isDisabled" />
                  <div class="control-indicator"></div>
                </label>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row wrap mt-4>
            <v-flex md12 sm12>
              <h3>select dropdown - use with vue-multiselect</h3>
              <v-divider class="mb-3"></v-divider>
            </v-flex>
            <v-flex md6 sm12>
              <div class="form-control-field">
                <label class="field-label">Sample single select</label>
                <multiselect
                  v-model="selectedValue1"
                  :options="options"
                  :searchable="false"
                  track-by="id"
                  label="desc"
                  >
                </multiselect>
                <span class="field-hint">selected Value - {{ selectedValue1 }}</span>
                <span class="field-error">thit is error</span>
              </div>
            </v-flex>
            <v-flex md6 sm12>
              <div class="form-control-field">
                <label class="field-label">input box</label>
                <input type="text" class="field-input">
                <span class="field-hint">this is hind</span>
                <span class="field-error">thit is error</span>
              </div>
            </v-flex>
            <v-flex md12>
              <div class="form-control-field">
                <label class="field-label">Searchable select</label>
                <multiselect
                  v-model="selectedValue2"
                  :options="options"
                  track-by="id"
                  label="desc"
                  select-label=""
                  deselect-abel=""
                  >
                </multiselect>
                <span class="field-hint">selected Value - {{ selectedValue2 }}</span>
                <span class="field-error">thit is error</span>
              </div>
              <div class="form-control-field">
                <label class="field-label">Tag select</label>
                <multiselect v-model="selectedValue3" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="desc" track-by="id" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap mt-4>
            <v-flex md12 sm12>
              <h3>file upload - use with vue2-dropzone</h3>
              <v-divider class="mb-3"></v-divider>
            </v-flex>
            <v-flex md6 sm12>
              <div class="file-uploader-container d-flex">
                <div class="file-status">
                  <v-icon color="green" class="pr-2" v-if="file">done</v-icon>
                  <v-icon color="yellow darken-2" class="pr-2" v-else>more_horiz</v-icon>
                </div>
                <div class="file-uploader-body layout d-flex column justify-center">
                  <div class="file-name body-2 d-flex align-center">{{ fileName }}</div>
                  <div class="file-detail">
                    <div class="file-format">File Format: {{ fileType }}</div>
                    <div class="file-size">{{ fileSize }}</div>
                  </div>
                  <div class="file-operation d-flex align-end">
                    <template v-if="file">
                      <v-btn flat small color="primary" class="mt-0 mr-0 mb-0 flex-grow-0" right><v-icon class="font-18 pr-1">fa-eye</v-icon>Preview</v-btn>
                      <v-btn flat small color="primary" class="ma-0 flex-grow-0" right @click="deleteFile"><v-icon class="title">delete</v-icon>Delete</v-btn>
                    </template>
                    <v-btn flat small color="primary" right class="upload-btn mt-0 mr-0 mb-0 flex-grow-0" v-else><v-icon class="title">file_upload</v-icon>{{uploadBtnText}}</v-btn>
                  </div>
                </div>
                <vue-dropzone
                  id="customdropzone"
                  class="file-uploader-dropzone"
                  ref="customdropzone"
                  :options="dropzoneOptions"
                  :include-styling="false"
                  @vdropzone-file-added="onFileAdded"
                  @vdropzone-error="onFileError"
                >
                </vue-dropzone>
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ui',

  data () {
    return {
      checkboxModel1: false,
      checkboxModel2: false,
      checkboxModel3: false,
      checkboxModel4: true,
      isDisabled: true,
      options: [
        {id: 1, desc: 'first choice'},
        {id: 2, desc: 'second choice'},
        {id: 3, desc: 'third choice'},
        {id: 4, desc: 'fourth choice'}
      ],
      selectedValue1: undefined,
      selectedValue2: undefined,
      selectedValue3: [],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFiles: 1, // maximum number of files that will be handle, only limit number of file uploaded when choose more than limit
        // uploadMultiple: true, // upload multi files in one request
        thumbnailWidth: 0,
        addRemoveLinks: true,
        autoProcessQueue: false, // set autoProcessQueue=false, so to call .processQueue() to manaully upload file(s) to server
        clickable: '.upload-btn'
      },
      uploadBtnText: 'Upload',
      file: null
    }
  },

  computed: {
    fileName: function () {
      return this.file ? this.file.name : 'Please uplaod your file'
    },

    fileType: function () {
      return this.file ? this.file.type : 'jpg/gif/png/pdf'
    },

    fileSize: function () {
      return this.file ? `File Size: ${Math.ceil(this.file.size / 1024)}KB` : 'Max File Size: 1MB'
    }
  },

  methods: {
    addTag (newTag) {
      const tag = {
        id: Math.random() * 100,
        desc: newTag
      }
      this.options.push(tag)
      this.selectedValue3.push(tag)
    },

    loadFile () {
      console.log(this.$refs.fileUploader)
      this.$refs.fileUploader.click()
    },

    onFileAdded (file) {
      console.log(file)
      this.file = file
    },

    onFileError (file, message, xhr) {
      this.uploadBtnText = 'Re-upload'
    },

    deleteFile () {
      // rm file from dropzone area
      this.$refs.customdropzone.removeFile(this.file)
      this.file = null
    }
  }
}
</script>

<style lang="scss">
form {
  height: 600px;
  border: 1px solid ;
  padding: 15px;
}
* {
  box-sizing: border-box;
}
.form-control-field {
  display: flex;
  flex-direction: column;
  padding: 5px;

  .field-label {
    font-size: 14px;
    color: #777;
    margin-bottom: 2px;
  }

  input[type="text"].field-input, select {
    border: 1px solid #b8b8b8;
    padding: 5px 16px;
    width: 100%;
    border-radius: 2px;
    font-size: 14px;
    height: 35px;
    min-height: 30px;
  }

  select {
    background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 1px;
  }

  input[type="text"].field-input:focus, select:focus {
    outline: none;
    border: 1px solid purple;
  }

  .field-hint, .field-error {
    font-size: 12px;
    color: #777;
    margin-top: 1px;
  }

  .field-error {
    color: red;
  }
}

.control-checkbox {
  .checkbox-label {
    display: block;
    position: relative;
    padding-left: 30px;
    min-height: 30px;
    font-size: 14px;
    line-height: 28px;
    cursor: pointer;

    .control-indicator {
      position: absolute;
      top: 5px;
      left: 0px;
      width: 20px;
      height: 20px;
      background: lightgrey;

      &::after {
        display: none;
      }
    }

    input[type="checkbox"] {
      z-index: -1;
      opacity: 0; // set opacity=0 to hide visibility but still clickable

      &:checked ~ .control-indicator {
        background: lightblue;

        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0px;
          left: 6px;
          width: 8px;
          height: 16px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }

      &:disabled ~ .control-indicator {
        background: grey;
      }
    }
  }
}

// customize vue-multiselect
// caret icon (the icon to toggle dropdown)
.multiselect__select::before {
  border-width: 6px 6px 0;
  border-color: #423172 transparent transparent;
  border-radius: 2px;
}

// highlighting color when hover
.multiselect__option--highlight {
  background: rgba(0,0,0,.1);
  color: #333;

  &::after {
    background: transparent;
    color: grey;
  }
}

.multiselect__option--selected.multiselect__option--highlight {
  background: transparent;
  color: #333;

  &::after {
    background: transparent;
    color: lightgrey;
  }
}

// customize a little to reduce the total height
.multiselect {
  min-height: 35px;

  .multiselect__select::before {
    top: 58%;
  }

  .multiselect__tags {
    min-height: 35px;
    padding: 5px 40px 0 8px;
    border-color: #b8b8b8;
    border-radius: 2px;
  }
}
// remove tag margin-bottom to reduce the height
.multiselect__tag {
  margin-bottom: 0;
}

// file-upoader
.file-uploader-container {
  border: 1px solid #b8b8b8;
  border-radius: 2px;
  min-height: 120px;
  padding: 8px 9px 4px 9px;

  .file-status {
    flex: 0 1 auto;
  }

  .file-detail {
    font-size: 12px;
    color: #777;
  }
}
.file-uploader-dropzone {
  // width: 100%;
  // height: 40px;
  // border: 1px solid #b8b8b8;
  // border-radius: 2px;
  display: none;
}
</style>
