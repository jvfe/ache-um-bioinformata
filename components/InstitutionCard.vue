<template>
  <GeneralCard :qid="institution.id">
    <div class="grid gap-0">
      <nuxt-link
        :to="`/institution/${institution.id}`"
        class="text-xl md:text-2xl text-brightpurple font-bold simple-link"
      >
        {{ institution.institution }} - {{ institution.id }}
      </nuxt-link>
      <span class="flex flex-col gap-1">
        <p>
          {{ institution.parentOrg }}
        </p>
        <a
          v-if="institution.officialWebsite"
          :href="institution.officialWebsite"
          target="_blank"
          rel="noopener noreferrer"
          class="simple-link"
          >Site Oficial</a
        >
      </span>
    </div>
  </GeneralCard>
</template>

<script>
import GeneralCard from '@/components/utilities/GeneralCard.vue'
export default {
  components: {
    GeneralCard,
  },
  props: {
    institution: {
      type: Object,
      default: null,
    },
  },
}
</script>
