<template>
  <ul>
    <ListItem v-for="(item, index) in list" :list="list" :index="index" @click="remove(index)" :key="item.id"></ListItem>
  </ul>
  <button @click="add">add</button>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeUpdate } from "vue";
import ListItem from "./ListItem.vue";

let maxId = 0

export default defineComponent({
  components: { ListItem },
  setup() {
    const list = ref<any[]>([]);
    const add = () => list.value.push({ id: maxId++ });
    const remove = (index: number) => {
      list.value.splice(index, 1)
    };

    onBeforeUpdate(() => {console.log('beforeUpdate List')})

    return {
      list,
      add,
      remove,
    };
  },
});
</script>
