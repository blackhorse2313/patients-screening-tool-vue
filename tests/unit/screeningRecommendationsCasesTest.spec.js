import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Screening recommendations cases', () => {
  // This test will test screening recommendation made by the screeningRecommendation.vue file for different cases
  it('Screens a 40 year old male who is overweight "BMI = 27" for prediabetes and T2DM(USPSTF & ADA), depression, hypertension, unhealthy alcohol use, unhealthy drug use, HIV infection, latent tuberculosis infection, syphilis Infection, hepatitis B infection and hepatitis C infection', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 40,
          gender: 'Male',
          smoker: 'No',
          height: 172,
          weight: 80,
          BMI: 27
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).not.toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).not.toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hypertension in Adults')
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 60 year old male smoker for 30 pack year for lung cancer, prostate cancer, colorectal cancer, depression, hypertension, prediabetes and T2DM, unhealthy alcohol use, unhealthy drug use, HIV infection, latent tuberculosis infection, syphilis Infection, hepatitis B infection and hepatitis C infection', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 60,
          gender: 'Male',
          smoker: 'Yes',
          packYears: 30
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).toContain('Colorectal cancer')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hypertension in Adults')
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 55 year old female postmenopausal smoker for 19 pack year for breast cancer, cervical cancer, osteoporosis, colorectal cancer, depression, prediabetes and T2DM, hypertension, unhealthy alcohol use, unhealthy drug use, HIV infection, chlamydia infection, gonorrhea infection, latent tuberculosis infection, syphilis Infection, hepatitis B infection and hepatitis C infection', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Female',
          smoker: 'Yes',
          packYears: 19,
          postmenopausal: 'Yes'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).toContain('Breast cancer')
    expect(wrapper.text()).toContain('Cervical cancer')
    expect(wrapper.text()).toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).toContain('Colorectal cancer')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hypertension in Adults')
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 20 year old female medically free for depression, hypertension, prediabetes and T2DM, unhealthy alcohol use, unhealthy drug use, HIV infection, chlamydia infection, gonorrhea infection, latent tuberculosis infection, syphilis Infection, hepatitis B infection, hepatitis C infection and intimate partener violence', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 20,
          gender: 'Female',
          smoker: 'No',
          pregnant: 'No',
          postmenopausal: 'No'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hypertension in Adults')
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 43 year old female medically free pregnant for breast cancer, cervical cancer, depression, prediabetes and T2DM, hypertension, gestational diabetes mellitus, unhealthy alcohol use, unhealthy drug use, HIV infection, chlamydia infection, gonorrhea infection, latent tuberculosis infection, hepatitis B infection, hepatitis C infection, syphilis infection, Rh(D) incompatibility, preeclampsia, Asymptomatic Bacteriuria and intimate partener violence', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 43,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'No',
          pregnant: 'Yes'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).toBeUndefined()
    expect(wrapper.text()).toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).toContain('Breast cancer')
    expect(wrapper.text()).toContain('Cervical cancer')
    expect(wrapper.text()).toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hypertension in Adults')
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).toContain('Preeclampsia')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 55 year old male obese (BMI = 33) and smoker for 20 pack year but medically free for prostate cancer, colorectal cancer, lung cancer, prediabetes and T2DM, abnormal BG and T2DM, depression, hypertension, unhealthy alcohol use, unhealthy drug use, HIV infection, latent tuberculosis infection, syphilis Infection, hepatitis B infection and hepatitis C infection', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Male',
          smoker: 'Yes',
          packYears: 20,
          height: 175,
          weight: 101,
          BMI: 33
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).not.toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).toContain('Colorectal cancer')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hypertension in Adults')
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 12 year old female medically free for obesity, depression, syphilis Infection, hepatitis B infection and intimate partener violence', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 12,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'No',
          pregnant: 'No'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).not.toContain('Depression in Adults')
    expect(wrapper.text()).toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).not.toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).not.toContain('Hypertension in Adults')
    expect(wrapper.text()).not.toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).not.toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).not.toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).not.toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).not.toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 70 year old male medically free with normal weight who is an ex-smoker for abdominal aortic aneurysm, prediabetes and T2DM(ADA), colorectal cancer, depression, latent tuberculosis infection, syphilis Infection, hepatitis B infection, hepatitis C infection, high blood pressure, lung cancer, unhealthy alcohol use and unhealthy drug use', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 70,
          gender: 'Male',
          smoker: 'Ex-smoker',
          packYears: 25,
          height: 170,
          weight: 70,
          BMI: 24.2
        }
      }
    })

    expect(wrapper.text()).toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).toContain('Colorectal cancer')
    expect(wrapper.text()).not.toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).toContain('Hypertension in Adults')
    expect(wrapper.text()).not.toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
  })

  it('Screens a 4 year old male for vision and dental caries', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 4,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abdominal Aortic Aneurysm')
    expect(wrapper.find('#prediabetesAndType2DiabetesUSPSTF').element).toBeUndefined()
    expect(wrapper.text()).not.toContain('Asymptomatic Bacteriuria in Adults')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Chlamydia and Gonorrhea')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Prevention of Dental Caries in Children Younger Than 5 Years')
    expect(wrapper.text()).not.toContain('Depression in Adults')
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Gestational Diabetes Mellitus')
    expect(wrapper.text()).not.toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).not.toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.text()).not.toContain('Hypertension in Adults')
    expect(wrapper.text()).not.toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.text()).not.toContain('Latent Tuberculosis Infection')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).not.toContain('Prediabetes and Type 2 Diabetes')
    expect(wrapper.text()).not.toContain('Preeclampsia')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.text()).not.toContain('Syphilis Infection in Pregnant Women')
    expect(wrapper.text()).not.toContain('Unhealthy Alcohol Use in Adolescents and Adults')
    expect(wrapper.text()).not.toContain('Unhealthy Drug Use')
    expect(wrapper.text()).toContain('Vision in Children Ages 6 Months to 5 Years')
  })
})
