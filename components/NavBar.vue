<template>
  <nav
    class="w-full flex gap-3 px-2 py-3 items-center shadow-md border-b-2 border-steel-teal text-steel-teal"
  >
    <span>
      <nuxt-link
        to="/"
        class="md:text-2xl font-bold hover:opacity-90 transition-all"
      >
        Ache um Bioinformata
      </nuxt-link></span
    >
    <span class="w-[1px] h-8 bg-rich-black bg-opacity-50"></span>
    <div class="flex gap-5 tracking-wider uppercase text-sm font-medium h-full">
      <nuxt-link to="/" class="menu-btn">Buscar</nuxt-link>
      <nuxt-link to="/institutions/" class="menu-btn">Instituições</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
