import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counterStore", () => {
  const count = ref(0);
  function add() {
    count.value++;
  }

  function remove() {
    count.value--;
  }

  return { count, add, remove };
});
