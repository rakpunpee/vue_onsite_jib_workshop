<template>
  <a-layout style="width: 1000px; height: 100%">
    <Menu v-model:collapsed="collapsed" />
    <a-layout>
      <Header @update="toggle" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <Content />
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

import Content from "@/components/core/Content.vue";
import Header from "@/components/core/Header.vue";
import Menu from "@/components/core/Menu.vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    Menu,
    Header,
    Content,
  },
  setup() {
    const collapsed = ref(false);

    const toggle = () => {
      collapsed.value = !collapsed.value;
    };

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
      collapsed,
      toggle,
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
