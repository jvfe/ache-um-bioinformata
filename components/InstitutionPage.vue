<template>
  <main class="my-10 text-center">
    <div class="centerize gap-12">
      <div class="centerize">
        <h1 class="main-title">{{ institution.label }}</h1>
        <p class="text-lg font-medium w-3/4">
          Programa na {{ institution.part_of }}
        </p>
        <span class="flex gap-2 text-lg font-medium">
          <a
            :href="`http://wikidata.org/wiki/${institution.id}`"
            target="_blank"
            rel="noopener noreferrer"
            class="simple-link"
            >{{ institution.id }}</a
          >
          -
          <a
            :href="institution.official_website"
            target="_blank"
            rel="noopener noreferrer"
            class="simple-link"
            >Site Oficial</a
          >
        </span>
      </div>
      <div class="grid grid-cols-2 gap-1">
        <ResearcherCard
          v-for="researcher in researchers"
          :key="researcher.id"
          :researcher="researcher"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ResearcherCard from '@/components/ResearcherCard.vue'

export default {
  components: {
    ResearcherCard,
  },
  data() {
    return {
      institution: {
        id: 'Q102292035',
        label: 'Graduate Interdisciplinary Program in Bioinformatics (USP)',
        part_of: 'University of São Paulo',
        official_website: 'https://www.ime.usp.br/pos-bioinformatica',
      },
      researchers: [
        {
          id: 'Q7508008',
          name: 'Sidarta Ribeiro',
          lattes: '0649912135067700',
          orcid: '0000-0001-9325-9545',
          picture:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sidarta_Ribeiro.jpg/220px-Sidarta_Ribeiro.jpg',
          affiliation: 'Q105627005',
          affiliationLabel: 'Graduate Program in Bioinformatics (UFRN)',
          affiliationRole: 'professor',
        },
        {
          id: 'Q7508008',
          name: 'Sidarta Ribeiro',
          lattes: '0649912135067700',
          orcid: '0000-0001-9325-9545',
          picture:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sidarta_Ribeiro.jpg/220px-Sidarta_Ribeiro.jpg',
          affiliation: 'Q105627005',
          affiliationLabel: 'Graduate Program in Bioinformatics (UFRN)',
          affiliationRole: 'professor',
        },
      ],
    }
  },
}
</script>
