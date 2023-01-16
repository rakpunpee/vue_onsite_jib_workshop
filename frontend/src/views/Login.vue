<template>
  <div>
    <button @click="add">Count: {{ count }}</button>
    <div @click="clear">{{ user }}</div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";

export default {
  setup() {
    // let count = 0;
    const count = ref<number>(0);
    const user = reactive<any>({ username: "admin", password: "1234" });

    const clear = () => {
      user.username = "";
      user.password = "";
    };

    const add = () => {
      count.value = count.value + 1;
      console.log("count: " + count.value.toString());
    };

    return { count, user, add, clear };
  },
};
</script>

<style></style>
