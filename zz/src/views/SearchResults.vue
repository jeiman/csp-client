<template>
<div class="container pt-5 section-mb170">
  <h4 class="search-results-count">
    <small class="text-muted">{{ resultsCount() }}</small>&nbsp;
    <!-- <small>{{ $route.params.name.charAt(0).toUpperCase() + $route.params.name.slice(1) }}</small>&nbsp; -->
    <small class="text-muted title">x found</small>
  </h4>
  <div class="row">
    <div class="col-md-3">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                PaaS
              </button>
            </h2>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              dsada
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                IaaS
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              233
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                SaaS
              </button>
            </h2>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              325342
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9">search results</div>
  </div>

  <!-- <div class="profile-wrapper card text-left" v-for="profile in profiles" :key="profile.id">
    <div class="row">
      <div class="col-lg-2 aligner">
        <img class="img-fluid profile-catalogue-picture" v-bind:src="profile.photo" alt="photo">
      </div>
      <div class="col">
        <div class="card-body ">
          <h4 class="card-title d-inline-block pd-right name" @click="guestCheck"><router-link :to="{ name: 'profile', params: { id: profile.id }}" v-bind:class="{disabled: guest }">{{ profile.name }}</router-link></h4>
          <br>
          <small class="text-muted title">{{ profile.title }}</small>
          <p class="card-text">{{ profile.bio.substring(0, 200) + '...' }}</p>
          <span class="d-inline-block skills-stack" v-for="skills in profile.mainSkills" :key="skills.name">
            {{ skills.name + ' ' + skills.years }} <span class="text-lowercase">years</span>
          </span>
        </div>
      </div>
      <div class="col col-lg-3">
        <div class="card-body profile-wrapper">
          <h4 class="card-title text-right">Job Status</h4>
          <p class="text-devly text-right title">{{ profile.jobStatus }}</p>
          <p class="text-right" @click="guestCheck"><router-link class="btn btn-success view-profile" v-bind:class="{disabled: guest }" :to="{ name: 'profile', params: { id: profile.id }}">View Profile</router-link></p>
          <p class="card-text text-right"><small class="text-muted">Updated: {{ formatDate(new Date(profile.lastUpdated)) }}</small></p>
        </div>
      </div>
    </div>
  </div> -->
</div>
</template>

<script>
import * as utils from '../lib/utils'

export default {
  data () {
    return {
      // guest: false,
      profiles: [
        {
          id: 1,
          name: 'Jeiman Jeya',
          title: 'Full Stack Web Developer',
          bio: 'A full stack web developer specialised in Vue.js and Node.js. Created of TRN. I like to work on interesting projects, and I try to perform my tasks with all responsibility. I like to seek the solutions of interesting unusual tasks. My goal is to increase my skills and achieve dsa',
          photo: 'https://avatars1.githubusercontent.com/u/3265758?s=460&v=4',
          email: 'jeiman.jeya@gmail.com',
          twitter: '@jeimanjeya',
          website: 'http://www.jjdsadasdsads.me/',
          public: true,
          mainSkills: [
            {
              name: 'JavaScript',
              years: 3
            },
            {
              name: 'Node.js',
              years: 2
            },
            {
              name: 'DevOps',
              years: 1
            },
            {
              name: 'PHP',
              years: 3
            }
          ],
          jobStatus: 'I am open for full-time opportunities',
          lastUpdated: '1995-12-17T03:24:00'
        },
        {
          id: 2,
          name: 'Manjunath Reddy',
          title: 'Backend Developer',
          bio: 'I\'m all about Erlang and Node.js these days.',
          photo: 'https://avatars0.githubusercontent.com/u/5035624?s=460&v=4',
          email: 'manju@gmail.com',
          // twitter: '@manju',
          website: 'http://www.manju.me/',
          public: true,
          skills: [
            {
              name: 'PHP',
              years: 3
            },
            {
              name: 'Erlang',
              years: 1
            },
            {
              name: 'Node.js',
              years: 2
            },
            {
              name: 'Laravel',
              years: 5
            }
          ],
          jobStatus: 'I am open for freelance projects',
          lastUpdated: '2010-08-07T03:24:00'
        },
        {
          id: 3,
          name: 'Sean',
          title: 'Front-End Developer',
          bio: 'I\'m all about Erlang and Node.js these days.',
          photo: 'https://intermountainhealthcare.org/-/media/images/modules/physician-directory/profile-placeholder.png',
          email: 'sean@gmail.com',
          twitter: '@sean',
          // website: 'http://www.seansss.me/',
          public: true,
          skills: [
            {
              name: 'Elixir',
              years: 8
            },
            {
              name: 'Haskell',
              years: 4
            },
            {
              name: 'Java',
              years: 5
            },
            {
              name: 'C',
              years: 3
            }
          ],
          jobStatus: 'I am open, but not looking',
          lastUpdated: '2018-04-20T03:24:00'
        },
        {
          id: 4,
          name: 'Sean',
          title: 'Front-End Developer',
          bio: 'I\'m all about Erlang and Node.js these days.',
          photo: 'https://intermountainhealthcare.org/-/media/images/modules/physician-directory/profile-placeholder.png',
          email: 'sean@gmail.com',
          twitter: '@sean',
          // website: 'http://www.seansss.me/',
          public: true,
          skills: [
            {
              name: 'Elixir',
              years: 8
            },
            {
              name: 'Haskell',
              years: 4
            },
            {
              name: 'Java',
              years: 5
            },
            {
              name: 'C',
              years: 3
            }
          ],
          jobStatus: 'Not looking for any gig',
          lastUpdated: '2018-04-20T03:24:00'
        },
        {
          id: 5,
          name: 'Seanssssss',
          title: 'Front-End Developer',
          bio: 'I\'m all about Erlang and Node.js these days.',
          photo: 'https://intermountainhealthcare.org/-/media/images/modules/physician-directory/profile-placeholder.png',
          email: 'sean@gmail.com',
          twitter: '@sean',
          // website: 'http://www.seansss.me/',
          public: true,
          skills: [
            {
              name: 'Elixir',
              years: 8
            },
            {
              name: 'Haskell',
              years: 4
            },
            {
              name: 'Java',
              years: 5
            },
            {
              name: 'C',
              years: 3
            }
          ],
          jobStatus: 'Not looking for any gig',
          lastUpdated: '2018-04-20T03:24:00'
        }
      ]
    }
  },

  created () {
    // this.guestCheck()
  },

  methods: {
    formatDate (date) {
      return utils.formatDate(date)
    },

    resultsCount () {
      return this.profiles.filter((value, index, array) => {
        return value.public === true
      }).length
    }

    // guestCheck () {
    //   if (utils.isEmpty(this.$store.state.member)) { // if VueX state is empty, which means the user is not logged in, indicate to him to register or login
    //     this.guest = true
    //     this.$notify({
    //       group: 'foo',
    //       title: '<i class="fas fa-exclamation fa-fw"></i>Attention',
    //       text: 'You need to be logged in or registered to use Devly. It will only take a couple of minutes <i class="far fa-grin-hearts"></i>',
    //       type: 'warn',
    //       duration: -1000
    //     })
    //     console.log('Gues user ')
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: #000;
}

.card-title {
  margin-bottom: .5rem;
}
</style>
