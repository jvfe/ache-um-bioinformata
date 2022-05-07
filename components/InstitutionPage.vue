<template>
  <main class="my-10 text-center">
    <div class="centerize gap-12">
      <Loading
        v-if="$fetchState.pending"
        class="w-[64px] h-[64px] after:w-[64px] after:h-[64px]"
      />
      <InstitutionInfoHeader v-else :institution="institution" />
      <div class="grid grid-cols-2 gap-1">
        <Loading
          v-if="$fetchState.pending"
          class="w-[64px] h-[64px] after:w-[64px] after:h-[64px]"
        />
        <ResearcherCard
          v-for="researcher in researchers"
          v-else
          :key="researcher.id"
          :researcher="researcher"
          :affiliation="institution"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { getProgramsResearchers, getPrograms } from '@/lib/API'

import InstitutionInfoHeader from '@/components/InstitutionInfoHeader.vue'
import ResearcherCard from '@/components/ResearcherCard.vue'
import Loading from '@/components/utilities/Loading.vue'

export default {
  components: {
    ResearcherCard,
    InstitutionInfoHeader,
    Loading,
  },
  props: {
    institutionId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      institution: null,
      researchers: null,
    }
  },
  async fetch() {
    const programInfo = await getPrograms(this.institutionId)
    this.institution = programInfo[0]
    this.researchers = await getProgramsResearchers(this.institutionId)
  },
}
</script>
