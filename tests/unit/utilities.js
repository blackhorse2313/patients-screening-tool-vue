module.exports = {
  screeningTestDisplayed (wrapper, screeningData) {
    expect(wrapper.find(screeningData.id).element).not.toBeUndefined()
    expect(wrapper.text()).toContain(screeningData.disease)
    expect(wrapper.html()).toContain(screeningData.link)
  },
  screeningTestNotDisplayed (wrapper, screeningData) {
    expect(wrapper.find(screeningData.id).element).toBeUndefined()
    // Since we have two recommnedations for "Prediabetes and Type 2 Diabetes"
    // by different socities we are going to ignore it here
    if (screeningData.disease !== 'Prediabetes and Type 2 Diabetes') {
      expect(wrapper.text()).not.toContain(screeningData.disease)
    }
    expect(wrapper.html()).not.toContain(screeningData.link)
  },
  screeningTestNotDisplayedByID (wrapper, screeningData) {
    // Sometimes a case has multi recommendations which have the same title
    // Use this method to look for the ID only
    expect(wrapper.find(screeningData.id).element).toBeUndefined()
  }
}
