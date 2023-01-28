<template>
  <div>
    <b-container>
      <b-row>
        <b-col><patients-information v-on:patientInformationSubmitted="patientsInformationData = $event"></patients-information></b-col>
      </b-row>
      <hr>
      <b-row v-if="patientsInformationData">
        <b-col><screeningRecommendations v-bind:patientsInformationData="patientsInformationData"></screeningRecommendations></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import patientsInformation from './patientsInformation'
import screeningRecommendations from './screeningRecommendations'

export default {
  name: 'Home',
  components: {
    patientsInformation,
    screeningRecommendations
  },
  data () {
    return {
      patientsInformationData: null
    }
  }
}
</script>

<style>

</style>
