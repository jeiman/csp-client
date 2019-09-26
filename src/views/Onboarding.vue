<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/cloud-coding.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
        <p class="subheading font-weight-regular mb-5">
          A tool to help you choose the right provider for your business needs
        </p>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Onboarding</h1>
        <div>
          <v-card
            class="d-flex justify-center mb-3"
            color="grey lighten-2"
            flat
            tile
          >
            <v-card
              class="pa-5"
              dense
              tile
              color="green darken-1"
            >
              <div class="headline white--text"><v-icon x-large color="white">mdi-account-heart</v-icon><br><br>New to cloud computing?</div>
              <span class="subtitle-2 white--text"><i>Coming soon</i></span>
            </v-card>
            <v-card
              class="pa-5"
              dense
              tile
              color="blue darken-3"
            >
              <div class="headline white--text"><router-link :to="{ name: 'results' }"><v-icon x-large color="white">mdi-cloud-braces</v-icon><br><br>Experienced cloud engineer?</router-link></div>
            </v-card>
          </v-card>
        </div>

        <!-- <v-btn color="indigo"><router-link :to="{ name: 'results' }">Search Results</router-link></v-btn>
        <v-btn color="teal"><router-link :to="{ name: 'comparison' }">Cloud Service Comparison</router-link></v-btn> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
</style>
