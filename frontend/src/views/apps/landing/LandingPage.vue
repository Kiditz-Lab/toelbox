<script setup lang="ts">
import VerticalHeaderVue from '@/layouts/dashboard/vertical-header/VerticalHeader.vue';
</script>
<template>
  <v-app :class="[]">
    <VerticalHeaderVue :is-logo="true" />
    <v-main class="ma-10">
      <v-container fluid>
        <v-row justify="start" align="center" class="hero-section">
          <v-col cols="12" md="6" class="text-left px-10">
            <h1 class="text-h3 font-weight-bold">Online Tools for Everyone</h1>
            <p class="text-subtitle-4 mt-3">
              Simplify your workflow with a powerful set of online tools designed for text, data, and image processing. Whether you need to
              format text, convert data, or edit images, our tools provide a <b>fast, reliable, and easy-to-use</b> experience.
            </p>
            <p class="text-subtitle-4 mt-2">
              No installation required—use everything <b>directly from your browser</b>. Boost your productivity with intuitive tools for
              developers, writers, designers, and professionals alike.
            </p>

            <v-btn color="primary" size="large" class="mt-4" to="/dashboard">Get Started</v-btn>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <img src="@/assets/images/maintenance/coming-soon.png" max-width="400" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
body {
  color: white;
}
.hero-section {
  height: 60vh;
  display: flex;
  align-items: center;
  background: #eee;
  /* color: white; */
  border-radius: 20px;
}
</style>
