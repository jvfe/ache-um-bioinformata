<!--
Based on:
https://dev.to/jringeisen/building-a-custom-select-input-with-tailwind-and-vue-2dn1
-->
<template>
  <div class="relative w-full">
    <div class="flex items-center gap-2">
      <Loading
        v-if="loading"
        class="w-[10px] h-[10px] after:w-[10px] after:h-[10px]"
      />
      <input
        ref="input"
        :value="value"
        :placeholder="placeholder"
        tabindex="0"
        autofocus
        :class="inputClass"
        @input="handleInput"
      />
    </div>
    <span
      v-if="value"
      class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
      @click.prevent="reset()"
    >
      x
    </span>
    <div
      v-show="value && showOptions"
      :class="dropdownClass"
      tabindex="0"
      @click.self="handleSelf()"
      @focusout="showOptions = false"
    >
      <ul class="py-1">
        <li
          v-for="(item, index) in dataset"
          :key="index"
          class="px-3 py-2 cursor-pointer hover:bg-gray-200"
          @click="handleClick(item)"
        >
          <span class="flex items-center justify-between">
            <p>{{ item.qid.value }} - {{ item.itemLabel.value }}</p>
            <a
              :href="`https://www.wikidata.org/wiki/${item.qid.value}`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn text-xs"
              >See in Wikidata</a
            >
          </span>
        </li>
        <li v-if="!dataset.length" class="px-3 py-2 text-center">
          No Matching Results
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/utilities/Loading.vue'
import { searchResearcher } from '@/lib/API'

export default {
  components: {
    Loading,
  },
  props: {
    value: {
      type: String,
      required: false,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Enter text here.',
    },
    inputClass: {
      type: String,
      required: false,
      default:
        'border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:shadow-outline',
    },
    dropdownClass: {
      type: String,
      required: false,
      default:
        'absolute z-50 w-full max-h-full min-h-[10rem] bg-white border border-gray-300 mt-1 mh-48 overflow-hidden overflow-y-scroll rounded-md shadow-md text-left',
    },
  },

  data() {
    return {
      chosenOption: '',
      searchTerm: '',
      dataset: [],
      showOptions: false,
      loading: false,
    }
  },

  watch: {
    dataset() {
      if (this.dataset.length) {
        this.showOptions = true
      }
    },
  },

  methods: {
    reset() {
      this.$emit('input', '')
      this.chosenOption = ''
    },

    handleInput(evt) {
      this.$emit('input', evt.target.value)
      this.searchTerm = evt.target.value
      clearTimeout(this._timerId)
      this._timerId = setTimeout(() => {
        this.handleSearch(evt.target.value)
      }, 800)
    },

    async handleSearch(input) {
      if (input !== '') {
        this.loading = true
        this.dataset = await searchResearcher(input)
        this.loading = false
      }
    },

    handleClick(item) {
      this.$emit('input', item.itemLabel.value)
      this.$emit('chosen', item)
      this.chosenOption = item.qid.value
      this.showOptions = false
      this.$refs.input.focus()
    },
  },
}
</script>
