<template>
  <div class="WelcomeAlert">
    <b-modal id="WelcomeAlertModal" title="Patients screening tool" ok-only>
      <p class="my-4">Thank you for using this tool to help in screening patients for improtant diseases</p>
      <p class="my-4">This tool is still in the alpha phase, by no any means it should be used as the only and solely reference for you</p>
      <p class="my-4">This tool hasn't been endorsed by any association, society or a medical group</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'WelcomeAlert',
  data () {
    return {

    }
  },
  mounted () {
    this.$bvModal.show('WelcomeAlertModal')
  }
}
</script>

<style scoped>

</style>
