<template>
  <div>
    <Title />
    <div class="body">
      <p>Not Found</p>
      <button v-on:click="goBack">돌아가기</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'NotFound',
  components: {
  },
  methods: {
    goBack: function () {
      this.$router.push('/')
      }
    },

}
</script>
<style src="./NotFound.css" scoped></style>