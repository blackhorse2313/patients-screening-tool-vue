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

describe('Hepatitis C infection screening', () => {
  // This test follows the hepatitis C virus Infection in adolescents and adults recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening
  // Last time accessed 10/04/2021

  const screeningData = {
    id: '#hepatitisCInfectionUSPSTF',
    link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening',
    disease: 'Hepatitis C Virus Infection in Adolescents and Adults'
  }

  it('Screens a 18 year female', async () => {
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

  it('Screens a 79 year male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 79,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestDisplayed(wrapper, screeningData)
  })

  it('Doesn\' screen a 10 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 10,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })

  it('Doesn\' screen a 80 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 80,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    utilities.screeningTestNotDisplayed(wrapper, screeningData)
  })
})
