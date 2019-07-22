<template>
<div class="skills-container">
  <div class="row">
    <div class="col skills-list" v-for="skill in skills" :key="skill.name">
      <router-link :to="{ name: 'skillsResults', params: { name: skill.abbr }}">
        <h1 v-bind:style="{color:skill.color}" v-html="skill.logo"></h1>
        <p>{{ skill.name }}</p>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'skills-list',
  data () {
    return {
      skills: [
        {
          name: 'PHP',
          abbr: 'php',
          logo: '<i class="fab fa-php"></i>',
          color: '#777AAE'
        },
        {
          name: 'Node.js',
          abbr: 'nodejs',
          logo: '<i class="fab fa-node-js"></i>',
          color: '#76CC4B'
        },
        {
          name: 'React',
          abbr: 'react',
          logo: '<i class="fab fa-react"></i>',
          color: '#59D6E1'
        },
        {
          name: 'JavaScript',
          abbr: 'js',
          logo: '<i class="fab fa-js"></i>',
          color: '#F7DE4F'
        },
        {
          name: 'AWS',
          abbr: 'aws',
          logo: '<i class="fab fa-aws"></i>',
          color: '#FF9738'
        },
        {
          name: 'Vue.js',
          abbr: 'vuejs',
          logo: '<i class="fab fa-vuejs"></i>',
          color: '#21B786'
        }
      ]
    }
  },

  created: function () {
  },

  methods: {
  }
}
</script>
