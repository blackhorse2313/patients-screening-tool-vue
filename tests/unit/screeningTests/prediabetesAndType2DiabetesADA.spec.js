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

describe('Prediabetes and Type 2 Diabetes screening and testing', () => {
  // This test follows the Prediabetes and Type 2 Diabetes screening and testing recommendations by the American diabetes association
  // https://care.diabetesjournals.org/content/44/Supplement_1/S15
  // Last time accessed 02/05/2021

  const screeningData = {
    id: null,
    link: 'https://diabetesjournals.org/care/article/45/Supplement_1/S17/138925/2-Classification-and-Diagnosis-of-Diabetes',
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

    screeningData.id = '#prediabetesAndType2DiabetesADA2p7'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p8'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p9'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p14'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)
  })

  it('Screens a 35 year old male who is overweight "BMI = 27"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 35,
          gender: 'Male',
          smoker: 'No',
          height: 172,
          weight: 80,
          BMI: 27
        }
      }
    })

    screeningData.id = '#prediabetesAndType2DiabetesADA2p7'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p8'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p9'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p14'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)
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

    screeningData.id = '#prediabetesAndType2DiabetesADA2p7'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p8'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p9'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p14'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)
  })

  it('Screens a 24 year old female who is obese "BMI = 33.1" and planning to get pregnant', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 24,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'No',
          pregnant: 'No',
          height: 165,
          weight: 90,
          BMI: 33.1
        }
      }
    })

    screeningData.id = '#prediabetesAndType2DiabetesADA2p7'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p8'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p9'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p14'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)
  })

  it('Screens a 18 year old male who is who is normal weight "BMI = 22.5"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Male',
          smoker: 'No',
          height: 170,
          weight: 65,
          BMI: 22.5
        }
      }
    })

    screeningData.id = '#prediabetesAndType2DiabetesADA2p7'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p8'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p9'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p14'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)
  })

  it('Screens a 45 year old female who is who is normal weight "BMI = 22.5"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 45,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'Yes',
          height: 170,
          weight: 65,
          BMI: 22.5
        }
      }
    })

    screeningData.id = '#prediabetesAndType2DiabetesADA2p7'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p8'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p9'
    utilities.screeningTestDisplayed(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p14'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)
  })

  it('Screens a 10 year old male who is overweight weight "BMI = 27.8"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 10,
          gender: 'Male',
          smoker: 'No',
          height: 120,
          weight: 40,
          BMI: 27.8
        }
      }
    })

    screeningData.id = '#prediabetesAndType2DiabetesADA2p7'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p8'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p9'
    utilities.screeningTestNotDisplayedByID(wrapper, screeningData)

    screeningData.id = '#prediabetesAndType2DiabetesADA2p14'
    utilities.screeningTestDisplayed(wrapper, screeningData)
  })
})
