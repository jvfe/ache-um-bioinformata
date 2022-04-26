<template>
  <div class="centerize">
    <ResearcherCard :researcher="authorData" />
  </div>
</template>

<script>
import ResearcherCard from '@/components/ResearcherCard.vue'

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
      authorData: {
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
    }
  },
}
</script>
