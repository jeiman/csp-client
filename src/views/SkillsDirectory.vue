<template>
<div class="pt-5 section-mb170">
  <div class="container">
    <h1 class="text-center mb-5">Skills Directory</h1>
    <div class="card margin-auto">
      <div v-if="networkError">
        <h1>There seems to be a network error. Kindly retry refreshing the page. If the problem persists, please contact an administrator.</h1>
      </div>
      <div class="card-body skills-dir-container" v-else>
        <div class="skills-dir-header"><span class="card-title">.</span></div>
        <ul class="list-unstyled">
          <li v-for="(altDot, altDotIndex) in directory.altDot" :key="altDotIndex"><router-link :to="{ name: 'skillsResults', params: {name: altDot.Slug } }">{{ altDot.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">A</span></div>
        <ul class="list-unstyled">
          <li v-for="(a, aIndex) in directory.A" :key="aIndex"><router-link :to="{ name: 'skillsResults', params: {name: a.Slug } }">{{ a.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">B</span></div>
        <ul class="list-unstyled">
          <li v-for="(b, bIndex) in directory.B" :key="bIndex"><router-link :to="{ name: 'skillsResults', params: {name: b.Slug } }">{{ b.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">C</span></div>
        <ul class="list-unstyled">
          <li v-for="(c, cIndex) in directory.C" :key="cIndex"><router-link :to="{ name: 'skillsResults', params: {name: c.Slug } }">{{ c.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">D</span></div>
        <ul class="list-unstyled">
          <li v-for="(d, dIndex) in directory.D" :key="dIndex"><router-link :to="{ name: 'skillsResults', params: {name: d.Slug } }">{{ d.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">E</span></div>
        <ul class="list-unstyled">
          <li v-for="(e, eIndex) in directory.E" :key="eIndex"><router-link :to="{ name: 'skillsResults', params: {name: e.Slug } }">{{ e.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">F</span></div>
        <ul class="list-unstyled">
          <li v-for="(f, fIndex) in directory.F" :key="fIndex"><router-link :to="{ name: 'skillsResults', params: {name: f.Slug } }">{{ f.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">G</span></div>
        <ul class="list-unstyled">
          <li v-for="(g, gIndex) in directory.G" :key="gIndex"><router-link :to="{ name: 'skillsResults', params: {name: g.Slug } }">{{ g.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">H</span></div>
        <ul class="list-unstyled">
          <li v-for="(h, hIndex) in directory.H" :key="hIndex"><router-link :to="{ name: 'skillsResults', params: {name: h.Slug } }">{{ h.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">I</span></div>
        <ul class="list-unstyled">
          <li v-for="(i, iIndex) in directory.I" :key="iIndex"><router-link :to="{ name: 'skillsResults', params: {name: i.Slug } }">{{ i.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">J</span></div>
        <ul class="list-unstyled">
          <li v-for="(j, jIndex) in directory.J" :key="jIndex"><router-link :to="{ name: 'skillsResults', params: {name: j.Slug } }">{{ j.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">K</span></div>
        <ul class="list-unstyled">
          <li v-for="(k, kIndex) in directory.K" :key="kIndex"><router-link :to="{ name: 'skillsResults', params: {name: k.Slug } }">{{ k.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">L</span></div>
        <ul class="list-unstyled">
          <li v-for="(l, lIndex) in directory.L" :key="lIndex"><router-link :to="{ name: 'skillsResults', params: {name: l.Slug } }">{{ l.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">M</span></div>
        <ul class="list-unstyled">
          <li v-for="(m, mIndex) in directory.M" :key="mIndex"><router-link :to="{ name: 'skillsResults', params: {name: m.Slug } }">{{ m.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">N</span></div>
        <ul class="list-unstyled">
          <li v-for="(n, nIndex) in directory.N" :key="nIndex"><router-link :to="{ name: 'skillsResults', params: {name: n.Slug } }">{{ n.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">O</span></div>
        <ul class="list-unstyled">
          <li v-for="(o, oIndex) in directory.O" :key="oIndex"><router-link :to="{ name: 'skillsResults', params: {name: o.Slug } }">{{ o.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">P</span></div>
        <ul class="list-unstyled">
          <li v-for="(p, pIndex) in directory.P" :key="pIndex"><router-link :to="{ name: 'skillsResults', params: {name: p.Slug } }">{{ p.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">Q</span></div>
        <ul class="list-unstyled">
          <li v-for="(q, qIndex) in directory.Q" :key="qIndex"><router-link :to="{ name: 'skillsResults', params: {name: q.Slug } }">{{ q.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">R</span></div>
        <ul class="list-unstyled">
          <li v-for="(r, rIndex) in directory.R" :key="rIndex"><router-link :to="{ name: 'skillsResults', params: {name: r.Slug } }">{{ r.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">S</span></div>
        <ul class="list-unstyled">
          <li v-for="(s, sIndex) in directory.S" :key="sIndex"><router-link :to="{ name: 'skillsResults', params: {name: s.Slug } }">{{ s.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">T</span></div>
        <ul class="list-unstyled">
          <li v-for="(t, tIndex) in directory.T" :key="tIndex"><router-link :to="{ name: 'skillsResults', params: {name: t.Slug } }">{{ t.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">U</span></div>
        <ul class="list-unstyled">
          <li v-for="(u, uIndex) in directory.U" :key="uIndex"><router-link :to="{ name: 'skillsResults', params: {name: u.Slug } }">{{ u.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">V</span></div>
        <ul class="list-unstyled">
          <li v-for="(v, vIndex) in directory.V" :key="vIndex"><router-link :to="{ name: 'skillsResults', params: {name: v.Slug } }">{{ v.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">W</span></div>
        <ul class="list-unstyled">
          <li v-for="(w, wIndex) in directory.W" :key="wIndex"><router-link :to="{ name: 'skillsResults', params: {name: w.Slug } }">{{ w.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">X</span></div>
        <ul class="list-unstyled">
          <li v-for="(x, xIndex) in directory.X" :key="xIndex"><router-link :to="{ name: 'skillsResults', params: {name: x.Slug } }">{{ x.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">Y</span></div>
        <ul class="list-unstyled">
          <li v-for="(y, yIndex) in directory.Y" :key="yIndex"><router-link :to="{ name: 'skillsResults', params: {name: y.Slug } }">{{ y.Name }}</router-link></li>
        </ul>
        <div class="skills-dir-header"><span class="card-title">Z</span></div>
        <ul class="list-unstyled">
          <li v-for="(z, zIndex) in directory.Z" :key="zIndex"><router-link :to="{ name: 'skillsResults', params: {name: z.Slug } }">{{ z.Name }}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import api from '../lib/axios'
import logger from '../lib/logger'
export default {
  name: 'skillsDirectory',
  data () {
    return {
      directory: {},
      networkError: false
    }
  },
  created () {
    this.fetchSkillsDirectory()
  },

  methods: {
    async fetchSkillsDirectory () {
      return api.get('/skills-directory')
        .then((response) => {
          const { directory } = response.data.data
          this.directory = directory
        })
        .catch((error) => {
          logger(`Error fetching skills directory: ${error}`, 'error')
          this.networkError = true
          if (error.response.status === 404) {
            this.profileDontExist = true
          }
        })
    }
  },

  components: {
  }
}
</script>
