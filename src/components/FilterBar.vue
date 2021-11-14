<template>
	<div class="filters">
		<div class="filters__container container">
			<div class="select-group">
				<label class="select-label">Type</label>
				<select v-model="types.selectedType">
					<option value="Alle types">Alle types</option>
					<option v-for="(type, index) in types.list" :key="index" :value="type">{{ type }}</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label class="select-label">Gemeente</label>
				<select v-model="locations.selectedLocation">
					<option value="Selecteer gemeente">Selecteer gemeente</option>
					<option v-for="(location, index) in locations.list" :key="index" :value="location">{{ location }}</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label class="select-label">Slaapkamers</label>
				<select v-model="bedrooms.selectedBedroomNr">
					<option value="Aantal slaapkamers">Aantal slaapkamers</option>
					<option v-for="(bedroomNr, index) in bedrooms.list" :key="index" :value="bedroomNr">{{ bedroomNr }}</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label class="select-label">Sorteren</label>
				<select v-model="sortingOptions.selectedOption">
					<option v-for="(option, index) in sortingOptions.list" :key="index" :value="option">{{ option }}</option>
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
			types: {
				list: type,
				selectedType: "",
			},
			locations: {
				list: [
					"Putte",
					"Heist-op-den-Berg",
					"Schriek",
				],
				selectedLocation: "",
			},
			bedrooms: {
				list: [
					2, 3,
				],
				selectedBedroomNr: "",
			},
			sortingOptions: {
				list: [
					"Meest recent",
					"Prijs van laag naar hoog",
					"Prijs van hoog naar laag",
				],
				selectedOption: ""
			}
		}
	},
	created() {
		this.types.selectedType = "Alle types";
		this.locations.selectedLocation = "Selecteer gemeente";
		this.bedrooms.selectedBedroomNr = "Aantal slaapkamers";
		this.sortingOptions.selectedOption = this.sortingOptions.list[0];
	}
	
}
</script>

<style scoped lang="scss">

@use '../assets/styles/abstracts/mixins' as *;

.filters {
	display: flex;
	
	margin-block: 1rem;
	padding-block: 0.5rem 1rem;
	
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