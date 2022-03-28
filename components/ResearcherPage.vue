<template>
  <div class="centerize">
    <section class="author-section rounded shadow-lg">
      <div class="w-1/2 md:w-11/12">
        <img
          :src="authorData.picture"
          :alt="`${authorData.id} profile picture`"
          class="rounded"
        />
      </div>
      <div class="grid justify-start gap-3">
        <div class="grid gap-0">
          <h1 class="text-xl md:text-2xl text-brightpurple font-bold">
            {{ authorData.name }} - {{ authorData.id }}
          </h1>
          <span class="flex flex-col md:flex-row gap-1">
            <p>
              {{
                authorData.affiliationRole
                  ? authorData.affiliationRole
                  : 'membro'
              }}
              no
            </p>
            <nuxt-link
              :to="`/institution/${authorData.affiliation}`"
              class="text-sm md:text-base simple-link"
              >{{ authorData.affiliationLabel }}</nuxt-link
            >
          </span>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-3 md:gap-2">
          <span v-if="authorData.orcid" title="Orcid">
            <i class="fa-brands fa-orcid icon-style"></i>
            <a
              :href="`https://orcid.org/${authorData.orcid}`"
              target="_blank"
              rel="noopener noreferrer"
              class="simple-link"
              >{{ authorData.orcid }}</a
            >
          </span>
          <span v-if="authorData.lattes" title="lattes" class="flex">
            <LattesIcon class="w-5 icon-style" />
            <a
              :href="`https://lattes.cnpq.br/${authorData.lattes}`"
              target="_blank"
              rel="noopener noreferrer"
              class="simple-link"
              >{{ authorData.lattes }}</a
            >
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
          <a
            :href="`https://wikidata.org/wiki/${authorData.id}`"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            <i class="fa-solid fa-barcode"></i>
            On Wikidata
          </a>
          <a
            :href="`https://scholia.toolforge.org/author/${authorData.id}`"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            <i class="fa-solid fa-newspaper"></i>
            On Scholia
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LattesIcon from '@/components/Icons/LattesIcon.vue'

import { getAuthor } from '@/lib/API.js'

export default {
  components: {
    LattesIcon,
  },
  props: {
    bioinformata: {
      type: String,
      default: 'Q90076935',
    },
  },
  data() {
    return {
      authorData: {},
    }
  },
  async fetch() {
    const authorData = await getAuthor()

    this.authorData = authorData
  },
}
</script>
