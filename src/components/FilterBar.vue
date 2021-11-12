<template>
	<div class="filters">
		<div class="filters__container container">
			<div class="select-group">
				<label class="select-label">Type</label>
				<select>
					<option>Alle types</option>
				</select>
			</div>
			<div class="select-group">
				<label class="select-label">Gemeente</label>
				<select>
					<option>Selecteer gemeente</option>
				</select>
			</div>
			<div class="select-group">
				<label class="select-label">Slaapkamers</label>
				<select>
					<option>Aantal slaapkamers</option>
				</select>
			</div>
			<div class="select-group">
				<label class="select-label">Sorteren</label>
				<select>
					<option>Meest recent</option>
				</select>
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
	
	background-color: var(--clr-bg-filters);
	margin-block: 1rem;
	padding-block: 0.5rem 1rem;
	
	
	
	&__container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		
		@include mq(tablet) {
		
		}
		
		@include mq(desktop) {
			flex-direction: row;
			
			.select-group {
				&:nth-child(4) {
					margin-left: auto;
				}
			}
		}
		
		
		
		.select-label {
		
		}
	}
}

</style>