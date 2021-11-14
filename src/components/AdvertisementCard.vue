<template>
	<a class="card">
		<p class="card__text">{{ item.text }}</p>
		<p class="card__icon"><img :src="arrow" alt="" /> </p>
	</a>
</template>

<script>
import arrow from '../assets/icons/arrow-right.svg';

export default {
	name: "AdvertisementCard",
	props: {
		item: {
			required: true,
			type: Object,
		},
	},
	data() {
		return {
			arrow: arrow,
		};
	},
}
</script>

<style scoped lang="scss">

@use '../assets/styles/abstracts/mixins' as *;
@use '../assets/styles/abstracts/variables' as *;

.card {
	display: flex;
	flex-direction: column;
	
	height: 100%;
	
	padding: 3rem;
	
	color: var(--clr-bg);
	
	
	
	&:hover {
		transform: scale(1.02);
		box-shadow: $box-shadow;
	}
	
	&:nth-child(1) {
		background-color: var(--clr-txt-accent);
	}
	
	&:nth-child(2) {
		background-color: var(--clr-txt-primary);
	}
	
	&__text {
		margin-top: auto;
		
		font-size: 28px;
		line-height: 1.429;
	}
	
	&__icon img {
		width: 12px;
		margin-top: 2rem;
	}
}

</style>