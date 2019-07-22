<template>
<div class="nav-container account-nav">
  <ul class="nav justify-content-center ul-acc">
    <li class="nav-item">
      <router-link :to="{ name: 'accountSettings' }" class="nav-link"><i class="fas fa-cog"></i> Settings</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'accountDeveloper' }" class="nav-link" v-if="developer"><i class="fas fa-code"></i> Developer</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'accountCompany' }" class="nav-link" v-if="hirer"><i class="fas fa-building"></i> Company</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      developer: false,
      hirer: false
    }
  },

  created () {
    this.developer = this.$store.state.member.userProfile.type === 'developer'
    this.hirer = this.$store.state.member.userProfile.type === 'hirer'
  },

  methods: {
  }
}
</script>
