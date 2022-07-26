<template>
  <div>
    <p
      class="text-capitalize mb-2 dark--text"
      v-if="label"
      v-bind:class="{ 'h7--xxsmall': bold, 'text--default': !bold }"
    >
      {{ label }}
    </p>

    <v-textarea
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="placeholder"
      no-resize
    >
      <template v-slot:prepend v-if="prepend">
        <div
          class="textarea__prepend d-flex align-center justify-center gray rounded-lg"
        >
          <p class="black--text">{{ prependName }}</p>
        </div>
      </template>
    </v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    bold: {
      type: Boolean,
      default: () => false
    },
    label: {
      type: String,
      default: () => ''
    },
    required: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: () => 'Type Here'
    },
    prepend: {
      type: Boolean,
      default: () => false
    },
    prependName: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea__prepend {
  width: 61px;
}
</style>
