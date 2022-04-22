<template>
  <GeneralCard :qid="institution.id">
    <div class="grid gap-0">
      <nuxt-link
        :to="`/institution/${institution.id}`"
        class="text-xl md:text-2xl text-brightpurple font-bold simple-link"
      >
        {{ institution.label }} - {{ institution.id }}
      </nuxt-link>
      <span class="flex flex-col gap-1">
        <p>
          Programa na
          {{ institution.part_of }}
        </p>
        <a
          :href="institution.official_website"
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
