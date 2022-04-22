<template>
  <section
    class="card rounded shadow-lg"
    :class="imageLink ? 'author-section' : null"
  >
    <div v-if="imageLink" class="w-1/2 md:w-11/12">
      <img :src="imageLink" :alt="`${qid} profile picture`" class="rounded" />
    </div>
    <div class="grid justify-start gap-3">
      <slot></slot>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
        <a
          :href="`https://wikidata.org/wiki/${qid}`"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <i class="fa-solid fa-barcode"></i>
          On Wikidata
        </a>
        <a
          :href="`https://scholia.toolforge.org/${qid}`"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <i class="fa-solid fa-newspaper"></i>
          On Scholia
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imageLink: {
      type: String,
      default: null,
    },
    qid: {
      type: String,
      default: 'Q42',
    },
  },
}
</script>
