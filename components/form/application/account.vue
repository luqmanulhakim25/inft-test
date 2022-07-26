<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.accountDetails.annualTurnovers"
          outlined
          hide-details="auto"
          label="Annual Turn Overs"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-field
          v-model="form.accountDetails.employees"
          outlined
          hide-details="auto"
          label="Employees"
          dense
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-text-area
          v-model="form.accountDetails.businessDescription"
          outlined
          hide-details="auto"
          label="businessDescription"
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
