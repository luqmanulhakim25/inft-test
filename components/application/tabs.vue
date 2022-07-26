<template>
  <div class="d-flex gray pa-1 rounded-pill">
    <div
      class="tabs d-flex justify-space-around full-width"
      v-for="(item, index) in tabs"
      :key="index"
    >
      <div
        class="tabs__items py-2 full-width mx-2 rounded-pill text-center pointer"
        @click="onEmitChangeTab(index)"
        v-bind:class="{ white: index === tabActive }"
      >
        <p class="h8--supersmall">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    tabActive: Number,
  },

  methods: {
    onEmitChangeTab(i) {
      this.$emit("on:tab", i);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  // background-color: #f7f7fa;
  &__items {
  }
}
</style>
