<template>
  <div class="d-flex align-center">
    <p class="text--small mr-3 text-capitalize dark--text text--lighten-4">
      {{ label }}
    </p>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined rounded v-bind="attrs" v-on="on">
          <span class="dark--text">{{ isActive }}</span>
          <span v-on="on" class="d-flex my-auto">
            <v-icon v-bind="attrs" size="16">mdi-chevron-down</v-icon>
          </span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in list" :key="index">
          <v-list-item-title class="pointer" @click="onSetActive(item)">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => "Semua",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    active: String,
    label: String,
    list: Array,
  },

  methods: {
    onSetActive(val) {
      this.$emit("set:active", val);
    },

    onClear() {
      this.$emit("on:clear");
    },
  },

  computed: {
    isActive() {
      let name = this.name;
      let list = this.list.find((x) => x.key === this.active);

      if (list && list.name) {
        name = list.name;
      }

      return name;
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-input {
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transition: 0.2s ease-in-out;
    background: #aaaaaa05 !important;
  }
}
</style>
