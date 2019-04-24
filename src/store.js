import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: null,
      userFavorites: [],
      userCollections: [],
      notifications: []
  },
  getters: {
      getUser: state => {
          return state.user
      },
      getUserEmail: state => {
          if (state.user !== null) {
              return state.user.email
          }
      },
      getUserId: state => {
          if (state.user !== null) {
              return state.user.uid
          }
      },
      getUserFavorites: state => {
          return state.userFavorites
      },
      getUserCollections: state => {
          return state.userCollections
      },
      getNotifications: state => {
          return state.notifications
      }
  },
  mutations: {
      setUser: state => {
          state.user = Firebase.auth().currentUser
      },
      setUserFavorites: (state, theUserFavorites) => {
          state.userFavorites = theUserFavorites
      },
      setUserCollections: (state, theUserCollections) => {
          state.userCollections = theUserCollections
      },
      addNotification: (state, notification) => {
          state.notifications.push(notification)
      },
      clearNotifications: (state) => {
          state.notifications.splice(0,state.notifications.length)
      }
  },
  actions: {
      setUser: context => {
          context.commit('setUser')
      },

      //userFavorites methods
      setUserFavorites: context => {
          var ref = Firebase.database().ref('/users/' + context.getters.getUserId + '/favorites')

          var theList = []
          ref.on("value", function(data) {
              //List must be cleared every time .on is run so it doesn't hold the old values
              theList.splice(0,theList.length)
              data.forEach(function(data) {
                  var item = {
                      key: data.key,
                      value: data.val()
                      }
                  theList.push(item)
              })
          })

          context.commit('setUserFavorites',theList)
      },
      addToUserFavorites: (context, source) => {
          var ref = Firebase.database().ref('/users/' + context.getters.getUserId + '/favorites')

          var theList = []
          ref.on("value", function(data) {
              //List must be cleared every time .on is run so it doesn't hold the old values
              theList.splice(0,theList.length)
              data.forEach(function(data) {
                  theList.push(data.val())
              })
          })

          if (theList.indexOf(source) === -1) {
              Firebase.database().ref('users/' + context.getters.getUserId).child('favorites').push(source)
          }
      },
      removeUserFavorite: (context, favoriteId) => {
          var ref = Firebase.database().ref('/users/' + context.getters.getUserId + '/favorites/' + favoriteId)
          ref.remove()
      },

      //userCollection methods  
      addNewCollection: (context, collectionName) => {
          var  collectionData = {
              name: collectionName
          }

          var newCollectionKey = Firebase.database().ref().child('collections').push().key

          var updates = {}
          updates['/collections/' + context.getters.getUserId + '/' + newCollectionKey] = collectionData
          updates['/users/' + context.getters.getUserId + '/collections/' + newCollectionKey] = true

          Firebase.database().ref().update(updates)
      },
      removeCollection: (context, collectionId) => {
          var updates = {}
          updates['/collections/' + context.getters.getUserId + '/' + collectionId] = null
          updates['/users/' + context.getters.getUserId + '/collections/' + collectionId] = null
          updates['/recipes/' + collectionId] = null

          Firebase.database().ref().update(updates)
      },
      setUserCollections: context => {
          var ref = Firebase.database().ref('/collections/' + context.getters.getUserId)
          
          var theList = []
          ref.on("value", function(data) {

              theList.splice(0,theList.length)
              data.forEach(function(data) {
                  var item = {
                      key: data.key,
                      name: data.val().name
                  }
                  theList.push(item)
              })
          })

          context.commit('setUserCollections',theList)
      },
      //Adds recipe to collection
      addToCollection: (context, collectionAndRecipe) => {
          var newRecipeKey = Firebase.database().ref().child('recipes').push().key

          var collectionId = collectionAndRecipe.collectionId
          var recipe = collectionAndRecipe.recipe

          var updates = {}
          //TODO: Change hard coded collection ID to a variable received from parameter.
          updates['/recipes/' + collectionId + '/' + newRecipeKey] = recipe
          updates['/collections/' + context.getters.getUserId + '/' + collectionId + '/recipes/' + newRecipeKey] = true

          Firebase.database().ref().update(updates)
      },
      //Removes recipe from collection
      removeFromCollection: (context, collectionAndRecipe) => {
          var collectionId = collectionAndRecipe.collectionId
          var recipeId = collectionAndRecipe.recipeId

          var updates = {}
          updates['/recipes/' + collectionId + '/' + recipeId] = null
          updates['/collections/' + context.getters.getUserId + '/' + collectionId + '/recipes/' + recipeId] = null

          Firebase.database().ref().update(updates)
      }
  }
});
