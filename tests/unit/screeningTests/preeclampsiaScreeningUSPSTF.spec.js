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

describe('Preeclampsia screening', () => {
  // This test follows the preeclampsia screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/preeclampsia-screening
  // Last time accessed 12/04/2021

  const screeningData = {
    id: '#preeclampsiaUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/preeclampsia-screening',
    disease: 'Preeclampsia'
  }

  it('Screens any pregnant patient', async () => {
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
  })
})
