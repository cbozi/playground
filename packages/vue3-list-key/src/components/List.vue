<template>
  <ul>
    <ListItem v-for="(item, i) in list" :list="list" :index="i" @click="remove(item)" :key="item.id"></ListItem>
  </ul>
  <button @click="add">add</button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ListItem from "./ListItem.vue";

export default defineComponent({
  components: { ListItem },
  setup() {
    const list = ref<any>([]);
    const add = () => list.value.push({ id: list.value.length });
    const remove = (item: number) => {
      list.value = list.value.filter((i:any) => i.id !== item.id);
    };
    return {
      list,
      add,
      remove,
    };
  },
});
</script>
