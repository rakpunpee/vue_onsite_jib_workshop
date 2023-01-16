<template>
  <div>
    <a-form>
      <a-input
        type="text"
        placeholder="Username"
        :value="user.username"
      /><br />
      <a-input
        type="text"
        placeholder="Password"
        :value="user.password"
      /><br />
      <span>Debug: {{ user }}</span>
      <br />
      <button type="submit">Submit</button>
      <button type="button" @click="handleClear">Clear</button>
    </a-form>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, computed, ref } from "vue";
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
    const user = reactive<FormState>({
      username: "admin",
      password: "1234",
    });

    const username = ref("");

    const handleClear = () => {
      user.username = "";
      user.password = "";
    };

    return { user, handleClear, username };
  },
};
</script>

<style></style>
