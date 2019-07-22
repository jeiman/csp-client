<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>CSP</span>&nbsp;
        <span class="font-weight-light">Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <transition name="slide-fade">
      <!-- <router-view></router-view> -->
      <v-content>
        <router-view></router-view>
      </v-content>
    </transition>
    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
// @import 'vuetify/dist/vuetify.min.css';

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
