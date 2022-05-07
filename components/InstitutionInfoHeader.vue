<template>
  <div class="centerize">
    <h1 class="main-title">{{ institution.institution }}</h1>
    <p class="text-lg font-medium w-3/4">
      {{ institution.parentOrg }}
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
        v-if="institution.officialWebsite"
        :href="institution.officialWebsite"
        target="_blank"
        rel="noopener noreferrer"
        class="simple-link"
        >Site Oficial</a
      >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    institution: {
      type: Object,
      default: null,
    },
  },
}
</script>
