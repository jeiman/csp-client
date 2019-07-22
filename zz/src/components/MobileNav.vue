<template>
<div class="fixed-bottom bg-devly mobile-navs">
  <div class="row">
    <div class="col-3">
      <router-link :to="{ name: 'root' }">
        <i class="fas fa-home"></i>
        <p>Home</p>
      </router-link>
    </div>
    <div class="col-3">
      <router-link :to="{ name: 'skillsDirectory' }">
        <i class="fas fa-folder"></i>
        <p>Directory</p>
      </router-link>
    </div>
    <div class="col-3">
      <a href="/#search">
        <i class="fas fa-search"></i>
        <p>Search</p>
      </a>
    </div>
    <div class="col-3">
      <a href="/me">
        <i class="fas fa-user-circle"></i>
        <p>Me</p>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'mobileNav',
  components: {
  },

  data () {
    return {
    }
  },

  created () {
  },

  methods: {
  }
}
</script>
