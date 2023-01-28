<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Is this an endorsed tool by a medical group?</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>No, this is a self made project, it hasn't been endorsed by any one</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">What topics does this tool cover?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>In the time being, it covers the recommendations made by the USPSTF for the following topics:</b-card-text>
          <b-card-text>
            <ol>
              <li>Abdominal Aortic Aneurysm: Screening</li>
              <li>Prediabetes and Type 2 Diabetes: Screening</li>
              <li>Asymptomatic Bacteriuria in Adults: Screening</li>
              <li>Breast Cancer: Screening</li>
              <li>Cervical Cancer: Screening</li>
              <li>Chlamydia and Gonorrhea: Screening</li>
              <li>Colorectal Cancer: Screening</li>
              <li>Depression in Adults: Screening</li>
              <li>Depression in Children and Adolescents: Screening</li>
              <li>Gestational Diabetes Mellitus, Screening</li>
              <li>Screening for Hepatitis B Virus Infection in Adolescents and Adults</li>
              <li>Hepatitis C Virus Infection in Adolescents and Adults: Screening</li>
              <li>Screening for Hypertension in Adults</li>
              <li>Human Immunodeficiency Virus (HIV) Infection: Screening</li>
              <li>Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults: Screening</li>
              <li>Latent Tuberculosis Infection: Screening</li>
              <li>Lung Cancer: Screening</li>
              <li>Obesity in Children and Adolescents: Screening</li>
              <li>Osteoporosis to Prevent Fractures: Screening</li>
              <li>Preeclampsia: Screening</li>
              <li>Prevention of Dental Caries in Children Younger Than 5 Years: Screening and Interventions</li>
              <li>Prostate Cancer: Screening</li>
              <li>Rh(D) Incompatibility: Screening</li>
              <li>Syphilis Infection in Nonpregnant Adults and Adolescents: Screening </li>
              <li>Syphilis Infection in Pregnant Women: Screening</li>
              <li>Unhealthy Alcohol Use in Adolescents and Adults: Screening and Behavioral Counseling Interventions</li>
              <li>Unhealthy Drug Use: Screening</li>
              <li>Vision in Children Ages 6 Months to 5 Years: Screening</li>
            </ol>
          </b-card-text>
          <b-card-text>Also it covers the Prediabetes and Type 2 Diabetes recommendations made by the American Diabetes Association</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">What recommendation grades does it cover? and what do they mean?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>In the time being, it covers the recommendations made by the USPSTF grade A,B and C:</b-card-text>
          <b-card-text>
            <ol type="A">
              <li>The USPSTF recommends the service. There is high certainty that the net benefit is substantial.</li>
              <li>The USPSTF recommends the service. There is high certainty that the net benefit is moderate or there is moderate certainty that the net benefit is moderate to substantial.</li>
              <li>The USPSTF recommends selectively offering or providing this service to individual patients based on professional judgment and patient preferences. There is at least moderate certainty that the net benefit is small.</li>
            </ol>
          </b-card-text>
          <b-card-text>And the recommendation made by the American Diabetes Associations grade A,B and C:</b-card-text>
          <b-card-text>
            <ol type="A">
              <li>Clear evidence from well-conducted, generalizable randomized controlled trials that are adequately powered, including: Evidence from a well-conducted multicenter trial, Evidence from a meta-analysis that incorporated quality ratings in the analysis, Compelling nonexperimental evidence, i.e., “all or none” rule developed by the Centre for Evidence-Based Medicine at the University of Oxford, Supportive evidence from well-conducted randomized controlled trials that are adequately powered, including: Evidence from a well-conducted trial at one or more institutions, Evidence from a meta-analysis that incorporated quality ratings in the analysis</li>
              <li>Supportive evidence from well-conducted cohort studies: Evidence from a well-conducted prospective cohort study or registry, Evidence from a well-conducted meta-analysis of cohort studies, Supportive evidence from a well-conducted case-control study</li>
              <li>Supportive evidence from poorly controlled or uncontrolled studies: Evidence from randomized clinical trials with one or more major or three or more minor methodological flaws that could invalidate the results, Evidence from observational studies with high potential for bias (such as case series with comparison with historical controls), Evidence from case series or case reports, Conflicting evidence with the weight of evidence supporting the recommendation</li>
            </ol>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Does this tool collect any data?</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>No it does NOT collect any data, it works entirely on the browser without the need to reach for a server</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">Can I get the source code for this tool?</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Yes you can get the source code on <a href="https://github.com/Mohd-PH/patients-screening-tool-vue" target="_blank"><b-icon icon="github"></b-icon> Github</a></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

</style>
