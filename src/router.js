import Vue from 'vue';
import Router from 'vue-router';
const Search = () => import('./views/Search.vue');
const SignUp = () => import('./views/SignUp.vue');
const LogIn = () => import('./views/LogIn.vue');
const Profile = () => import('./views/Profile.vue');
const Collection = () => import('./views/Collection.vue');
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
