<template>
  <div>
    <h1>JIB</h1>
    <div>Tmp1: {{ tmp1 }}</div>
    <div>Tmp2: {{ tmp2 }}</div>
    <div>Tmp3: {{ tmp3 }}</div>
    <button v-on:click="handle1">Click1</button>
    <button @click="handle1">Click1</button>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const tmp1 = "lek";
    const tmp2 = 1;
    const tmp3 = true;

    function handle1() {
      alert("Hey1");
    }

    return { tmp1, tmp2, tmp3, handle1 };
  },
};
</script>

<style></style>
