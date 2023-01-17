<template>
  <a-layout style="width: 1000px; height: 100%">
    <Menu />
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <upload-outlined />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          content
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
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
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    Menu,
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(["4"]),
      onCollapse,
      onBreakpoint,
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
