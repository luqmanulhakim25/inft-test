<template>
  <div>
    <div class="d-flex align-center justify-space-between mb-4">
      <v-btn class="text-capitalize" plain rounded depressed link to="/">
        <v-icon>mdi-chevron-left</v-icon>
        Back to List
      </v-btn>

      <v-btn
        depressed
        rounded
        class="green white--text text-capitalize"
        :disabled="isDisabledBtn"
        @click="onAdd()"
      >
        Submit</v-btn
      >
    </div>

    <application-tabs
      class="mb-8"
      :tabs="items.tabs"
      :tabActive="state.tabActive"
      @on:tab="onChangeTab"
    />

    <v-form ref="form" lazy-validation v-model="state.isValid">
      <form-application-business :form="form" v-if="isBusinessTab" />
      <form-application-personal
        :form="form"
        v-if="isPersonalProfileTab"
        :nationality="items.countries"
      />
      <form-application-account :form="form" v-if="isAccountTab" />
      <form-application-payment :form="form" v-if="isPaymentTab" />
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      businessProfile: {
        companyName: "",
        companyRegistrationNumber: "",
        companyIncorporatedDate: "",
        natureOfBusiness: "",
        designationOfApplicant: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        postalCode: "",
        city: "",
        countryOfBusiness: "",
      },
      personalProfile: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phone: {
          code: "",
          phoneNumber: "",
        },
        nric: "",
        nationality: "",
        dateOfBirth: "",
        countryOfIssuance: "",
        gender: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        postalCode: "",
        city: "",
        countryOfBusiness: "",
      },
      accountDetails: {
        annualTurnovers: "",
        employees: "",
        businessDescription: "",
      },
      paymentDetails: {
        monthlyPaymentsCount: "",
        monthlyPaymentsAmount: "",
        paymentsToIndividuals: "",
        intendedUse: "",
        paymentPurposes: "",
        sectors: "",
        primaryCountry: "",
        currencyPair: "",
      },
      uuid: "",
      last_update: "",
    },
    items: {
      tabs: [
        "Business Profile",
        "Personal Profile",
        "Account Details",
        "Payment Details",
      ],
      countries: [],
    },
    state: {
      tabActive: 0,
      isValid: true,
    },
  }),

  created() {
    this.fetch();
  },

  computed: {
    isBusinessTab() {
      return this.state.tabActive === 0;
    },

    isPersonalProfileTab() {
      return this.state.tabActive === 1;
    },

    isAccountTab() {
      return this.state.tabActive === 2;
    },

    isPaymentTab() {
      return this.state.tabActive === 3;
    },

    isDisabledBtn() {
      return (
        !this.form.businessProfile.companyName ||
        !this.form.businessProfile.companyRegistrationNumber ||
        !this.form.personalProfile.firstName ||
        !this.form.personalProfile.lastName ||
        !this.form.personalProfile.emailAddress ||
        !this.form.personalProfile.phone.phoneNumber ||
        !this.form.personalProfile.nationality
      );
    },
  },

  methods: {
    async fetch() {
      let res = await this.$axios.get(
        "https://apiuat.inft.co/api/v1/countries?sort=name+ASC"
      );

      if (res.status === 200) {
        this.items.countries = res.data.countries;
      }

      if (res.status !== 200) {
        console.log(res);
      }
    },

    onChangeTab(i) {
      this.state.tabActive = i;
    },

    onAdd() {
      this.$refs.form.validate();

      // generate UUID
      let dateTime = new Date().getTime();
      let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (dateTime + Math.random() * 16) % 16 | 0;
          dateTime = Math.floor(dateTime / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );

      this.form.last_update = this.$dayjs(new Date()).format(
        "DD MMM YYYY hh:mm"
      );
      this.form.uuid = uuid;
      if (this.state.isValid) {
        this.$store.dispatch("onCreate", this.form);
        this.$router.push("/");
      }
    },
  },
};
</script>
