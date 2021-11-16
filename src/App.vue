<template>
	<div>
		<header>
			<FilterBar />
		</header>
		<main>
			<h1 class="h1">Aanbod te koop</h1>
			<section class="card-container container" >
				<HouseCard v-for="(item, index) in items" :key="item.id" :style="{'grid-area': 'card'+ (index+1)}" :item="item"></HouseCard>
				<AdvertisementCard v-for="(add, index) in adds" :key="add.id" :style="{'grid-area': 'add'+(index+1)}" :item="add" :class="'add'+(index+1)"></AdvertisementCard>
			</section>
		</main>
	</div>
</template>

<script>
import { data } from '@/assets/data';
import FilterBar from "@/components/FilterBar";
import HouseCard from "@/components/HouseCard";
import AdvertisementCard from "@/components/AdvertisementCard";

export default {
	name: 'App',
	components: {
		AdvertisementCard,
		FilterBar,
		HouseCard
	},
	data() {
		return {
			items: data,
			adds: [
				{
					id: 1,
					text: "Uw eigendom verkopen? Vraag nu een gratis schatting aan!"
				},
				{
					id: 2,
					text: "U bent op zoek  naar een eigendom? Blijf op de hoogte van ons nieuwste aanbod!"
				}
			]
		};
	},
}
</script>

<style lang="scss">

@use './assets/styles/main';
@use './assets/styles/abstracts/mixins' as *;
@use './assets/styles/abstracts/variables' as *;

.h1 {
	margin-block: 2rem 3rem;
}

.card-container {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		"card1"
		"card2"
		"card3"
		"add1"
		"card4"
		"add2"
		"card5"
		"card6"
		"card7";
	gap: 1.5rem;
	
	margin-bottom: 5rem;
	
	@include mq(tablet) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"card1 card2"
			"card3 add1"
			"add2 card4"
			"card5 card6"
			"card7 ...";
	}

	@include mq(desktop) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			"card1 card2 card3"
			"add1 card4 add2"
			"card5 card6 card7";
	}
	
	.add1 {
		background-color: var(--clr-txt-accent);
	}
	
	.add2 {
		background-color: var(--clr-txt-primary);
	}
}

</style>
