<!--
Based on:
https://dev.to/jringeisen/building-a-custom-select-input-with-tailwind-and-vue-2dn1
-->
<template>
  <div class="relative w-full">
    <input
      ref="input"
      :value="value"
      :placeholder="placeholder"
      tabindex="0"
      autofocus
      :class="inputClass"
      @input="handleInput"
    />
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
          v-for="(item, index) in searchResults"
          :key="index"
          class="px-3 py-2 cursor-pointer hover:bg-gray-200"
          @click="handleClick(item)"
        >
          {{ item.name }}
        </li>
        <li v-if="!searchResults.length" class="px-3 py-2 text-center">
          No Matching Results
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
    data: {
      type: Array,
      required: true,
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
        'absolute w-full z-50 bg-white border border-gray-300 mt-1 mh-48 overflow-hidden overflow-y-scroll rounded-md shadow-md',
    },
  },

  data() {
    return {
      showOptions: false,
      chosenOption: '',
      searchTerm: '',
    }
  },

  computed: {
    searchResults() {
      return this.data.filter((item) => {
        return item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
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
      this.showOptions = true
    },

    handleClick(item) {
      this.$emit('input', item.name)
      this.$emit('chosen', item)
      this.chosenOption = item.name
      this.showOptions = false
      this.$refs.input.focus()
    },
  },
}
</script>
