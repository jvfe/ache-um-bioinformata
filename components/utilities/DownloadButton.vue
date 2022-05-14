<template>
  <button class="btn" @click="downloadData">
    <i class="fa-solid fa-download"></i>
    Baixar como CSV
  </button>
</template>

<script>
export default {
  props: {
    dataJson: {
      type: Array,
      default: () => [],
    },
    csvName: {
      type: String,
      default: 'data',
    },
  },
  computed: {
    dataCSV() {
      return this.$papa.unparse(this.dataJson)
    },
  },
  methods: {
    downloadData() {
      this.$papa.download(this.dataCSV, this.csvName)
    },
  },
}
</script>
