<template>
  <div class="surround flex-fill flex-column">
    <div class="page flex-fill align-content-center shadow-lg p-3">
      <h2 align="center">My Story</h2>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reader'
}
</script>

<style scoped>
.surround {
  display: flex;
  background-color: #B0C4DE;
  align-items: center;
  justify-content: center;
}

.page {
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: #FFFFF0;
  max-width: 50rem;
  width: 100%;
}

</style>
