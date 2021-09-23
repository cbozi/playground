<template>
	<div>{{uid}} {{list[index].id}} {{index}}</div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
	props: ["list", 'index'],
	setup(props) {
		const uid = ref(Math.floor(Math.random() * 100))

		watchEffect(() => {console.log(props.index, props.list[props.index])})

		return {
			uid
		}
	},
})
</script>
