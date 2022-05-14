<template>
  <main class="my-10 text-center">
    <div class="centerize gap-12">
      <div class="centerize gap-3">
        <h1 class="main-title">Instituições & Programas</h1>
        <p class="text-medium w-3/4">
          Lista de instituições e programas de pós-graduação brasileiros da área
          de bioinformática
        </p>
        <DownloadButton
          v-if="$fetchState.pending == false"
          :data-json="institutions"
          csv-name="institutions"
        />
      </div>
      <div class="grid grid-cols-2 gap-1">
        <Loading
          v-if="$fetchState.pending"
          class="w-[64px] h-[64px] after:w-[64px] after:h-[64px]"
        />
        <ErrorElement v-else-if="$fetchState.error" />
        <InstitutionCard
          v-for="institution in institutions"
          v-else
          :key="institution.id"
          :institution="institution"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { getPrograms } from '@/lib/API'

import InstitutionCard from '@/components/InstitutionCard.vue'
import Loading from '@/components/utilities/Loading.vue'
import ErrorElement from '@/components/utilities/ErrorElement.vue'
import DownloadButton from '@/components/utilities/DownloadButton.vue'

export default {
  components: {
    InstitutionCard,
    Loading,
    ErrorElement,
    DownloadButton,
  },
  data() {
    return {
      institutions: [],
    }
  },
  async fetch() {
    this.institutions = await getPrograms()
  },
}
</script>
