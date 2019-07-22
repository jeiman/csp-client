<template>
<nav class="navbar navbar-expand-md navbar-dark bg-devly the-nav position-sticky nav-index">
  <a class="navbar-brand" href="/">
  CSP
    <!-- <img class="navbar-img" src="../../src/assets/images/logo-outline.svg" alt="" width="27" height="27"> -->
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'skillsDirectory' }" class="nav-link white">Collections</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link :to="{ name: 'accountDeveloper' }" class="dropdown-item">Developer profile</router-link>
          <router-link :to="{ name: 'skillsDirectory' }" class="dropdown-item">Skills Directory</router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/#how-it-works">How it Works</a>
          <router-link :to="{ name: 'about' }" class="dropdown-item">About</router-link>
        </div>
      </li>
    </ul>
    <SearchBar />
    <ul class="navbar-nav ml-auto">
      <li v-if="user.authenticated" class="nav-item dropdown login-nav">
        <a class="nav-link dropdown-toggle white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img :src="avatar" alt="profile-photo-nav" width="26" height="26">{{ profile.userProfile.initials }}</a>
        <div class="dropdown-menu dropdown-login" aria-labelledby="navbarDropdown">
          <p class="dropdown-item disabled text-muted profile-name mb-0">{{ profile.userProfile.name }}</p>
          <p class="bg-warning px-2 py-2 font-weight-bold" v-if="profile.userProfile.verified === 0"><i class="fas fa-exclamation fa-fw"></i>Account not verified. Please check your email inbox</p>
          <router-link :to="{ name: 'accountSettings' }" class="dropdown-item"><i class="fas fa-cog fa-fw mr-2"></i>Account</router-link>
          <router-link :to="{ name: 'profile', params: {id: profile.userProfile.id } }" class="dropdown-item" v-if="profile.userProfile.type === 'developer'"><i class="fas fa-user fa-fw mr-2"></i>View your profile</router-link>
          <router-link :to="{ name: 'accountDeveloper' }" class="dropdown-item" v-if="developer"><i class="fas fa-code fa-fw mr-2"></i>Edit developer profile</router-link>
          <router-link :to="{ name: 'accountCompany' }" class="dropdown-item" v-if="hirer"><i class="fas fa-building fa-fw mr-2"></i>Edit company profile</router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/#how-it-works">How it Works</a>
          <router-link :to="{ name: 'skillsDirectory' }" class="dropdown-item">Skills Directory</router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item pointer" @click="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
      </li>
      <div class="d" v-else>
        <li class="nav-item">
          <router-link :to="{ name: 'register' }" class="nav-link register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link white">Login</router-link>
        </li>
      </div>

    </ul>
  </div>
</nav>
</template>

<script>
import Cookies from 'js-cookie'
import auth from '../lib/auth'
import * as utils from '../lib/utils'
import api from '../lib/axios'

import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'navigation',

  components: {
    SearchBar
  },

  data () {
    return {
      user: {
        authenticated: false
      },
      profile: {},
      avatar: '',
      // loggedIn: auth.loggedIn(),
      developer: false,
      hirer: false
    }
  },

  created () {
    this.loadProfile()

    api.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('accessToken')}`

    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  },

  methods: {
    loadProfile () {
      if (Cookies.get('idToken')) {
        this.profile = this.$store.state.member
        this.user.authenticated = this.profile.authStatus
        this.avatar = utils.getGravatarUrl(this.profile.userProfile.email, true)
        this.developer = this.profile.userProfile.type === 'developer'
        this.hirer = this.profile.userProfile.type === 'hirer'
      }
    },

    logout () {
      this.$store.dispatch('DELETE_AUTHENTICATED', 'false')
      auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
}

.d {
  display: inherit;
}
</style>
