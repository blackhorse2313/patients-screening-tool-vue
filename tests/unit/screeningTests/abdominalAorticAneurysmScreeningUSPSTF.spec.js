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

describe('Abdomin aourtic aneurysm screening', () => {
  // This test follows the abdomin aourtic aneurysm screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening
  // Last time accessed 10/04/2021

  const screeningData = {
    id: '#abdominalAorticAneurysmUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening',
    disease: 'Abdominal Aortic Aneurysm'
  }

  it('Doesn\'t Screen females', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 70,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })

  it('Doesn\'t Screen a 64 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 64,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })

  it('Screens a 70 year old male non-smoker', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 70,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })
    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Screens a 65 year old male smoker', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 65,
          gender: 'Male',
          smoker: 'Yes'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Screens a 75 year old male ex-smoker', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 75,
          gender: 'Male',
          smoker: 'Ex-smoker'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })
})
