<template>
<div class="section-mb170">
  <section class="jumbotron hero">
    <div class="row">
      <div class="col-md text-center hero-brand-text mt-5">
        <h1 class="jumbotron-heading display-4 word-wrap">Cloud Service Provider Selection</h1>
        <p class="sub-header-hero">A tool to help you choose the right provider for your business needs</p>
        <router-link :to="{ name: 'register' }" v-if="showGuest" class="btn btn-devly xs-shadow mr-4">Novice user</router-link>
        <router-link :to="{ name: 'register2' }" v-if="showGuest" class="btn btn-devly xs-shadow">Experienced user</router-link>
      </div>
    </div>
  </section>
  <section class="section-home">
    <h2 class="text-center">Latest Developers</h2>
    <div class="container">
      <div class="Marquee">
        <div class="Marquee-content">
          <div class="Marquee-tag">1<br><img style="width:100px;height:auto;" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082014/js1_0.png"></div>
          <a href="http://www.google.com" class="Marquee-tag">2</a>
          <div class="Marquee-tag">3</div>
          <div class="Marquee-tag">4</div>
          <div class="Marquee-tag">5</div>
          <div class="Marquee-tag">6</div>
          <div class="Marquee-tag">7</div>
          <div class="Marquee-tag">8</div>
          <div class="Marquee-tag">9</div>
          <div class="Marquee-tag">10</div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import auth from '../lib/auth'
export default {
  name: 'homepage',
  data () {
    return {
      categories: {
        mobileDevelopment: ['Apple Developers', 'Android Developers', ' iOS Developer', 'React Native Developers', 'Xamarin Developers'],
        webDevelopment: ['Front End Developers', 'React Developers', 'AngularJS Developers', 'Node.js Developers', 'JavaScript Developers'],
        backend: ['PHP Developers ', 'WordPress Developers', 'Java Developers', 'Python Developers', 'Ruby on Rails Developers', 'Django Developers'],
        misc: ['Blockchain Developers', 'AWS Developers', 'UI UX Designer', 'Web Design', 'Sketch Designers'],
        showGuest: false
      }
    }
  },

  created () {
    this.hideElements()
  },

  methods: {
    hideElements () {
      if (auth.hideElements()) {
        this.showGuest = true
      } else {
        this.showGuest = false
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.btn-info, .btn-primary {
  background-color: #6C55FB;
  border-color: #6C55FB;
}

pre {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 15px;
}

ol {
  li {
    text-align: left;
    font: {
      size: 0.65em !important;
      family: 'PT Sans', 'sans-serif';
    }
  }
}

.row {
  margin: 40px 0;
}
</style>
