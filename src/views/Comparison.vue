<template>
<v-container>
  <v-layout pa-3 mb-2>
    <v-flex xs3 mr-2 style="position:sticky;">
      <v-card class="px-4">
        <div class="mb-4"></div>
          <v-card-text>
            <h2>Customize service pricing</h2>
          </v-card-text>
          <v-divider></v-divider>
          <v-subheader>Storage size</v-subheader>
          <v-card-text style="padding-top: 0px;">
            <v-row
              class="mb-4"
              name="row"
              justify="space-between"
            >

              <v-col name="vol" class="text-left">
                <span
                  class="display-3 font-weight-light"
                  v-text="size"
                ></span>
                <span class="subheading font-weight-light mr-1">GB</span>
              </v-col>
            </v-row>

            <v-slider
              v-model="size"
              color="indigo darken-2"
              always-dirty
              min="0"
              max="918"
            >
              <template v-slot:prepend>
                <v-icon
                  @click="decrement"
                >
                  mdi-minus
                </v-icon>
              </template>

              <template v-slot:append>
                <v-icon
                  @click="increment"
                >
                  mdi-plus
                </v-icon>
              </template>
            </v-slider>
          </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs9>
      <v-container grid-list-lg fluid>
        <SearchBar />
        <div class="mb-3"></div>
        <div class="mb-5"></div>
        <div class="my-5 text-center">
          <h1>Cloud Service Comparison</h1>
        </div>
        <span>All prices are from the US-West 2 region.</span>
        <v-layout row wrap>
          <v-flex v-for="(service, index) in services.storage" :key="index"  xs3>
            <v-card style="text-align: center;" class="pt-4">
              <v-avatar>
                <img :src="service.logo" alt="avatar">
              </v-avatar>
              <!-- <v-img
                :src="service.logo"
                height="90px"
                aspect-ratio="2"
                contain
              >
              </v-img> -->

              <v-card-title primary-title>
                <div>
                  <div class="headline">{{service.name}}</div>
                  <span class="grey--text">{{service.description}}</span>
                </div>
              </v-card-title>
              <v-card-text>
                <h4><b>Pricing Description:</b></h4> {{ service.pricing.description }}
                <h3><b>Pricing Value:</b></h3> {{ service.pricing.currency + service.pricing.value + ' per GB per Month' }}
              </v-card-text>
              <v-card-text style="display:none;">
                New pricing: {{ calculateNewPricing }}
              </v-card-text>

              <v-alert
                  v-if="service.pricing.bestservice"
                  border="right"
                  color="light-blue darken-3"
                  style="display:block;margin:0px;"
                >
                  <div class="title">{{ service.pricing.bestservice }}</div>
                </v-alert>

              <!-- <v-card-actions v-if="service.pricing.bestservice">

                <v-btn style="margin: 0 auto;" depressed color="primary">{{ service.pricing.bestservice }}</v-btn>
                <div class="mb-3"></div>
              </v-card-actions> -->

              <v-divider></v-divider>

              <v-card-text class="blue-grey darken-2" style="color:#fff;">
                <h4 class="subtitle-1">User customised pricing: </h4>
                <div class="mb-2"></div>
                <div class="title" style="margin: 0 auto;">{{ `${service.pricing.currency}${service.pricing.newPricingValue} per Month` }}</div>
              </v-card-text>
              <!-- <v-card-text class="blue-grey darken-1">
                <h3 style="margin: 0 auto;">{{ `New pricing: ${service.pricing.currency}${service.pricing.newPricingValue} per Month` }}</h3>
              </v-card-text> -->
              <!-- <v-card-actions>
                <h3 style="margin: 0 auto;">{{ `New pricing: ${service.pricing.currency}${service.pricing.newPricingValue} per Month` }}</h3>
              </v-card-actions> -->
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>

import SearchBar from '@/components/SearchBar.vue'

export default {
  data () {
    return {
      bestservice: true,
      size: 0,
      services: {
        storage: [
          {
            name: 'Amazon S3',
            logo: 'https://raw.githubusercontent.com/ilyas-it83/CloudComparer/master/img/cloudproviders/aws/Storage-Content-Delivery_AmazonS3.png',
            provider: 'Amazon Web Services',
            description: 'Object storage built to store and retrieve any amount of data from anywhere',
            pricing: {
              description: 'S3 Standard Storage',
              currency: '$',
              value: '0.023',
              bestservice: '',
              newPricingValue: ''
            }
          },
          {
            name: 'Google Cloud Storage',
            logo: 'https://raw.githubusercontent.com/ilyas-it83/CloudComparer/master/img/cloudproviders/gcp/Cloud-Storage.png',
            provider: 'Google Cloud Platform',
            description: 'Unified object storage for developers and enterprises',
            pricing: {
              description: 'Standard Storage',
              currency: '$',
              value: '0.023',
              bestservice: '',
              newPricingValue: ''
            }
          },
          {
            name: 'Azure Block Blobs',
            logo: 'https://raw.githubusercontent.com/ilyas-it83/CloudComparer/master/img/cloudproviders/azure/Azure%20Storage%20-%20Blob.png',
            provider: 'Microsoft Azure',
            description: 'Massively scalable object storage for unstructured data',
            pricing: {
              description: 'Block Blob Storage',
              currency: '$',
              value: '0.015',
              bestservice: '',
              newPricingValue: ''
            }
          }
        ]
      }
    }
  },

  computed: {
    calculateNewPricing () {
      return this.services.storage.map((x) => {
        const newPrice = x.pricing.value * this.size
        x.pricing.newPricingValue = newPrice.toFixed(3)
        return x.pricing.newPricingValue
      })
    }
  },

  components: {
    SearchBar
  },

  created () {
    this.getMinValue()
  },

  methods: {
    decrement () {
      this.size--
    },

    increment () {
      this.size++
    },

    getMinValue () {
      const lowestPrice = this.services.storage.reduce((min, p) => p.pricing.value < min ? p.pricing.value : min, this.services.storage[0].pricing.value)
      this.services.storage.map((x) => {
        const text = x.pricing.value === lowestPrice ? 'Lowest Price' : ''
        x.pricing.bestservice = text
        return x.pricing.bestservice
      })
    }
  }
}
</script>
