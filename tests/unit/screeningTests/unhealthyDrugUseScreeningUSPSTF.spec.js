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

describe('Unhealthy drug use screening', () => {
  // This test follows the unhealthy drug use screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/drug-use-illicit-screening
  // Last time accessed 10/04/2021

  const screeningData = {
    id: '#unhealthyDrugUseUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/drug-use-illicit-screening',
    disease: 'Unhealthy Drug Use'
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
