<template>
  <div>
    <b-modal
      hide-footer="true"
      id="modal-register-employee"
      ref="modal"
      title="Submit Your Details"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <ValidationObserver v-slot="{ handleSubmit }">
        <form ref="form" @submit.prevent="handleSubmit(onSubmit)">
          <b-form-group
            label="Name :"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <template v-slot:label>
              Your Name
              <span class="text-danger">*</span>
            </template>
            <ValidationProvider
              :rules="{
                required: true,
                min: 2,
                max: 25,
                regex: /^([a-zA-Z/ ])*$/,
              }"
              v-slot="{ errors }"
              name="Name"
            >
              <b-form-input
                id="name-input"
                v-model="form.name"
                :state="nameState"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="input-email"
            label="Email Address"
            label-for="email"
          >
            <template v-slot:label>
              Your Email:
              <span class="text-danger">*</span>
            </template>
            <ValidationProvider
              rules="required|email|min:9|max:65"
              v-slot="{ errors }"
              name="Email"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group id="password" label="Password:" label-for="passwordOne">
            <template v-slot:label>
              Password:
              <span class="text-danger">*</span>
            </template>
            <ValidationProvider
              rules="required|min:8|max:20"
              v-slot="{ errors }"
              name="confirm"
            >
              <b-form-input
                v-model="form.password"
                type="password"
                id="passwordOne"
                placeholder="Enter password"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>

          <b-form-group
            id="confirmPassword"
            label="Confirm Password:"
            label-for="confirmPassword"
          >
            <template v-slot:label>
              Confirm Password
              <span class="text-danger">*</span>
            </template>
            <ValidationProvider
              rules="required|min:8|max:20|password:@confirm"
              data-vv-as="confirm"
              v-slot="{ errors }"
              name="confirmPassword"
            >
              <b-form-input
                v-model="form.confirmPassword"
                type="password"
                placeholder="Confirm password"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="phoneNumberGroup"
            label="Phone Number:"
            label-for="phoneNumber"
          >
            <template v-slot:label>
              Contact Number:
              <span class="text-danger">*</span>
            </template>
            <ValidationProvider
              rules="required|numeric|min:10|max:11"
              v-slot="{ errors }"
              name="phone"
            >
              <b-form-input
                v-model="form.number"
                type="number"
                placeholder="Enter Number"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>

          <b-form-group id="locationGroup" label-for="location">
            <template v-slot:label>
              Your Preferred Location:
              <span class="text-danger">*</span>
            </template>
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="Location"
            >
              <b-form-select
                id="location"
                v-model="form.location"
                :options="locations"
              >
              </b-form-select>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>

          <b-button type="submit" variant="success">Submit</b-button>
          <b-button type="reset" class="ml-5" variant="primary">Reset</b-button>
        </form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});

export default {
  name: "RegisterEmployee",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        number: "",
        location: null,
        selected: "",
        qualification: "",
        password: "",
        confirmPassword: "",
      },
      locations: [
        { text: "Select One", value: null },
        "Mumbai",
        "Calcutta",
        "Delhi",
        "Gurgaon",
        "Bangalore",
        "Vadodara",
      ],
      grades: ["1", "2", "3", "4"],
    };
  },
  methods: {
    onSubmit() {
      alert("Form has been submitted!");
    },
    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity();
    //   this.nameState = valid;
    //   return valid;
    // },
    // resetModal() {
    //   this.name = "";
    //   this.nameState = null;
    // },
    // handleOk(bvModalEvt) {
    //   // Prevent modal from closing
    //   bvModalEvt.preventDefault();
    //   // Trigger submit handler
    //   this.handleSubmit();
    // },
    // handleSubmit() {
    //   // Exit when the form isn't valid
    //   if (!this.checkFormValidity()) {
    //     return;
    //   }
    //   // Push the name to submitted names
    //   this.submittedNames.push(this.name);
    //   // Hide the modal manually
    //   this.$nextTick(() => {
    //     this.$bvModal.hide("modal-prevent-closing");
    //   });
    // },
  },
};
</script>