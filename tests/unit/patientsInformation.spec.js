import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import patientsInformation from '@/pages/home/patientsInformation.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('patientsInformation.vue', () => {
  it('emits the data', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(20)
    expect(wrapper.find('#input-age').element.value).toBe('20')

    await wrapper.find('#gender-male-button').trigger('click')
    expect(wrapper.vm.$data.form.gender).toBe('Male')

    await wrapper.find('#smoker-no-button').trigger('click')
    expect(wrapper.vm.$data.form.smoker).toBe('No')

    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('patientInformationSubmitted')[3][0]).toStrictEqual({
      age: 20,
      gender: 'Male',
      smoker: 'No',
      packYears: null,
      postmenopausal: null,
      pregnant: null,
      height: null,
      weight: null,
      BMI: null
    })
  })
  it('shows the pack years input for smokers and emits the data', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(55)
    expect(wrapper.find('#input-age').element.value).toBe('55')

    await wrapper.find('#gender-male-button').trigger('click')
    expect(wrapper.vm.$data.form.gender).toBe('Male')

    // Pack years field is hidden
    expect(wrapper.find('#input-packYears').element).toBeUndefined()

    await wrapper.find('#smoker-yes-button').trigger('click')
    expect(wrapper.vm.$data.form.smoker).toBe('Yes')

    // Pack years field is visible
    expect(wrapper.find('#input-packYears').element).not.toBeUndefined()

    const packYears = wrapper.find('#input-packYears')
    await packYears.setValue(22)
    expect(wrapper.find('#input-packYears').element.value).toBe('22')

    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('patientInformationSubmitted')[4][0]).toStrictEqual({
      age: 55,
      gender: 'Male',
      smoker: 'Yes',
      packYears: 22,
      postmenopausal: null,
      pregnant: null,
      height: null,
      weight: null,
      BMI: null
    })
  })
  it('shows the postmenopausal select option for female patients and emits the data', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(55)
    expect(wrapper.find('#input-age').element.value).toBe('55')

    // Postmenopausal option is hidden
    expect(wrapper.find('#input-postmenopausal').element).toBeUndefined()

    await wrapper.find('#gender-female-button').trigger('click')
    expect(wrapper.vm.$data.form.gender).toBe('Female')

    // Postmenopausal option is visible
    expect(wrapper.find('#input-postmenopausal').element).not.toBeUndefined()

    await wrapper.find('#smoker-no-button').trigger('click')
    expect(wrapper.vm.$data.form.smoker).toBe('No')

    await wrapper.find('#postmenopausal-yes-button').trigger('click')
    expect(wrapper.vm.$data.form.postmenopausal).toBe('Yes')

    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('patientInformationSubmitted')[4][0]).toStrictEqual({
      age: 55,
      gender: 'Female',
      smoker: 'No',
      packYears: null,
      postmenopausal: 'Yes',
      pregnant: null,
      height: null,
      weight: null,
      BMI: null
    })
  })

  it('Shows the pregnant buttons for female patients who is not postmenopausal and emits the data', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(25)
    expect(wrapper.find('#input-age').element.value).toBe('25')

    await wrapper.find('#gender-female-button').trigger('click')
    expect(wrapper.vm.$data.form.gender).toBe('Female')

    // Postmenopausal option is hidden
    expect(wrapper.find('#input-pregnant').element).toBeUndefined()

    await wrapper.find('#postmenopausal-no-button').trigger('click')
    expect(wrapper.vm.$data.form.postmenopausal).toBe('No')

    // Postmenopausal option is visible
    expect(wrapper.find('#input-pregnant').element).not.toBeUndefined()

    await wrapper.find('#pregnant-yes-button').trigger('click')
    expect(wrapper.vm.$data.form.pregnant).toBe('Yes')

    await wrapper.find('#smoker-no-button').trigger('click')
    expect(wrapper.vm.$data.form.smoker).toBe('No')

    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('patientInformationSubmitted')[5][0]).toStrictEqual({
      age: 25,
      gender: 'Female',
      smoker: 'No',
      packYears: null,
      postmenopausal: 'No',
      pregnant: 'Yes',
      height: null,
      weight: null,
      BMI: null
    })
  })

  it('It calculates the BMI and emits it with the data', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(55)
    expect(wrapper.find('#input-age').element.value).toBe('55')

    const height = wrapper.find('#input-height')
    await height.setValue(169)
    expect(wrapper.find('#input-height').element.value).toBe('169')

    const weight = wrapper.find('#input-weight')
    await weight.setValue(90)
    expect(wrapper.find('#input-weight').element.value).toBe('90')

    await wrapper.find('#gender-female-button').trigger('click')
    expect(wrapper.vm.$data.form.gender).toBe('Female')

    await wrapper.find('#smoker-no-button').trigger('click')
    expect(wrapper.vm.$data.form.smoker).toBe('No')

    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('patientInformationSubmitted')[5][0]).toStrictEqual({
      age: 55,
      gender: 'Female',
      smoker: 'No',
      packYears: null,
      postmenopausal: null,
      pregnant: null,
      height: 169,
      weight: 90,
      BMI: 31.5
    })
  })

  it('It emits null with every change in the form', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(55)
    expect(wrapper.emitted('patientInformationSubmitted')[0][0]).toBeNull()

    const height = wrapper.find('#input-height')
    await height.setValue(169)
    expect(wrapper.emitted('patientInformationSubmitted')[1][0]).toBeNull()

    const weight = wrapper.find('#input-weight')
    await weight.setValue(90)
    expect(wrapper.emitted('patientInformationSubmitted')[2][0]).toBeNull()

    await wrapper.find('#gender-female-button').trigger('click')
    expect(wrapper.emitted('patientInformationSubmitted')[3][0]).toBeNull()

    await wrapper.find('#postmenopausal-no-button').trigger('click')
    expect(wrapper.emitted('patientInformationSubmitted')[4][0]).toBeNull()

    await wrapper.find('#pregnant-no-button').trigger('click')
    expect(wrapper.emitted('patientInformationSubmitted')[5][0]).toBeNull()

    await wrapper.find('#smoker-yes-button').trigger('click')
    expect(wrapper.emitted('patientInformationSubmitted')[6][0]).toBeNull()

    const packYears = wrapper.find('#input-packYears')
    await packYears.setValue(18)
    expect(wrapper.emitted('patientInformationSubmitted')[7][0]).toBeNull()
  })
})
