<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-for="(item, i) in service" :key="i">
        <v-img
          src="https://miro.medium.com/max/1200/1*N4ZpKOX8bxgUFOC4y7MWKQ.jpeg"
          aspect-ratio="2.95"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="display-1 mb-0">{{item.service_full_name}}</h3>
            <div class="mb-4 title"> {{ item.description }} </div>
            <div class="headline"><b>Provider:</b> {{ item.provider }}</div>
            <div class="headline"><b>Category:</b> {{ item.category }}</div>
            <!-- <div class="headline"><b>Region:</b> {{ item.region }} &bull; <b>City:</b> {{ item.city }}</div> -->
            <v-divider class="my-3"></v-divider>
            <div class="my-3">
              <h1 class="display-1">Benefits</h1>
              <p>{{item.benefits}}</p>
            </div>
          </div>
        </v-card-title>

        <!-- <v-card-text>

        <div class="my-3">
          <h1 class="display-1">Pricing Breakdown</h1>
          <table>
            <thead>
              <tr>
                <th class="text-left">Description</th>
                <th class="text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pricing" :key="index">
                <td>{{ item.description }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </v-card-text> -->

        <v-card-actions>
          <v-btn color="orange">Share</v-btn>
          <v-btn color="info" :href="item.url">More info</v-btn>
        </v-card-actions>
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
                  src="https://miro.medium.com/max/1200/1*N4ZpKOX8bxgUFOC4y7MWKQ.jpeg"
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
          const payload = response.data
          this.service = payload.response.docs

          const priceArray = this.service.map(x => {
            return JSON.parse(x.pricing)
          })

          let newPriceArray = []

          for (const val in priceArray) {
            for (const priceDetail in priceArray[val]) {
              const obj = {}
              // console.log('price description > ', priceDetail)
              // console.log('price object > ', priceArray[val][priceDetail])
              obj.description = priceDetail
              obj.price = priceArray[val][priceDetail]['price']

              newPriceArray.push(obj)
            }
            this.pricing = newPriceArray
          }
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    }
  }

}
</script>
