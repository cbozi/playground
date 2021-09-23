<template>
111
</template>
<script lang="ts">
import {defineComponent, watch} from 'vue'
export default defineComponent({
	props: ['something'],
	setup(props) {
		watch(() => props.something, (something)=>{
			console.log(something)
			debugger
		})
	}
})
</script>