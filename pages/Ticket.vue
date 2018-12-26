<template>
  <div>{{ number }}</div>
</template>

<script>
export default {
  data: () => ({
    props: ['number'],
    title: 'Ticket'
  })
}
</script>
