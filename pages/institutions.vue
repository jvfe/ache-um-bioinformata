<template>
  <InstitutionsPage :institution-list="institutionList">
    <SimpleTable :headers="header" :data="institutionList" />
  </InstitutionsPage>
</template>

<script>
export default {
  name: 'Institutions',
  data() {
    return {
      header: ['QID', 'Name'],
      institutionList: [
        ['Q1234', 'Program in Bioinformatics (UFRN)'],
        ['Q1235', 'Program in Bioinformatics (USP)'],
      ],
    }
  },
}
</script>
