<template>
  <span class="lds-dual-ring"></span>
</template>

<style scoped>
/* from https://loading.io/css/ */
.lds-dual-ring {
  display: inline-block;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  border-radius: 50%;
  border: 6px solid #2ba84a;
  border-color: #2ba84a transparent #2ba84a transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
