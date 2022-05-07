<template>
  <InstitutionPage :institution-id="institution" />
</template>

<script>
export default {
  asyncData({ params }) {
    const institution = params.institution
    return { institution }
  },
}
</script>
