<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.firstName"
          outlined
          hide-details="auto"
          label="First Name"
          dense
          :rules="[required]"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.lastName"
          outlined
          hide-details="auto"
          label="Last Name"
          :rules="[required]"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.emailAddress"
          outlined
          hide-details="auto"
          label="Email Address"
          :rules="[required, email]"
          dense
        />
      </v-col>
      <v-col cols="12" sm="2">
        <form-text-field
          v-model="form.personalProfile.phone.code"
          outlined
          hide-details="auto"
          label="Phone Code"
          readonly
          dense
        />
      </v-col>
      <v-col cols="12" sm="4">
        <form-text-field
          v-model="form.personalProfile.phone.phoneNumber"
          outlined
          hide-details="auto"
          label="Number"
          :rules="[required]"
          @keypress="onDigits"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.nric"
          outlined
          hide-details="auto"
          label="NRIC"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-autocomplete
          v-model="form.personalProfile.nationality"
          :items="nationality"
          item-text="name"
          item-value="id"
          outlined
          hide-details="auto"
          label="Nationality"
          dense
          :rules="[required]"
        />
      </v-col>
    </v-row>
    <v-divider class="my-10" />
    <v-row>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.dateOfBirth"
          type="date"
          outlined
          hide-details="auto"
          label="Date of Birth"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.countryOfIssuance"
          outlined
          hide-details="auto"
          label="Country of Issuance"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.gender"
          outlined
          hide-details="auto"
          label="Gender"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.addressLine1"
          outlined
          hide-details="auto"
          label="Address Line 1"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.addressLine2"
          outlined
          hide-details="auto"
          label="Address Line 2"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.addressLine3"
          outlined
          hide-details="auto"
          label="Address Line 3"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.city"
          outlined
          hide-details="auto"
          label="City"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.countryOfBusiness"
          outlined
          hide-details="auto"
          label="Country of Business"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.personalProfile.postalCode"
          outlined
          hide-details="auto"
          label="Postal Code"
          dense
          @keypress="onDigits"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import utils from "@/mixins/utils";
export default {
  props: {
    form: Object,
    nationality: Array,
  },
  mixins: [utils],

  watch: {
    "form.personalProfile.nationality"(val) {
      let selectedCountry = this.nationality?.find((x) => {
        return x.id === val;
      });

      this.form.personalProfile.phone.code = selectedCountry.phoneCode;
    },
  },
};
</script>
