<template>
  <table class="text-left overflow-scroll">
    <tr class="text-center border-b-2 border-rich-black">
      <th v-for="header in headers" :key="header" class="text-rich-black">
        {{ header }}
      </th>
    </tr>
    <tr
      v-for="row in data"
      :key="row[0]"
      class="border-b-[1px] border-rich-black"
    >
      <td
        v-for="(index, datapoint) in row"
        :key="`${data.indexOf(row)}${datapoint}`"
        class="px-1"
      >
        {{ row[datapoint] }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => ['QID', 'Name'],
    },
    data: {
      type: Array,
      default: () => [['Q42', 'Douglas Adams']],
    },
  },
}
</script>
