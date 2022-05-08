<template>
  <div
    class="flex flex-col justify-between items-center text-red-700 font-bold text-2xl gap-4 mt-10"
  >
    <i class="fa-regular fa-circle-xmark text-4xl"></i>
    <h3>
      Couldn't retrieve the data, try
      <button class="simple-link" @click="refreshPage">refreshing</button>.
    </h3>
  </div>
</template>

<script>
export default {
  methods: {
    refreshPage() {
      window.location.reload()
    },
  },
}
</script>
