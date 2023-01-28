import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'
import utilities from '../utilities'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Abnormal Blood Glucose and Type 2 Diabetes Mellitus screening', () => {
  // This test follows the abnormal blood glucose and type 2 diabetes mellitus in adults screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-abnormal-blood-glucose-and-type-2-diabetes
  // Last time accessed 05/04/2021

  const screeningData = {
    id: '#prediabetesAndType2DiabetesUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-prediabetes-and-type-2-diabetes',
    disease: 'Prediabetes and Type 2 Diabetes'
  }

  it('Screens a 40 year old male who is overweight "BMI = 27"', async () => {
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

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Screens a 70 year old male who is obese "BMI = 33.1"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 70,
          gender: 'Male',
          smoker: 'No',
          height: 165,
          weight: 90,
          BMI: 33.1
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Doesn\'t Screen 50 year old female who had normal weight "BMI = 24.2"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 50,
          gender: 'Female',
          smoker: 'No',
          height: 160,
          weight: 62,
          BMI: 24.2
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })

  it('Screens 35 year old male who is obese "BMI = 31.5"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 35,
          gender: 'Female',
          smoker: 'No',
          height: 169,
          weight: 90,
          BMI: 31.5
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Doesn\'t screen 34 year old male who is obese "BMI = 31.5"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 34,
          gender: 'Female',
          smoker: 'No',
          height: 169,
          weight: 90,
          BMI: 31.5
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })

  it('Doesn\'t screen 71 year old male who is obese "BMI = 31.5"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 71,
          gender: 'Female',
          smoker: 'No',
          height: 169,
          weight: 90,
          BMI: 31.5
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })
})
