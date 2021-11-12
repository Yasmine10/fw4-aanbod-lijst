<template>
	<div>
		<h1 class="h1">Aanbod te koop</h1>
		<HouseCard />
	</div>
</template>

<script>

import HouseCard from "@/components/HouseCard";
export default {
	name: 'App',
	components: {HouseCard}
}
</script>

<style lang="scss">

@use './assets/styles/main';

</style>
