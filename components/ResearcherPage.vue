<template>
  <div class="centerize">
    <Loading
      v-if="$fetchState.pending"
      class="w-[64px] h-[64px] after:w-[64px] after:h-[64px]"
    />
    <ErrorElement v-else-if="$fetchState.error" />
    <ResearcherCard v-else :researcher="authorData" />
  </div>
</template>

<script>
import { getResearcherInfo } from '@/lib/API'
import ResearcherCard from '@/components/ResearcherCard.vue'
import Loading from '@/components/utilities/Loading.vue'
import ErrorElement from '@/components/utilities/ErrorElement.vue'

export default {
  components: {
    ResearcherCard,
    Loading,
    ErrorElement,
  },
  props: {
    bioinformata: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      authorData: null,
    }
  },
  async fetch() {
    const dataset = await getResearcherInfo(this.bioinformata)
    this.authorData = dataset
  },
}
</script>
