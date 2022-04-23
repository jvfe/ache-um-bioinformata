<template>
  <main class="full-main">
    <div class="grid place-items-center text-center md:w-3/4 grid-rows-2">
      <div class="mb-10">
        <h1 class="main-title">Ache um Bioinformata</h1>
        <h3 class="font-medium">
          Ou então procure uma
          <nuxt-link to="/institutions/" class="simple-link font-semibold"
            >instituição</nuxt-link
          >
          da nossa lista
        </h3>
      </div>
      <form
        method="get"
        class="flex flex-col gap-2 w-full md:w-3/4"
        @submit.prevent="submitName"
      >
        <label
          for="searchAutor"
          class="text-sm text-rick-black text-left font-semibold self-baseline"
          >Insira o nome de um bioinformata:</label
        >
        <Autocomplete
          v-model="selectedItem"
          placeholder="Nome de um bioinformata brasileiro"
          input-class="autocomplete"
          :data="list"
        />
        <input type="submit" value="Buscar" class="submit-btn" />
      </form>
    </div>
  </main>
</template>

<script>
import Autocomplete from '@/components/utilities/Autocomplete.vue'

export default {
  components: {
    Autocomplete,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'Amsterdam',
        },
        {
          id: 2,
          name: 'Berlin',
        },
        {
          id: 3,
          name: 'Istanbul',
        },
      ],
      selectedItemIds: [],
      selectedItem: null,
    }
  },
  methods: {
    selectedData(value) {
      this.selectedItem = value
    },
    submitName() {
      this.$router.push(`/search/${this.selectedItem}`)
    },
  },
}
</script>
