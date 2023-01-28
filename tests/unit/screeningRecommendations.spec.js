import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('screeningRecommendations', () => {
  it('It sorts recommendations by their grades', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 60,
          gender: 'Male',
          smoker: 'No',
          height: 170,
          weight: 70,
          BMI: 24.2
        }
      }
    })

    expect(wrapper.text().match(/Colorectal cancer.+Depression in Adults.+Prostate cancer/s)).not.toBeNull()
    expect(wrapper.text().match(/Depression in Adults.+Prostate cancer.+Colorectal cancer/s)).toBeNull()
  })
})
