<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <upload-outlined @click="handleUpdate" />
  </a-layout-header>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

import Menu from "@/components/core/Menu.vue";
export default defineComponent({
  emits: ["update"],
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    Menu,
  },
  setup(props, { emit }) {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const handleUpdate = () => {
      emit("update");
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(["4"]),
      onCollapse,
      onBreakpoint,
      handleUpdate,
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
