import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Firebase from 'firebase';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase config
const config = {
  apiKey: "AIzaSyCGp5GMgDVWNCPtEXyzVzNcn-lskKiQaHs",
  authDomain: "sift-f0539.firebaseapp.com",
  databaseURL: "https://sift-f0539.firebaseio.com",
  projectId: "sift-f0539",
  storageBucket: "",
  messagingSenderId: "710146700302"
};

Firebase.initializeApp(config)

Vue.config.productionTip = false;

//Global navigation guard: redirects to /login if page requires login
router.beforeEach((to, from, next) => {
  var currentUser = Firebase.auth().currentUser
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (!requiresAuth && currentUser) {
      next('/search')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

//Vue instance is wrapped in onAuthStateChanged so it doesn't
//execute until Firebase initialization ends, for proper functioning of navigation guards
Firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
  })
})
