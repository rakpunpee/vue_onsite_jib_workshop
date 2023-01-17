<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :width="270"
    :collapsedWidth="60"
    :trigger="null"
    collapsible
    style="
      background: url(src/assets/bg-menu-2.png);
      background-color: #213140 !important;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <img
      @click="toggleCollapse"
      :class="collapsed ? 'p-2' : 'p-0'"
      :src="
        collapsed
          ? 'src/assets/pospos_logo.png'
          : 'src/assets/05-banner-vuejs.png'
      "
      alt=""
      style="width: 100%"
    />

    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      style="background-color: transparent"
    >
      <!-- Stock Menu -->
      <a-menu-item key="1" @click="$router.push('/stock')">
        <template #icon>
          <CodepenOutlined style="color: white" />
        </template>
        <span>Stock</span>
      </a-menu-item>
      <!-- Shop Menu -->
      <a-menu-item key="2" @click="$router.push('/shop')">
        <template #icon>
          <ShoppingCartOutlined style="color: white" />
        </template>
        <span>Shop</span>
      </a-menu-item>
      <!-- Report Menu -->
      <a-menu-item key="3" @click="$router.push('/report')">
        <template #icon>
          <LineChartOutlined style="color: white" />
        </template>
        <span>Report</span>
      </a-menu-item>
      <!-- Transaction Menu -->
      <a-menu-item key="4" @click="$router.push('/transaction')">
        <template #icon>
          <MoneyCollectOutlined style="color: white" />
        </template>
        <span>Transaction</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, watch } from "vue";
import {
  CodepenOutlined,
  ShoppingCartOutlined,
  LineChartOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  props: ["collapsed"],
  emits: ["update:collapsed"],
  components: {
    CodepenOutlined,
    ShoppingCartOutlined,
    LineChartOutlined,
    MoneyCollectOutlined,
  },

  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();

    watch(
      () => route.path,
      (path) => {
        if (path.includes("stock")) {
          selectedKeys.value = ["1"];
        } else if (path.includes("shop")) {
          selectedKeys.value = ["2"];
        } else if (path.includes("report")) {
          selectedKeys.value = ["3"];
        } else if (path.includes("transaction")) {
          selectedKeys.value = ["4"];
        }
      }
    );

    const selectedKeys = ref<string[]>(["0"]);
    watchEffect(() => console.log(selectedKeys.value));

    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };

    return { selectedKeys, toggleCollapse };
  },
});
</script>

<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 0px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #e418ff;
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
