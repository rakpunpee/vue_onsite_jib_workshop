/* eslint-disable */
<template>
  <a-layout style="height: 100%">
    <Menu v-if="store.isLogged" v-model:collapsed="collapsed" />

    <a-layout>
      <Header v-if="store.isLogged" v-model:collapsed="collapsed" />
      <a-layout-content class="m-8">
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Header from "./components/core/Header.vue";
import Menu from "./components/core/Menu.vue";
import Content from "./components/core/Content.vue";
// import { useAppStore } from "./store/useAppStore";
export default defineComponent({
  components: {
    Header,
    Menu,
    Content,
  },
  setup() {
    const collapsed = ref<boolean>(false);
    // const store = useAppStore();

    onMounted(() => {
      // store.restoreLogin();
    });

    return {
      collapsed,
      // store,
    };
  },
});
</script>
