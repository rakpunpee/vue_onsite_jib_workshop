<template>
  <div>
    <button>Count: {{ count }}</button>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    let count = 0;

    const add = () => {
      count = count + 1;
    };

    return { count, add };
  },
};
</script>

<style></style>
