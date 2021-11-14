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
@use 'sass:map';
@use '../assets/styles/abstracts/mixins' as *;
@use '../assets/styles/abstracts/variables' as *;
@use '../assets/styles/base/fonts' as *;

.card {
	display: flex;
	flex-direction: column;
	
	height: 100%;
	
	padding: 3rem;
	
	color: var(--clr-bg);
	
	&__text {
		margin-top: auto;
		
		font-size: 20px;
		line-height: 1.429;
		
		@include mq(tablet) {
			font-size: 24px;
		}
		
		@include mq(desktop) {
			font-size: map.get($font-sizes, 'fs-28pt');
		}
	}
	
	&__icon img {
		width: 12px;
		margin-top: 2rem;
	}
}

</style>