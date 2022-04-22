<template>
  <main class="my-10 text-center">
    <div class="centerize gap-12">
      <div class="centerize">
        <h1 class="main-title">Instituições & Programas</h1>
        <p class="text-medium w-3/4">
          Lista de instituições e programas de pós-graduação brasileiros da área
          de bioinformática
        </p>
      </div>
      <div class="grid grid-cols-2 gap-1">
        <InstitutionCard
          v-for="institution in institutions"
          :key="institution.id"
          :institution="institution"
        />
      </div>
    </div>
  </main>
</template>

<script>
import InstitutionCard from '@/components/InstitutionCard.vue'

export default {
  components: {
    InstitutionCard,
  },
  data() {
    return {
      institutions: [
        {
          id: 'Q102292035',
          label: 'Graduate Interdisciplinary Program in Bioinformatics (USP)',
          part_of: 'University of São Paulo',
          official_website: 'https://www.ime.usp.br/pos-bioinformatica',
        },
        {
          id: 'Q105627005',
          label: 'Graduate Program in Bioinformatics (UFRN)',
          part_of: 'Federal University of Rio Grande do Norte',
          official_website:
            'https://sigaa.ufrn.br/sigaa/public/programa/apresentacao.jsf?lc=pt_BR&id=9814',
        },
      ],
    }
  },
}
</script>
