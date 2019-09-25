<template>
<v-text-field
  v-model="model"
  :label="label"
  :hint="hint"
  :placeholder="placeholder"
  :shaped="shaped"
  :outlined="outlined"
  :rounded="rounded"
  :solo="solo"
  :single-line="singleLine"
  :filled="filled"
  :clearable="clearable"
  :persistent-hint="persistentHint"
  :loading="loading"
  :flat="flat"
  :counter="counterEn ? counter : false"
></v-text-field>
<!-- <form class="form-inline input-group input-group-nav" v-if="['root'].indexOf($route.name) < 0">
  <input type="search" class="form-control" placeholder="Search for cloud providers, services and products..." aria-label="Search for cloud" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-light" type="button">Search</button>
  </div>
</form> -->
</template>

<script>
export default {
  data () {
    return {
      model: '',
      label: 'Hey!',
      hint: 'Amazon S3, Anthos, Azure Bot Service, etc',
      placeholder: 'Search for cloud providers and services...',
      shaped: false,
      outlined: true,
      rounded: false,
      solo: true,
      singleLine: true,
      filled: false,
      clearable: true,
      persistentHint: true,
      loading: false,
      flat: false,
      counterEn: false,
      counter: 0

    }
  },

  methods: {

  }
}
</script>
