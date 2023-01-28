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

describe('Chlamydia and gonorrhea screening', () => {
  // This test follows the chlamydia and gonorrhea screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/chlamydia-and-gonorrhea-screening
  // Last time accessed 12/04/2021

  const screeningData = {
    id: '#chlamydiaAndGonorrheaUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/chlamydia-and-gonorrhea-screening',
    disease: 'Chlamydia and Gonorrhea'
  }

  it('Doesn\'t Screen males', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 20,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })

  it('Screens a 17 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 17,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Screens an 18 year old female', async () => {
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
