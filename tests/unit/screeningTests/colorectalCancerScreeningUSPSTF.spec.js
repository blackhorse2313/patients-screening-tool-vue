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

describe('Colorectal cancer screening', () => {
  // This test follows the colorectal cancer screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening
  // Last time accessed 23/05/2021

  const screeningData = {
    id: '#colorectalCancerUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening',
    disease: 'Colorectal cancer'
  }

  it('Screens for 80 years old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 80,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Screens for 55 years old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Screens for 49 years old Male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 49,
          gender: 'Male',
          smoker: 'Yes'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Screens for 45 years old Female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 45,
          gender: 'Female',
          smoker: 'Yes'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Doesn\' screen for 44 years old Female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 44,
          gender: 'Female',
          smoker: 'Yes'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })
})
