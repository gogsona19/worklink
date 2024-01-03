<template>
  <div class="filter">
    <div class="container text-center">
      <p>{{ prop1 }} {{ prop2 }}</p>
    <!-- Filter by Title -->
    <label for="titleFilter">Filter by Title:</label>
    <input type="text" v-model="titleFilter" id="titleFilter">

    <!-- Filter by Price -->
    <label for="priceFilter">Filter by Price:</label>
    <select v-model="selectedPriceFilter" id="priceFilter">
      <option value="">All</option>
      <option value="₾100">₾100</option>
      <option value="₾110">₾110</option>
      <option value="₾120">₾120</option>
      <option value="₾150">₾150</option>
      <!-- Add more options as needed -->
    </select>

    <!-- Filter by Price -->
    <label for="location">რეგიონი:</label>
    <select v-model="location" id="location">
      <option value="">ყვეკა</option>
      <option value="თბილისი">თბილისი</option>
      <option value="ქუთაისი">ქუთაისი</option>
      <option value="ახმეტა">ახმეტა</option>
      <option value="საჩხერე">საჩხერე</option>
      <!-- Add more options as needed -->
    </select>
      <!--ფილტრაციის ადგილი-->
      <div class="row">
         
        <div class="col">
          <label for="select1">აირჩიე სფერო</label>
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="select1"
            v-model="selectedOption1"
            @change="handleSelectChange('selectedOption1', 'options1')"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
        </div>
        <div class="col">
          <label for="select2">აირჩიე კატეგორია</label>
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="select2"
            v-model="selectedOption2"
            :disabled="!select2Enabled"
            @change="handleSelectChange('selectedOption2', 'options2')"
          >
            <option value="subOption1">Sub-option 1</option>
            <option value="subOption2">Sub-option 2</option>
          </select>
        </div>
        <div class="col">
          <label for="select3">აირჩიე რეგიონი</label>
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="select3"
            v-model="selectedOption3"
            :disabled="!select3Enabled"
            @change="handleSelectChange('selectedOption3', 'options3')"
          >
            <option value="subOptionA">Sub-option A</option>
            <option value="subOptionB">Sub-option B</option>
          </select>
        </div>
        <div class="col">
          <label for="select3">ანაზღაურება</label>
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="select3"
            v-model="selectedOption3"
            :disabled="!select3Enabled"
            @change="handleSelectChange('selectedOption3', 'options3')"
          >
            <option value="subOptionA">₾25.000+ (1522)</option>
            <option value="subOptionB">₾38.000+ (324)</option>
            <option value="subOptionB">₾45.000+ (464)</option>
            <option value="subOptionB">₾65.000+ (4894)</option>
            <option value="subOptionB">₾80.000+ (105)</option>
          </select>
        </div>
        <div class="col">
          <label for="select3">გამოქვეყნდა</label>
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="select3"
            v-model="selectedOption3"
            :disabled="!select3Enabled"
            @change="handleSelectChange('selectedOption3', 'options3')"
          >
            <option value="subOptionA">ბოლო 24 საათი</option>
            <option value="subOptionB">ბოლო 3 დღე</option>
            <option value="subOptionC">ბოლო 7 დღე</option>
            <option value="subOptionD">ბოლო 8 დღე</option>
          </select>
        </div>
      </div>
      
    </div>
    <!--ფილტრაციის ადგილი-->
  </div>
</template>
<script>
export default {
  props: ['prop1', 'prop2'],
  data() {
    return {
      selectedOption1: "",
      selectedOption2: "",
      selectedOption3: "",
      options1: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
      ],
      options2: [
        { value: "subOption1", label: "Sub-option 1" },
        { value: "subOption2", label: "Sub-option 2" },
      ],
      options3: [
        { value: "subOptionA", label: "Sub-option A" },
        { value: "subOptionB", label: "Sub-option B" },
        { value: "subOptionC", label: "Sub-option C" },
        { value: "subOptionD", label: "Sub-option D" },
      ],
    };
  },
  computed: {
    select2Enabled() {
      return (
        this.selectedOption1 === "option1" ||
        this.selectedOption1 === "option2" ||
        this.selectedOption1 === "option3" ||
        this.selectedOption1 === "option4" ||
        this.selectedOption1 === "option5"
      );
    },
    select3Enabled() {
      return (
        this.selectedOption1 === "option2" || this.selectedOption1 === "option4"
      );
    },
  },
  methods: {
    handleSelectChange(selectId, optionsId) {
      const selectedOption = this[selectId];
      const selectedOptionLabel = this[optionsId].find(
        (option) => option.value === selectedOption
      ).label;
      console.log(
        `Selected value in ${selectId}: ${selectedOption} (${selectedOptionLabel})`
      );
    },
  },

};
</script>