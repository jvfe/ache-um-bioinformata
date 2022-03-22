<template>
  <footer
    class="flex items-center justify-between w-full px-2 shadow-top bg-linen bg-opacity-30"
  >
    <div>
      <a href="https://github.com/jvfe/ache-um-bioinformata" target="_blank">
        <i
          class="fa-brands fa-github fa-lg text-rich-black hover:opacity-70 transition-all"
        ></i
      ></a>
    </div>
    <div class="flex w-72 gap-2">
      <a
        href="http://wikidata.org"
        target="_blank"
        rel="noopener noreferrer"
        class="grid place-items-center"
        ><PoweredWikidata
      /></a>
      <a
        href="http://shuttleworthfoundation.org"
        target="_blank"
        rel="noopener noreferrer"
        ><ShuttleworthFunded
      /></a>
    </div>
  </footer>
</template>

<script>
import PoweredWikidata from '@/components/Icons/PoweredWikidata.vue'
import ShuttleworthFunded from '@/components/Icons/ShuttleworthFunded.vue'

export default {
  components: {
    PoweredWikidata,
    ShuttleworthFunded,
  },
}
</script>
