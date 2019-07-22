<template>
<form class="form-inline input-group input-group-nav" v-if="['root'].indexOf($route.name) < 0">
  <input type="search" class="form-control" placeholder="Search for developers skills, PHP, JS, React..." aria-label="Search for devs" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-light" type="button">Search</button>
  </div>
</form>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  methods: {

  }
}
</script>
