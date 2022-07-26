<template>
  <div class="d-sm-flex align-center">
    <form-text-field
      v-model="search"
      outlined
      dense
      hide-details
      placeholder="Search by User email"
      @input="onEmitSearch()"
    />

    <form-dropdown class="mr-4" :list="sort" :active="sortKey" />

    <v-spacer></v-spacer>
    <v-btn
      rounded
      depressed
      class="primary text-capitalize white--text"
      @click="onEmitRefresh()"
    >
      <v-icon>mdi-refresh</v-icon>
      Refresh
    </v-btn>
    <v-btn
      rounded
      depressed
      class="green ml-sm-4 text-capitalize white--text"
      @click="onEmitAdd()"
    >
      <v-icon>mdi-plus</v-icon>
      Add New
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    sort: [{ name: "PENDING", key: "PENDING" }],
    sortKey: "PENDING",
    search: "",
  }),
  methods: {
    onEmitSearch() {
      this.$emit("on:search", this.search);
    },

    onEmitAdd() {
      console.log("add");
      this.$emit("on:add");
    },

    onEmitRefresh() {
      this.$emit("on:refresh");
    },
  },
};
</script>
