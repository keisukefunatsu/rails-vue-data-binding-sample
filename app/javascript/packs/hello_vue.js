/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import App from './app.vue'
import _ from 'lodash';
import marked from 'marked'
window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('e-app')) {
        new Vue({
            el: '#e-app',
            data () {
                if(question.id == null) {                    
                    question.text =''
                }
                return{
                    originalText: question.text,
                }
            },
            methods: {
                updateTextArea: _.debounce(function (e) {
                    this.originalText = e.target.value
                }, 300),
            },
            computed: {
              markedText:function() {
                  return marked(this.originalText, { sanitize: true })
              }
            },
        })
    }
})
