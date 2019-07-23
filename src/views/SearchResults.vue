<template>
<v-container>
  <v-layout pa-3 mb-2>
    <v-flex xs3 mr-2>
      <v-card>
        <v-card-text class="px-3">
          <v-expansion-panel
            v-model="panel"
            expand
            v-if="initialSolrResults.facet_counts"
          >

            <v-expansion-panel-content v-for="(cat, i) in initialSolrResults.facet_counts.facet_fields.category" :key="`${i}`">
              <template v-slot:header>
                <div>{{`${i} (${cat})`}}</div>
              </template>
              <v-card>
                <v-card-text class="lighten-3">
                  <!-- <v-checkbox
                    v-for="(products, index) in category.facet_counts.facet_fields.service_full_name" :key="`${Math.floor(Math.random() * 20)}-${index}`"

                    :label="`${index}`"
                    color="purple"
                  ></v-checkbox> -->
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs9>
      <!-- <v-data-iterator
        :items="initialSolrResults.response.docs"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        @update:pagination="updatePagination"
        row
        wrap
      >
        <template v-slot:item="props">
          <v-container grid-list-lg fluid>
            <v-layout row wrap>
              <v-flex xs4>
                <v-card style="margin-bottom: 20px;">
                  <v-img
                    src="https://cdn.iconscout.com/icon/free/png-256/amazon-26-225439.png"
                    height="200px"
                  >
                  </v-img>

                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{props.item.service_full_name}}</div>
                      <span class="grey--text">{{props.item.description}}</span>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <p>Region: {{ props.item.region || 'Unknown' }}</p>
                    <p>City: {{ props.item.city || 'Unknown' }}</p>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn flat>Share</v-btn>
                    <v-btn flat color="purple">Explore</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="props.item.id = !props.item.id">
                      <v-icon>{{ props.item.id ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-slide-y-transition>
                    <div v-show="!props.item.id" v-if="props.item.keywords.length > 0">
                      <v-card-title><h3>Benefits</h3></v-card-title>
                      <v-card-text>
                      {{ props.item.benefits }}
                    </v-card-text>
                    </div>

                  </v-slide-y-transition>
                </v-card>
              </v-flex>

            </v-layout>
          </v-container>
        </template>
      </v-data-iterator> -->

            <v-container grid-list-lg fluid>
        <v-layout row wrap>
          <v-flex v-for="(product, index) in initialSolrResults.response.docs" :key="index"  xs4>
            <v-card style="margin-bottom: 20px;">
              <v-img
                src="https://cdn.iconscout.com/icon/free/png-256/amazon-26-225439.png"
                height="200px"
              >
              </v-img>

              <v-card-title primary-title>
                <div>
                  <div class="headline">{{product.service_full_name}}</div>
                  <span class="grey--text">{{product.description}}</span>
                </div>
              </v-card-title>
              <v-card-text>
                <p>Region: {{ product.region || 'Unknown' }}</p>
                <p>City: {{ product.city || 'Unknown' }}</p>
              </v-card-text>

              <v-card-actions>
                <v-btn flat>Share</v-btn>
                <v-btn flat color="purple">Explore</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="product.id = !product.id">
                  <v-icon>{{ product.id ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <div v-show="!product.id" v-if="product.keywords.length > 0">
                  <v-card-title><h3>Benefits</h3></v-card-title>
                  <v-card-text>
                  {{ product.benefits }}
                </v-card-text>
                </div>

              </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      
      <div class="text-xs-center">
        <v-pagination
          v-model="pagination.page"
          :length="pages"
          @input="updatePagination"
        ></v-pagination>
      </div>
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
      // page: 0,
      totalPages: 0,
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        // page: 0,
        rowsPerPage: 10
      },
      da: [
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        }
      ],
      initialSolrResults: {},
      category: {},
      loadServices: false,
      showExtraContent: false,
      checkbox: true,
      panel: [],
      sideColumnItems: 10,
      show: false
    }
  },

  created () {
    this.expandColumns()
    this.initialSolrSearch()
  },

  computed: {
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.initialSolrResults.response.numFound / this.pagination.rowsPerPage) : 0
    }
  },

  methods: {
    updatePagination (pagination) {
      console.log('update:pagination', pagination)
      // if (pagination.page === 2) {
      //   this.show = true
      // }
      axios({
        method: 'get',
        url: `http://dev.csp.com:3000/solr/query?page=${pagination.page}`,
        // data: {page: pag}
        withCredentials: true
      })
        .then((response) => {
          const payload = response.data
          // for (const doc in payload.response.docs) {
          //   for (const cat in payload.facet_counts.facet_fields.category) {
          //     if (cat === payload.response.docs[doc]['category']) {
          //       payload.response.docs[doc]['facetCount'] = payload.facet_counts.facet_fields.category[cat]
          //     }
          //   }
          // }

          this.initialSolrResults = payload
          // this.pagination.page = pagination.page
          this.totalPages = payload.response.numFound / 10
          console.log('new paginations > ', this.initialSolrResults)
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    },

    initialSolrSearch () {
      axios({
        method: 'get',
        url: 'http://dev.csp.com:3000/solr/query?page=1',
        withCredentials: true
      })
        .then((response) => {
          const payload = response.data
          // for (const doc in payload.response.docs) {
          //   for (const cat in payload.facet_counts.facet_fields.category) {
          //     if (cat === payload.response.docs[doc]['category']) {
          //       payload.response.docs[doc]['facetCount'] = payload.facet_counts.facet_fields.category[cat]
          //     }
          //   }
          // }

          this.initialSolrResults = payload
          console.log(this.initialSolrResults)
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
