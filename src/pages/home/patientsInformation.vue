<template>
  <div>
    <h3>Patient's information</h3>
    <b-row class="justify-content-md-center">
      <b-alert variant="success" show>This tool doesn't collect any data, it works entirely in your browser</b-alert>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col lg="4">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Age:" label-for="input-age" label-cols-sm="5">
            <b-form-input id="input-age" @input="updateData('age', $event)" :value="form.age" type="number" placeholder="Enter age" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Height:" label-for="input-height" label-cols-sm="5">
            <b-form-input id="input-height" @input="updateData('height', $event)" :value="form.height" type="number" placeholder="Enter height in cm" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Weight:" label-for="input-weight" label-cols-sm="5">
            <b-form-input id="input-weight" @input="updateData('weight', $event)" :value="form.weight" type="number" placeholder="Enter weight in kg" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Gender:" label-for="input-gender" label-cols-sm="5">
            <b-button-group id="input-gender">
              <b-button id="gender-male-button" :variant="form.gender === 'Male' ? 'primary' : ''" @click="updateData('gender', 'Male')">Male</b-button>
              <b-button id="gender-female-button" :variant="form.gender === 'Female' ? 'primary' : ''" @click="updateData('gender', 'Female')">Female</b-button>
            </b-button-group>
          </b-form-group>

          <b-form-group id="input-group-5" label="Is she postmenopausal:" label-for="input-postmenopausal" label-cols-sm="5" v-if="form.gender === 'Female'">
            <b-button-group id="input-postmenopausal">
              <b-button id="postmenopausal-yes-button" :variant="form.postmenopausal === 'Yes' ? 'primary' : ''" @click="updateData('postmenopausal', 'Yes')">Yes</b-button>
              <b-button id="postmenopausal-no-button" :variant="form.postmenopausal === 'No' ? 'primary' : ''" @click="updateData('postmenopausal', 'No')">No</b-button>
            </b-button-group>
          </b-form-group>

          <b-form-group id="input-group-5" label="Is she pregnant:" label-for="input-pregnant" label-cols-sm="5" v-if="form.postmenopausal === 'No'">
            <b-button-group id="input-pregnant">
              <b-button id="pregnant-yes-button" :variant="form.pregnant === 'Yes' ? 'primary' : ''" @click="updateData('pregnant', 'Yes')">Yes</b-button>
              <b-button id="pregnant-no-button" :variant="form.pregnant === 'No' ? 'primary' : ''" @click="updateData('pregnant', 'No')">No</b-button>
            </b-button-group>
          </b-form-group>

          <b-form-group id="input-group-6" label="Smoker:" label-for="input-smoker" label-cols-sm="5">
            <b-button-group id="input-smoker">
              <b-button id="smoker-yes-button" :variant="form.smoker === 'Yes' ? 'primary' : ''" @click="updateData('smoker', 'Yes')">Yes</b-button>
              <b-button id="exsmoker-button" :variant="form.smoker === 'Ex-smoker' ? 'primary' : ''" @click="updateData('smoker', 'Ex-smoker')">Ex-smoker</b-button>
              <b-button id="smoker-no-button" :variant="form.smoker === 'No' ? 'primary' : ''" @click="updateData('smoker', 'No')">No</b-button>
            </b-button-group>
          </b-form-group>

          <b-form-group id="input-group-7" label="Pack years:" label-for="input-packYears" label-cols-sm="5" v-if="form.smoker === 'Yes' || form.smoker === 'Ex-smoker'">
            <b-form-input id="input-packYears" @input="updateData('packYears', $event)" :value="form.packYears" type="number" placeholder="Pack years" required>
            </b-form-input>
          </b-form-group>
          <b-row>
            <b-col>
              <b-button type="submit" class="submit-button" variant="primary">Submit</b-button>
            </b-col>
            <b-col>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'patientsInformation',
  data () {
    return {
      form: {
        gender: null,
        age: null,
        height: null,
        weight: null,
        BMI: null,
        smoker: null,
        packYears: null,
        postmenopausal: null,
        pregnant: null
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.form.BMI = Math.floor((this.form.weight / (Math.pow((this.form.height / 100), 2))) * 10) / 10
      if (isNaN(this.form.BMI)) {
        this.form.BMI = null
      }
      this.$emit('patientInformationSubmitted', this.form)
    },
    onReset (e) {
      Object.keys(this.form).forEach(key => {
        this.form[key] = null
      })
      this.$emit('patientInformationSubmitted', null)
    },
    updateData (key, value) {
      if (['age', 'height', 'weight', 'packYears'].includes(key)) {
        value = parseFloat(value)
      }
      this.form[key] = value
      this.$emit('patientInformationSubmitted', null)
    }
  }
}
</script>

<style>

</style>
