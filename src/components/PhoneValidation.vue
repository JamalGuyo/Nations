<template>
  <div>
    <h1>Validate Phone Number Based on country</h1>
    <p>
      The field will turn
      <span>
        GREEN
      </span>
      for validated phone number
    </p>
    <VuePhoneNumberInput v-model="phoneNumber" />
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  name: 'PhoneValidation',
  props: {
    error: {
      type: Boolean,
    },
  },
  data() {
    return {
      phoneNumber: '',
    };
  },
  components: {
    VuePhoneNumberInput,
  },
};
</script>

<style>
span{
	color: green
}
</style>
