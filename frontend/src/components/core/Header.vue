/* eslint-disable no-debugger, no-console */

<template>
  <a-layout-header class="!pl-5 !pr-2 !bg-[#00a354]">
    <div style="display: flex; flex-direction: row; align-items: center">
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        style="color: white"
        @click="toggleCollapse"
      />
      <menu-fold-outlined
        v-else
        class="trigger"
        style="color: white"
        @click="toggleCollapse"
      />
      <span
        @click="store.remove"
        style="font-size: 25px; color: white; flex-grow: 1; margin-left: 16px"
        >Vue3 / NodeJS / Express / Mongo V.{{ version }}:{{ store.count }}</span
      >

      <a-button type="text" @click.prevent="onClickLogOff()">
        <LogoutOutlined style="color: white; font-size: 20px" />
        <span style="color: white; font-size: 20px; margin-left: 8px"
          >Logout</span
        >
      </a-button>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
// import { useCounterStore } from "@/stores/useCounterStore";
import { useAppStore } from "@/stores/useAppStore";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: ["collapsed"],
  emits: ["update:collapsed"],
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined,
  },
  setup(props, { emit }) {
    const store = useAppStore();

    function toggleCollapse() {
      emit("update:collapsed", !props.collapsed);
    }

    function onClickLogOff() {
      store.logout();
    }

    return {
      store,
      toggleCollapse,
      onClickLogOff,
      version: import.meta.env.VITE_VERSION,
    };
  },
});
</script>
<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
