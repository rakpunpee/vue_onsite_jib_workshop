<template>
  <a-layout-sider
    :width="270"
    :collapsedWidth="60"
    :trigger="null"
    :collapsed="collapsed"
    @breakpoint="onBreakpoint"
  >
    <div
      @click="handleClickMenu"
      style="height: 32px; background: rgba(255, 0, 0, 1); margin: 16px"
    />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span class="nav-text">nav 12</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span class="nav-text">nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span class="nav-text">nav 3</span>
      </a-menu-item>
      <a-menu-item key="4">
        <user-outlined />
        <span class="nav-text">nav 4</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: ["collapsed"],
  emits: ["update:collapsed"],
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup(props, { emit }) {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const handleClickMenu = () => {
      emit("update:collapsed", !props.collapsed);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(["4"]),
      onCollapse,
      onBreakpoint,
      handleClickMenu,
    };
  },
});
</script>

<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>
