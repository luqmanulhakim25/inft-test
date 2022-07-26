<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "FE Assessment Test - Luqmanul Hakim",
    };
  },
};
</script>
