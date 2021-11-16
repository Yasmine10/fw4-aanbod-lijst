<template>
	<div class="filters">
		<div class="filters__container container">
			<div class="select-group">
				<label for="types" class="select-label">Type</label>
				<select id="types" v-model="selectedType">
					<option name="type" value="Alle types">Alle types</option>
					<option name="type" v-for="(type, index) in types" :key="index" :value="type">{{ type }}</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label for="locations" class="select-label">Gemeente</label>
				<select id="location" v-model="selectedLocation">
					<option name="location" value="Selecteer gemeente">Selecteer gemeente</option>
					<option name="location" v-for="(location, index) in locations" :key="index" :value="location">{{ location }}</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label for="bedrooms" class="select-label">Slaapkamers</label>
				<select id="bedrooms" v-model="selectedBedroomNr">
					<option name="bedroomNr" value="Aantal slaapkamers">Aantal kamers</option>
					<option name="bedroomNr" v-for="(bedroomNr, index) in bedrooms" :key="index" :value="bedroomNr">{{ bedroomNr }}</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label for="sortingOptions" class="select-label">Sorteren</label>
				<select id="sortingOptions" v-model="selectedOption">
					<option name="sortingOption" v-for="(option, index) in sortingOptions" :key="index" :value="option">{{ option }}</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { type } from '@/assets/data';

export default {
	name: "FilterBar",
	data() {
		return {
			types: type,
			selectedType: "",
			locations: [
				"Putte",
				"Heist-op-den-Berg",
				"Schriek",
			],
			selectedLocation: "",
			bedrooms: [ 2, 3 ],
			selectedBedroomNr: "",
			sortingOptions: [
				"Meest recent",
				"Prijs van laag naar hoog",
				"Prijs van hoog naar laag",
			],
			selectedOption: "",
		}
	},
	created() {
		this.selectedType = "Alle types";
		this.selectedLocation = "Selecteer gemeente";
		this.selectedBedroomNr = "Aantal slaapkamers";
		this.selectedOption = this.sortingOptions[0];
	},
}
</script>

<style scoped lang="scss">

@use '../assets/styles/abstracts/mixins' as *;

.filters {
	display: flex;
	
	margin-top: 2rem;
	margin-bottom: 1rem;
	padding-block: 0.375rem 0.75rem;
	
	background-color: var(--clr-bg-filters);
	
	&__container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		
		@include mq(desktop) {
			flex-direction: row;
			
			.select-group {
				&:nth-child(4) {
					margin-left: auto;
				}
			}
		}
	}
}

</style>