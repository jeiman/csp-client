<template>
<div class="container py-5 section-mb170 text-center nopage-wrapper" id="404page">
  <img src="../assets/images/robot.svg">
  <h1><b>You:</b><i>*gasp*</i> I found a 404 page!</h1>
  <h1><b>Devlybot:</b>That's the Universe's way of saying "go outside".</h1><br>
  <h3>Redirecting you shortly to the outside world...</h3>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    this.redirectUser()
  },

  methods: {
    redirectUser () {
      setTimeout(() => {
        this.$router.push({ name: 'root' })
      }, 5200)
    }
  }
}
</script>
