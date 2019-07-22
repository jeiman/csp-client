<template>
<v-container>

</v-container>
<!-- <div class="section-mb170">
  <section class="jumbotron hero">
    <div class="row">
      <div class="col-md text-center hero-brand-text mt-5">
        <h1 class="jumbotron-heading display-4 word-wrap">Cloud Service Provider Selection</h1>
        <p class="sub-header-hero">A tool to help you choose the right provider for your business needs</p>
        <router-link :to="{ name: 'register' }" v-if="showGuest" class="btn btn-devly xs-shadow mr-4">Novice user</router-link>
        <router-link :to="{ name: 'results' }" v-if="showGuest" class="btn btn-devly xs-shadow">Experienced user</router-link>
      </div>
    </div>
  </section>
  <div>
    dkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsddkjsakdjaskdasjks djakdj<br>dksjadkjasdksajdkadj<br><br><br>dsadadsadsadsdasdasdsdadadsd
  </div>
</div> -->
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
