<template>
  <GeneralCard :qid="researcher.id" :image-link="researcher.picture">
    <div class="grid gap-0">
      <nuxt-link
        :to="`/search/${researcher.id}`"
        class="text-xl md:text-2xl text-brightpurple font-bold simple-link"
      >
        {{ researcher.name }} - {{ researcher.id }}
      </nuxt-link>
      <span
        v-for="(affi, affiIndex) in researcher.affiliationLabel"
        :key="researcher.affiliation[affiIndex]"
        class="flex"
      >
        <p class="pr-1">
          {{
            researcher.affiliationRole ? researcher.affiliationRole : 'membro'
          }}
          no
        </p>
        <nuxt-link
          :to="`/institution/${researcher.affiliation[affiIndex]}`"
          class="text-sm md:text-base simple-link"
          >{{ affi }}</nuxt-link
        >
      </span>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-3 md:gap-2">
      <span v-if="researcher.orcid" title="Orcid">
        <i class="fa-brands fa-orcid icon-style"></i>
        <a
          :href="`https://orcid.org/${researcher.orcid}`"
          target="_blank"
          rel="noopener noreferrer"
          class="simple-link"
          >{{ researcher.orcid }}</a
        >
      </span>
      <span v-if="researcher.lattes" title="lattes" class="flex">
        <LattesIcon class="w-5 icon-style" />
        <a
          :href="`https://lattes.cnpq.br/${researcher.lattes}`"
          target="_blank"
          rel="noopener noreferrer"
          class="simple-link"
          >{{ researcher.lattes }}</a
        >
      </span>
    </div>
  </GeneralCard>
</template>

<script>
import GeneralCard from '@/components/utilities/GeneralCard.vue'
import LattesIcon from '@/components/Icons/LattesIcon.vue'

export default {
  components: {
    GeneralCard,
    LattesIcon,
  },
  props: {
    researcher: {
      type: Object,
      default: null,
    },
  },
}
</script>
