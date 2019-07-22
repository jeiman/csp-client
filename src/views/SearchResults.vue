<template>
<v-container>
  <v-layout pa-3 mb-2>
    <v-flex xs3 mr-2>
      <v-card>
        <v-card-text class="px-3">
          <v-expansion-panel
            v-model="panel"
            expand
          >
            <!-- <v-expansion-panel-content v-for="(services, i) in cloudcomputing" :key="i">
              <template v-slot:header>
                <div>{{services.name}} (2)</div>
              </template>
              <v-card>
                <v-card-text class="lighten-3">
                  <v-checkbox
                    v-for="(products, i) in services.products" :key="i"
                    v-model="checkbox"
                    :label="`${products.name}`"
                    color="purple"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content> -->

            <v-expansion-panel-content v-for="(cat, i) in solr.facet_counts.facet_fields.category" :key="`${Math.floor(Math.random() * 20)}-${i}`">
              <template v-slot:header>
                <div @click="fetchCategoriesFromSolr(i)">{{`${i} (${cat})`}}</div>
              </template>
              <!-- <p>dsada</p> -->
              <v-card>
                <v-card-text class="lighten-3" v-if="loadServices">
                  <v-checkbox
                    v-for="(products, index) in category.facet_counts.facet_fields.service_full_name" :key="`${Math.floor(Math.random() * 20)}-${index}`"

                    :label="`${index}`"
                    color="purple"
                  ></v-checkbox>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs9>
      <v-container grid-list-lg fluid>
        <v-layout row wrap>
          <v-flex
            v-for="(services, i) in cloudcomputing"
            :key="i"
            xs4
          >
            <v-card v-for="(product, index) in services.products"
            :key="index" style="margin-bottom: 20px;">
              <v-img
                src="https://cdn.iconscout.com/icon/free/png-256/amazon-26-225439.png"
                height="200px"
              >
              </v-img>

              <v-card-title primary-title>
                <div>
                  <div class="headline">{{product.name}}</div>
                  <span class="grey--text">{{product.description}}</span>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat>Share</v-btn>
                <v-btn flat color="purple">Explore</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="product.id = !product.id">
                  <v-icon>{{ product.id ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="product.id" v-if="product.otherInfo.length > 0">
                  This is where we will display the pricing structure and other info
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import * as utils from '../lib/utils'
import logger from '../lib/logger'
import axios from 'axios'

export default {
  data () {
    return {
      solr: {},
      category: {},
      newPayload: {},
      facetCounts: 0,
      loadServices: false,
      showExtraContent: false,
      checkbox: true,
      panel: [],
      sideColumnItems: 10,
      show: false,
      cloudcomputing: [
        {
          name: 'PaaS',
          products: [
            {
              id: 1,
              name: 'AWS SZ',
              description: 'What do i do ?',
              otherInfo: ['dsadsadasaa', 'dsadaddsadads']
            },
            {
              id: 2,
              name: 'AWS WS',
              description: 'What do i do ?',
              otherInfo: []
            },
            {
              id: 3,
              name: 'AWS AA',
              description: 'What do i do ?',
              otherInfo: ['dsadsadassas']
            }
          ]
        },
        {
          name: 'IaaS',
          products: [
            {
              id: 1,
              name: 'AWS What what',
              description: 'What do i do ?',
              otherInfo: ['Pricing']
            },
            {
              id: 2,
              name: 'GCP Compute',
              description: 'What do i do ?',
              otherInfo: []
            }
          ]
        }
      ]
      // panel: [true, true, true, true],
    }
  },

  created () {
    this.expandColumns()
    this.solrSearch()
  },

  methods: {
    formatDate (date) {
      return utils.formatDate(date)
    },

    solrSearch () {
      axios({
        method: 'get',
        url: 'http://dev.csp.com:8983/solr/csp/select?q=*%3A*&facet=true&facet.field=category&facet.field=service_full_name&json.nl=map',
        withCredentials: true
      })
        .then((response) => {
          const payload = response.data

          for (const doc in payload.response.docs) {
            // console.log('>>> ', payload.response.docs[doc]['category'])

            for (const cat in payload.facet_counts.facet_fields.category) {
              if (cat === payload.response.docs[doc]['category']) {
                // console.log('found!!!!', payload.facet_counts.facet_fields.category[cat])
                payload.response.docs[doc]['facetCount'] = payload.facet_counts.facet_fields.category[cat]
              }
            }
          }

          this.solr = payload
          console.log(this.solr)
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    },

    fetchCategoriesFromSolr (category, event) {
      const cat = encodeURI(category)
      axios({
        method: 'get',
        url: `http://dev.csp.com:8983/solr/csp/select?q=${cat}&facet=true&facet.field=category&facet.field=service_full_name&json.nl=map&rows=200&facet.mincount=1`
        // withCredentials: true
      })
        .then((response) => {
          const payload = response.data

          this.category = payload
          this.loadServices = true
          if (event) event.preventDefault()
          console.log('categorySolrSearch', this.category)
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    },

    expandColumns () {
      this.panel = [...Array(this.sideColumnItems).keys()].map(_ => true)
    },

    resultsCount () {
      return this.profiles.filter((value, index, array) => {
        return value.public === true
      }).length
    }
  }
}
</script>
