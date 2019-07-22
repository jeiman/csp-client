<template>
<div id="loadings">
  <div v-for="loading in loadings" :key="loading.status" class="loading-container fa-3x" v-bind:class="{ 'bg-dark': loading.opaque }">
    <div class="caption">
      <i class="fas fa-cog fa-spin"></i>
      {{ loading.message }}<br>
      {{ loading.misc }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    getNotificationClass: function (notification) {
      return 'alert alert-' + notification.type
    }
  },

  props: ['loadings']
}
</script>
