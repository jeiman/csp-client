<template>
<div id="notifications">
  <div v-for="notification in notifications" :class="getNotificationClass(notification)" :key="notification.message" class="position-sticky">{{ notification.message }}</div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    getNotificationClass (notification) {
      return `alert alert-${notification.type}`
    }
  },

  props: ['notifications']
}
</script>
