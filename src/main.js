// Import Vue
import Vue from 'vue'

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
// import Routes from './routes.js'

// Import App Component
import App from './app3'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// require(~'vue-material/dist/components/mdCore.css');
// require(~'vue-material/dist/components/mdButton.css');
// require(~'vue-material/dist/components/mdIcon.css');
// require(~'vue-material/dist/components/mdSidenav.css');
// require(~'vue-material/dist/components/mdToolbar.css');

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  },
})

console.log("I'm here...");

// Init App
var app = new Vue({
  el: '#app',
  template: '<app/>',

  // Register App Component
  components: {
    app: App
  }
});
