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

describe('Rh(D) incompatibility screening', () => {
  // This test follows the Rh(D) incompatibility recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening
  // Last time accessed 12/04/2021

  const screeningData = {
    id: '#rhDIncompatibilityUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening',
    disease: 'Rh(D) Incompatibility'
  }

  it('Screens any pregnant female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Female',
          smoker: 'No',
          pregnant: 'Yes'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
    expect(wrapper.find('#rhDIncompatibilityUnsensitizedUSPSTF').element).not.toBeUndefined()
  })

  it('Doesn\'t screen a non-pregnant female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Female',
          smoker: 'No',
          pregnant: 'No'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
    expect(wrapper.find('#rhDIncompatibilityUnsensitizedUSPSTF').element).toBeUndefined()
  })

  it('Doesn\'t screen a male patient', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
    expect(wrapper.find('#rhDIncompatibilityUnsensitizedUSPSTF').element).toBeUndefined()
  })
})
