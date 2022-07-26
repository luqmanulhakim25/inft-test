<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.paymentDetails.monthlyPaymentsCount"
          outlined
          hide-details="auto"
          label="Monthly Payments Count"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.paymentDetails.monthlyPaymentsAmount"
          outlined
          hide-details="auto"
          label="Monthly Payments Amount"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-checkbox
          v-model="form.paymentDetails.paymentsToIndividuals"
          outlined
          hide-details="auto"
          label="Payments To Individuals"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.paymentDetails.intendedUse"
          outlined
          hide-details="auto"
          label="Intended Use"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.paymentDetails.paymentPurposes"
          outlined
          hide-details="auto"
          label="Payment Purposes"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.paymentDetails.sectors"
          outlined
          hide-details="auto"
          label="Sectors"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.paymentDetails.primaryCountry"
          outlined
          hide-details="auto"
          label="PrimaryCountry"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.paymentDetails.currencyPair"
          outlined
          hide-details="auto"
          label="Currency Pair"
          dense
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    form: Object,
  },
};
</script>
