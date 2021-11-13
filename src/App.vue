<template>
	<div>
		<FilterBar />
		<h1 class="h1">Aanbod te koop</h1>
		<HouseCard />
	</div>
</template>

<script>

import HouseCard from "@/components/HouseCard";
import FilterBar from "@/components/FilterBar";
export default {
	name: 'App',
	components: {
		FilterBar,
		HouseCard
	}
}
</script>

<style lang="scss">

@use './assets/styles/main';

.h1 {
	margin-block: 1em;
}

</style>
