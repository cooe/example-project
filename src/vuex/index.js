/**
 *User：Conan
 *Date：2018/1/29
 ***/
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters';
import account from './modules/account';

Vue.use(vuex);

const store = new Vuex.Store({
  modules:{
    account
  },
  getters
});

export default store;
