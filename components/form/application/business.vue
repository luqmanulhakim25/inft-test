<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.companyName"
          outlined
          hide-details="auto"
          label="Company Name"
          :rules="[required]"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.companyRegistrationNumber"
          outlined
          hide-details="auto"
          label="Company Registration No."
          :rules="[required]"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          type="date"
          v-model="form.businessProfile.companyIncorporatedDate"
          outlined
          hide-details="auto"
          label="Company Incoporated Date"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.natureOfBusiness"
          outlined
          hide-details="auto"
          label="Nature of Business"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.designationOfApplicant"
          outlined
          hide-details="auto"
          label="Designation of Applicant"
          dense
        />
      </v-col>
    </v-row>
    <v-divider class="my-10" />
    <v-row>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.addressLine1"
          outlined
          hide-details="auto"
          label="Address Line 1"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.addressLine2"
          outlined
          hide-details="auto"
          label="Address Line 2"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.addressLine3"
          outlined
          hide-details="auto"
          label="Address Line 3"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.city"
          outlined
          hide-details="auto"
          label="City"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.countryOfBusiness"
          outlined
          hide-details="auto"
          label="Country of Business"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.businessProfile.postalCode"
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
  },
  mixins: [utils],
};
</script>
