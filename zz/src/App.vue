<template>
  <div class="csp">
    <navigation></navigation>
    <!-- <skills-picker v-if="['root', 'login', 'gettingStarted', 'accountSettings', 'accountDeveloper', 'accountCompany', 'me'].indexOf($route.name) < 0"></skills-picker> -->
    <!-- <account-nav v-if="['accountSettings', 'accountDeveloper', 'accountCompany'].indexOf($route.name) >= 0"></account-nav> -->
    <notifications group="foo" position="bottom center" />
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <mobile-nav v-if="mobileNav"></mobile-nav>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import SkillsPicker from '@/components/SkillsPicker.vue'
// import AccountNav from '@/components/AccountNav.vue'
import MobileNav from '@/components/MobileNav.vue'

import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

import api from './lib/axios'
import auth from './lib/auth'
import * as md from './lib/mobile'

export default {
  name: 'app',
  components: {
    Navigation,
    Footer,
    SkillsPicker,
    MobileNav
  },
  data () {
    return {
      mobileNav: false,
      desktopNav: false,
      profile: {},
      user: {
        authenticated: false,
        showModal: false
      },
      itemsToHide: [
        'gettingStarted',
        'me'
      ],
      hideElements: true
    }
  },

  created () {
    this.hideNavFooter()
    this.loadProfile()
    this.loadMobileNav()

    api.interceptors.response.use(undefined, (err) => {
      return new Promise((resolve, reject) => {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          auth.logout()
        }
        throw err
      })
    })
  },

  methods: {
    loadMobileNav () {
      if (md.detect()) {
        this.mobileNav = true
        this.desktopNav = false
      } else {
        this.mobileNav = false
        this.desktopNav = true
      }
    },

    hideNavFooter () {
      if (this.itemsToHide.includes(this.$route.name)) {
        this.hideElements = false
      } else {
        this.hideElements = true
      }
    },

    loadProfile () {
      const IdToken = Cookies.get('idToken')
      if (IdToken !== undefined) {
        const decodedToken = jwtDecode(IdToken)
        this.$store.dispatch('STORE_AUTHENTICATED', decodedToken)
        this.profile = this.$store.state.member
        this.user.authenticated = this.profile.authStatus
        api.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('idToken')}`
      } else {
        this.user.authenticated = false
      }
    }
  }
}
</script>

<style lang="scss">
// Loads the entire SASS structure
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import "./styles/style.scss";

.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
