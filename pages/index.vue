<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        cmsdrivenstatic
      </h1>
      <h2 class="subtitle">
        My majestic Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="js">

import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
@Component({
  components: { Logo },
  async asyncData ({ app: { contentful: { getSections } } }) {
    const sections = await getSections()
    return { sections }
  }
})
export default class Index extends Vue {}
</script>

<template>
  <main>
    <h1>Page Title</h1>
    <logo />
    <section v-for="section in sections" :key="section.title">
      <h1>{{ section.title }}</h1>
      <p>{{ section.paragraph }}</p>
    </section>
  </main>
</template>

<style scoped>
  main {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  main h1 {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 60px;
    color: #35495e;
    letter-spacing: 1px;
  }
  main section {
    margin-top: 20px;
  }
  main section h1 {
    font-size: 30px;
  }
  main section p {
    font-weight: 300;
    font-size: 21px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
