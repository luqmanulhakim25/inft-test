<template>
  <div>
    <p class="text-capitalize mb-2 dark--text" v-if="label">
      {{ label }}
    </p>
    <v-autocomplete
      class="rounded-pill"
      :search-input.sync="search"
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="placeholder"
      hide-details
      @focus="active = true"
      @blur="active = false"
    >
      <template v-slot:prepend v-if="prepend">
        <v-icon
          v-bind:class="{
            'material-icons-outlined': prependOutline,
            'primary--text': active,
          }"
        >
          {{ $attrs["prepend-icon"] }}
        </v-icon>
      </template>

      <template v-slot:prepend-inner v-if="prependInner">
        <v-icon
          v-bind:class="{
            'material-icons-outlined': prependOutline,
            'primary--text': active,
          }"
        >
          {{ $attrs["prepend-inner-icon"] }}
        </v-icon>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  props: {
    bold: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      default: () => "",
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    placeholder: {
      type: String,
      default: () => "Type Here",
    },
    prepend: {
      type: Boolean,
      default: () => false,
    },
    prependInner: {
      type: Boolean,
      default: () => false,
    },
    prependOutline: {
      type: Boolean,
      default: () => false,
    },
  },

  data: () => ({
    search: "",
    active: false,
  }),

  watch: {
    search(val) {
      this.$emit("search:autocomplete", val);
    },
  },
};
</script>
