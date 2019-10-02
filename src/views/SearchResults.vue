<template>
  <v-container>
    <v-layout pa-3 mb-2>
      <v-flex xs3 mr-2>
        <v-card>
          <v-card-text class="px-3">
            <v-expansion-panel
              v-model="panel"
              expand
              v-if="initialSolrResults"
            >

              <v-expansion-panel-content v-for="(facet, i) in facets" :key="`${i}`">
                <template v-slot:header>
                  <div>{{`${facet.value} (${facet.count})`}}</div>
                </template>
                <v-card>
                  <v-card-text class="lighten-3">
                    <v-checkbox
                      v-for="(services, index) in facet.pivot" :key="`${Math.floor(Math.random() * 20)}-${index}`"
                      :label="`${services.value}`"
                      color="orange"
                      @change="retrieveSpecificService(services.value)"
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
          <SearchBar />

          <div class="mb-3"></div>
          <button @click="initialSolrSearch">Load list again.</button>
          <v-layout row wrap v-if="initialSolrResults.response">
            <v-flex v-for="(product, index) in initialSolrResults.response.docs" :key="index"  xs3>
              <v-card style="margin-bottom: 20px;">
                <v-img
                  :src="require('../assets/provider.svg')"
                  height="150px"
                  aspect-ratio="2"
                  contain
                >
                </v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline"><router-link :to="{ name: 'serviceDetail', params: { id: product.id } }">{{product.service_full_name}}</router-link></div>
                    <span class="grey--text">{{product.description}}</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat color="deep-orange">Share</v-btn>
                  <v-btn flat color="indigo">Explore</v-btn>
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
import logger from '../lib/logger'
import axios from 'axios'
import configFile from '../../config'

import SearchBar from '@/components/SearchBar.vue'

const apiUrl = process.env.NODE_ENV === 'development' ? configFile.dev.serviceUrl : configFile.build.serviceUrl

export default {
  data () {
    return {
      facets: {},
      totalPages: 0,
      // rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 10
      },
      initialSolrResults: {},
      checkbox: false,
      panel: [],
      sideColumnItems: 38,
      show: false
    }
  },

  components: {
    SearchBar
  },

  created () {
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
      axios({
        method: 'get',
        url: `${apiUrl}/solr/query?page=${pagination}`,
        withCredentials: true
      })
        .then((response) => {
          const payload = response.data
          this.initialSolrResults = payload
          // this.pagination.page = pagination.page
          this.totalPages = payload.response.numFound / 10
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    },

    retrieveSpecificService (serviceFullName) {
      axios({
        method: 'get',
        url: `${apiUrl}/solr/query/service_full_name?service_full_name=${serviceFullName}`,
        withCredentials: true
      })
        .then((response) => {
          const payload = response.data

          this.initialSolrResults = payload
          console.log('>>>> ', this.initialSolrResults.response)
        })
        .catch((error) => {
          logger(`Error fetching data from Solr: ${error}`, 'error')
        })
    },

    async initialSolrSearch () {
      console.log('loading....')

      const axiosQuery = () => axios.get(`${apiUrl}/solr/query?page=1&rows=10`)
      const { data } = await axiosQuery()

      this.initialSolrResults = data

      for (const val in data.facet_counts.facet_pivot) {
        this.facets = data.facet_counts.facet_pivot[val]
      }
      console.log('end loading...')
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
