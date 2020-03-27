<script lang="js">

import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
@Component({
  components: { Logo },
  async asyncData ({ app: { contentful: { getSection } }, params: { page } }) {
    const section = await getSection(page)
    return { section }
  }
})
export default class Index extends Vue {}
</script>

<template>
  <main>
    <h1>Page Title</h1>
    <logo />
    <section>
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
