import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import SignUp from './views/SignUp.vue';
import LogIn from './views/LogIn.vue';
import Profile from './views/Profile.vue';
import Collection from './views/Collection.vue';
import SearchResults from './components/SearchResults.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { 
        path: '', 
        redirect: '/search'
    },
    {
        path: '/signup',
        component: SignUp
    },
    { 
        path: '/login', 
        component: LogIn
    },
    {
        path: '/search',
        component: Search,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                component: SearchResults
            },
            {
                path: 'profile',
                component: Profile
            },
            {
                path: 'collection/:collectionId',
                component: Collection,
                props: true
            }
        ]
    }
],
});
