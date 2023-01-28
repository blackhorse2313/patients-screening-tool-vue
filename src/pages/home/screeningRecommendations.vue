<template>
  <div>
    <b-container>
      <h3>Screening recommendations</h3>
      <b-row class="justify-content-md-center">
        <b-col
          lg="6"
          v-for="screening in screeningForThisPatient"
          :key="screening.class"
          class="recommendation"
          :id="screening.id">
          <screeningRecommendationCard
          :disease="screening.recommendation.disease"
          :organization="screening.recommendation.organization"
          :link="screening.recommendation.link"
          :grade="screening.recommendation.grade"
          :recommendation="screening.recommendation.recommendation"
          :date="screening.recommendation.date"
          ></screeningRecommendationCard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import screeningRecommendationCard from '../../components/screeningRecommendationCard'
import screeningRecommendationsAlgorithms from './screeningRecommendationsAlgorithms'

export default {
  name: 'screeningRecommendations',
  components: {
    screeningRecommendationCard
  },
  props: ['patientsInformationData'],
  data () {
    return {

    }
  },
  computed: {
    ...screeningRecommendationsAlgorithms,
    screeningForThisPatient () {
      const screening = []

      Object.keys(screeningRecommendationsAlgorithms).forEach(key => {
        if (this[key]) {
          screening.push({
            id: key,
            recommendation: this[key]
          })
        }
      })

      const gradeValue = {
        A: 1,
        B: 2,
        C: 3
      }

      return screening.sort((a, b) => {
        return gradeValue[a.recommendation.grade] - gradeValue[b.recommendation.grade]
      })
    }
  }
}
</script>

<style scoped>
  .recommendation {
    padding-bottom: 25px;
  }
</style>
