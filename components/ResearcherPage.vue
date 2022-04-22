<template>
  <div class="centerize">
    <ResearcherCard :researcher="authorData" />
  </div>
</template>

<script>
import ResearcherCard from '@/components/ResearcherCard.vue'

import { getAuthor } from '@/lib/API.js'

export default {
  components: {
    ResearcherCard,
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
