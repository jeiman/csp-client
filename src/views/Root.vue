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
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Cloud Service Selection Tool
        </h1>
        <p class="subheading font-weight-regular">
          A tool to help you choose the right provider for your business needs
        </p>
        <v-btn color="indigo"><router-link :to="{ name: 'results' }">Search Results</router-link></v-btn>
        <v-btn color="teal"><router-link :to="{ name: 'comparison' }">Cloud Service Comparison</router-link></v-btn>
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
