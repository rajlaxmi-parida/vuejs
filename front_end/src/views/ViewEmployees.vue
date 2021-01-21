<template>
  <div>
    <RegisterEmployee ref="registerEmployee" />
    <b-container>
      <b-row> <b-col></b-col></b-row>
      <b-row>
        <b-col class="register-col text-right">
          <b-button
            v-b-modal.modal-register-employee
            @click="showRegisterModal()"
            lg="6"
            class="register"
            variant="success"
            >Register</b-button
          >
        </b-col>
      </b-row>
      <b-row><b-col></b-col></b-row>

      <b-row>
        <b-col>
          <MyVuetable class="mt-5"></MyVuetable>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RegisterEmployee from "../components/RegisterEmployee";
import MyVuetable from "../components/UserTable.vue";
export default {
  name: "ViewEmployee",
  components: {
    RegisterEmployee,
    MyVuetable,
  },
  methods: {
    registerEmployee() {
      this.$refs.registerEmployee.$bvModal.show("modal-register-employee");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/employee.scss";
</style>