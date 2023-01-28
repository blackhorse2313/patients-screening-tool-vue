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

describe('Hypertension in Adults screening', () => {
  // This test follows the high blood pressure in adults screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening
  // Last time accessed 27/04/2021

  const screeningData = {
    id: '#hypertensioninAdultsUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening',
    disease: 'Hypertension in Adults'
  }

  it('Screen everyone who is 18 year old or older', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })
})
