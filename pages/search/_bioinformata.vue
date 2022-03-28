<template>
  <div>
    <ResearcherPage :bioinformata="bioinformata" />
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const bioinformata = params.bioinformata
    return { bioinformata }
  },
}
</script>
