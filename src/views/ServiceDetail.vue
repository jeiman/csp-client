<template>
<v-container>
  <v-layout text-xs-center>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="require('../assets/service.jpeg')"
          aspect-ratio="2.95"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <v-img
              v-if="service.logo"
              class="d-block"
              style="margin: 0 auto;"
              :src="require(`../assets/cloud-provider-logos/${service.logo}`)"
              width="300"
              height="180"
              contain
            ></v-img>
            <h3 class="display-1 mb-2"><b>{{ service.service_full_name }}</b></h3>
            <div class="mb-4 title"> {{ service.description }} </div>
            <div class="headline">
              <b>Provider:</b> {{ service.provider }}
            </div>
            <div class="headline">
              <b>Category:</b> {{ service.category }}
            </div>
            <v-divider class="my-4"></v-divider>
            <div>
              <h1 class="display-1 my-3">Benefits</h1>
              <p>{{service.benefits}}</p>
            </div>
            <v-card-actions style="justify-content: center;">
              <v-btn color="orange">Share</v-btn>
              <v-btn color="info" :href="service.url">More info</v-btn>
            </v-card-actions>
          </div>
        </v-card-title>
        <v-divider class="mt-3"></v-divider>
        <v-container>
          <h1 class="display-1 mb-3">Pricing Breakdown</h1>
          <div v-if="service.pricing === undefined" class="title">There is no pricing data for this service.</div>
          <v-expansion-panel v-else>
            <v-expansion-panel-content
              v-for="(item, i) in service.pricing"
              :key="i"
            >
            <v-divider></v-divider>
              <template v-slot:header>
                <div class="text-uppercase title indigo--text">{{ `${item.region} ${item.city}` }}</div>
              </template>
              <v-card>
                <table class="ma-4">
                  <thead>
                    <tr>
                      <th class="text-left title mb-3">Description</th>
                      <th class="text-left title mb-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(price, j) in item.pricingValue" :key="j">
                      <td>{{ price.description }}</td>
                      <td>{{ price.price }}</td>
                    </tr>
                  </tbody>
                </table>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-container>
        <div class="my-3"></div>

      </v-card>
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <h1 class="display-2 my-5">Similar services</h1>
      <v-card>
        <v-container v-bind="{ [`grid-list-md`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
            >
              <v-card>
                <v-img
                  :src="require('../assets/service.jpeg')"
                  aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                  <h3 class="headline mb-0">Service {{n}}</h3>
                </v-card-title>

                <v-card-actions>
                  <v-btn color="orange">Share</v-btn>
                  <v-btn color="info">More info</v-btn>
                </v-card-actions>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'
import logger from '../lib/logger'
export default {
  name: 'serviceDetail',
  data () {
    return {
      service: {},
      pricing: [],
      benefits: ''
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
          const { data } = response.data
          this.service = data

          if (this.service.provider === 'AWS') {
            this.service.logo = 'aws.png'
          } else if (this.service.provider === 'GCP') {
            this.service.logo = 'gcp.png'
          } else {
            this.service.logo = 'azure.svg'
          }
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    }
  }

}
</script>
