<template>
  <div>
    <form>
      <input type="text" placeholder="Username" /><br />
      <input type="text" placeholder="Password" /><br />
      <button>Submit</button>
      <button>Clear</button>
    </form>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, computed } from "vue";
import type { UnwrapRef } from "vue";
import type { FormProps } from "ant-design-vue";
// import type { User } from "@/models/user.model";
// import { useAppStore } from "@/store/useAppStore";
interface FormState {
  username: string;
  password: string;
}

export default {
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    return {};
  },
};
</script>

<style></style>
