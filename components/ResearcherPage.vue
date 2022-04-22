<template>
  <div class="centerize">
    <GeneralCard :image-link="authorData.picture" :qid="authorData.id">
      <div class="grid gap-0">
        <h1 class="text-xl md:text-2xl text-brightpurple font-bold">
          {{ authorData.name }} - {{ authorData.id }}
        </h1>
        <span class="flex flex-col md:flex-row gap-1">
          <p>
            {{
              authorData.affiliationRole ? authorData.affiliationRole : 'membro'
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
    </GeneralCard>
  </div>
</template>

<script>
import GeneralCard from '@/components/utilities/GeneralCard.vue'
import LattesIcon from '@/components/Icons/LattesIcon.vue'

import { getAuthor } from '@/lib/API.js'

export default {
  components: {
    GeneralCard,
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
