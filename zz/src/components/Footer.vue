<template>
<footer class="footer py-5 bg-dark">
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <p class="d-block">&copy; CSP {{ year }}. All Rights Reserved.</p>
      </div>
      <div class="col-sm-4">
        <h5>Categories</h5>
        <ul class="list-unstyled text-small">
          <li><router-link :to="{ name: 'results', params: {name: 'js' } }">PaaS</router-link></li>
          <li><router-link :to="{ name: 'results', params: {name: 'php' } }">IaaS</router-link></li>
          <li><router-link :to="{ name: 'results', params: {name: 'nodejs' } }">SaaS</router-link></li>
          <li><router-link :to="{ name: 'skillsDirectory' }">More..</router-link></li>
        </ul>
      </div>
      <div class="col-sm-4">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
        </ul>
      </div>
      <!-- <div class="col-sm-3">
        <h5>Get in Touch</h5>
        <ul class="list-unstyled text-small socials">
          <li><a href="https://www.facebook.com/devlyco/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.linkedin.com/company/devlyco/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://twitter.com/devlyco" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
          <li><a href="http://m.me/devlyco" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-messenger"></i></a></li>

        </ul>
        <p class="email"><a href="mailto:hello@devly.co"><i class="fas fa-at fa-fw mr-2"></i>hello@devly.co</a></p>
      </div> -->
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
