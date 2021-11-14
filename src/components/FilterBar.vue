<template>
	<div class="filters">
		<div class="filters__container container">
			<div class="select-group">
				<label class="select-label">Type</label>
				<select>
					<option>Alle types</option>
					<option>Huis</option>
					<option>Charmant huis</option>
					<option>Appartement</option>
					<option>Boerderij</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label class="select-label">Gemeente</label>
				<select>
					<option>Selecteer gemeente</option>
					<option>Putte</option>
					<option>Heist-op-den-berg</option>
					<option>Schriek</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label class="select-label">Slaapkamers</label>
				<select>
					<option>Aantal slaapkamers</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
			<div class="select-group">
				<label class="select-label">Sorteren</label>
				<select>
					<option>Meest recent</option>
					<option>Laagste prijs eerst</option>
					<option>Hoogste prijs eerst</option>
				</select>
				<div class="custom-arrow"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FilterBar"
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