<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex>{{ title }}</v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    title: 'All Payments'
  })
}
</script>
