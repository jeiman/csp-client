<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{name: 'root'}">
          <div>
            <v-img
            :src="require('./assets/cloud-coding.svg')"
            contain
            height="24"
          ></v-img>
          </div>
          <div class="font-weight-light">CSP Project</div>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        color="yellow darken-3"
        href="https://aws.amazon.com/new/"
        target="_blank"
      >
        <span class="mr-2">Latest AWS News</span>
      </v-btn>

      <v-btn
        flat
        color="light-blue darken-3"
        href="https://cloud.google.com/blog/"
        target="_blank"
      >
        <span class="mr-2">Latest GCP News</span>
      </v-btn>

      <v-btn
        flat
        color="green darken-2"
        href="https://azure.microsoft.com/en-gb/blog/"
        target="_blank"
      >
        <span class="mr-2">Latest Azure News</span>
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
@import "./styles/style.scss";

a {
  text-decoration: none;
}
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
