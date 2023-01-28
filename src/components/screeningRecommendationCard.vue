<template>
  <div>
    <b-card
      :title="disease"
      header-tag="header">
      <template #header>
        <h6 class="mb-0" v-text="organization"></h6>
      </template>
      <b-card-text v-text="recommendation"></b-card-text>
      <p>Recommendation Grade: <b v-text="grade" class="grade" :title="gradeDescription"></b></p>
      <hr>
      <b-row align-v="center">
        <b-col class="text-left pl-4" title="DD/MM/YYYY">
          <b-icon icon="calendar2-date"  scale="1.4"></b-icon>&nbsp;<em class="pl-2" v-text="date"></em>
        </b-col>
        <b-col class="text-right">
          <b-button :href="link" variant="primary" target="_blank">
            Recommendation <b-icon icon="box-arrow-up-right" scale="0.8"></b-icon>
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'screeningRecommendationCard',
  props: ['disease', 'organization', 'link', 'grade', 'recommendation', 'date'],
  data () {
    return {

    }
  },
  computed: {
    gradeDescription () {
      if (this.organization === 'U.S. Preventive Services Task Force') {
        if (this.grade === 'A') {
          return 'The USPSTF recommends the service. There is high certainty that the net benefit is substantial.'
        } else if (this.grade === 'B') {
          return 'The USPSTF recommends the service. There is high certainty that the net benefit is moderate or there is moderate certainty that the net benefit is moderate to substantial.'
        } else if (this.grade === 'C') {
          return 'The USPSTF recommends selectively offering or providing this service to individual patients based on professional judgment and patient preferences. There is at least moderate certainty that the net benefit is small.'
        } else {
          return null
        }
      }

      if (this.organization === 'American Diabetes Association') {
        if (this.grade === 'A') {
          return `Clear evidence from well-conducted, generalizable randomized controlled trials that are adequately powered, including
• Evidence from a well-conducted multicenter trial
• Evidence from a meta-analysis that incorporated quality ratings in the analysis
Compelling nonexperimental evidence, i.e., “all or none” rule developed by the Centre for Evidence-Based Medicine at the University of Oxford
Supportive evidence from well-conducted randomized controlled trials that are adequately powered, including
• Evidence from a well-conducted trial at one or more institutions
• Evidence from a meta-analysis that incorporated quality ratings in the analysis`
        } else if (this.grade === 'B') {
          return `Supportive evidence from well-conducted cohort studies
• Evidence from a well-conducted prospective cohort study or registry
• Evidence from a well-conducted meta-analysis of cohort studies
Supportive evidence from a well-conducted case-control study`
        } else if (this.grade === 'C') {
          return `Supportive evidence from poorly controlled or uncontrolled studies
• Evidence from randomized clinical trials with one or more major or three or more minor methodological flaws that could invalidate the results
• Evidence from observational studies with high potential for bias (such as case series with comparison with historical controls)
• Evidence from case series or case reports
Conflicting evidence with the weight of evidence supporting the recommendation`
        } else {
          return null
        }
      }
      return null
    }
  }
}
</script>

<style scoped>
  .grade {
    font-size: 1.4em;
    text-shadow: 1px 2px 7px rgba(109,120,109,0.41);
  }
</style>
