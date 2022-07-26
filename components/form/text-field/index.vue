<template>
  <div>
    <p class="text-capitalize mb-2 dark--text" v-if="label">
      {{ label }}
    </p>

    <v-text-field
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="placeholder"
      class="rounded-pill"
    >
      <template v-slot:prepend v-if="prepend">
        <div
          class="text-field__prepend d-flex align-center justify-center gray rounded-lg"
        >
          <p class="black--text">{{ prependName }}</p>
        </div>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => "",
    },

    placeholder: {
      type: String,
      default: () => "Type Here",
    },
    prepend: {
      type: Boolean,
      default: () => false,
    },
    prependName: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.text-field__prepend {
  width: 61px;
}

.v-input--is-disabled {
  background-color: var(--v-gray-lighten3) !important;
}
</style>
