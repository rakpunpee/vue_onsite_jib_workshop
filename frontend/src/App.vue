<template>
  <div>
    <Header />
    <Menu />
    <RouterView />
  </div>
</template>

<script lang="ts">
import Header from "@/components/core/Header.vue";
import Menu from "@/components/core/Menu.vue";
import Login from "@/views/Login.vue";

export default {
  components: { Header, Menu, Login },
  setup() {},
};
</script>

<style></style>
