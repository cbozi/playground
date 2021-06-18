<template>
	<div>{{uid}} {{list[index].id}} {{index}}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	props: ["list", 'index'],
	setup() {
		const uid = ref(Math.floor(Math.random() * 100))
		return {
			uid
		}
	},
})
</script>
