<template>
  <div>
    <action-master
      @on:add="onAdd"
      @on:refresh="onRefresh"
      @on:search="onSearch"
    />
    <v-data-table
      :headers="headers"
      :items="itemData"
      :items-per-page="paging.per_page"
      :hide-default-footer="true"
      class="elevation-1 mt-14"
    >
      <template v-slot:[`item.no`]="{ index }">
        <div class="py-10">
          {{ index + 1 }}
        </div>
      </template>
      <template v-slot:[`item.user`]="{ item }">
        <p>Name: {{ getName(item.personalProfile) }}</p>
        <p>Email: {{ item.personalProfile.emailAddress }}</p></template
      >
      <template v-slot:[`item.business`]="{ item }">
        <p>Company Name: {{ item.businessProfile.companyName }}</p>
        <p>
          Registration No: {{ item.businessProfile.companyRegistrationNumber }}
        </p></template
      >

      <template v-slot:[`item.application`]="{ item }">
        <p>Company Name: {{ item.businessProfile.companyName }}</p>
        <p>Email: {{ item.personalProfile.emailAddress }}</p>
        <p>NRIC: {{ item.personalProfile.nric }}</p>
        <p>
          Phone: {{ item.personalProfile.phoneCode }}
          {{ item.personalProfile.phoneNumber }}
        </p>
      </template>
      <template v-slot:[`item.status`]> PENDING </template>
    </v-data-table>

    <div class="d-flex justify-end mt-6">
      <p class="text--default d-flex align-center mr-3 dark--text">
        Total Records :{{ getTotalItems }}
      </p>

      <v-pagination
        color="green"
        v-model="paging.page"
        circle
        :total-visible="5"
        :length="getTotalPage"
        @input="onChangePagination"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: "No", align: "center", sortable: false, value: "no" },
      { text: "User Details", value: "user", sortable: false },
      { text: "Business Details", value: "business", sortable: false },
      { text: "Application Data", value: "application", sortable: false },
      { text: "Activation UUID", value: "uuid", sortable: false },
      { text: "Status", value: "status", sortable: false },
      { text: "Last Updated", value: "last_update", sortable: false },
      { text: "...", value: "more", sortable: false },
    ],
    paging: {
      page: 1,
      per_page: 5,
    },
    search: "",
  }),

  computed: {
    itemData() {
      let page_size = this.paging.per_page;
      let page_number = this.paging.page;

      const insensitive = new RegExp(this.search?.replace(/\\/g, "\\\\"), "i");
      let filterEmail = this.applicationItems?.filter((item) => {
        return item.personalProfile.emailAddress?.match(insensitive);
      });

      return filterEmail?.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    },

    getTotalItems() {
      return this.applicationItems?.length;
    },

    getTotalPage() {
      return Math.ceil(this.getTotalItems / this.paging.per_page);
    },

    applicationItems() {
      return this.$store.state.applications;
    },
  },

  methods: {
    getName(val) {
      return `${val.firstName} ${val.lastName}`;
    },

    onAdd() {
      console.log("onadd");
      this.$router.push("/application/create");
    },

    onRefresh() {
      this.$store.dispatch("onRefresh");
    },

    onSearch(val) {
      this.paging.page = 1;
      this.search = val;
    },

    onChangePagination(page) {
      this.paging.page = page;
    },
  },
};
</script>
