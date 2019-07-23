<template>
<v-container>
  <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card v-for="(item, i) in service" :key="i">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.service_full_name}}</h3>
              <div> {{ item.description }} </div>
              <div>Category: {{ item.category }}</div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange" :href="item.url" :>More info</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  <!-- <v-layout pa-3 mb-2> -->
    <div >
      dsadasdasdasd
    </div>
  <!-- </v-layout> -->
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'serviceDetail',
  data () {
    return {
      service: {}
    }
  },

  created () {
    this.fetch()
  },

  methods: {
    fetch () {
      axios({
        method: 'get',
        url: `http://dev.csp.com:3000/solr/query/id?id=${this.$route.params.id}`,
        withCredentials: true
      })
        .then((response) => {
          const payload = response.data
          this.service = payload.response.docs
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    },
  }

}
</script>

