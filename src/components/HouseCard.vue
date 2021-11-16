<template>
	<div class="card" >
		<img class="card__image" :src="getImagePath(item.img)" alt="" />
		<div class="card__content">
			<div class="card__title">
				<h2 class="card__location h2">{{ item.location }}</h2>
				<p class="card__price h2">&euro; {{ item.price }}</p>
			</div>
			<h3 class="card__type h3">{{ item.type }}</h3>
			<div class="card__info">
				<div class="card__bedroomsNr">
					<img :src="slpkIcon" alt="" />
					<p>{{ item.bedroomsNr }}</p>
				</div>
				<div class="card__area">
					<img v-if="item.id % 2 === 0" class="icon" :src="oppIcon" alt="" />
					<img v-else class="icon" :src="perceelIcon" alt="" />
					<p>{{ item.area }} m<sup>2</sup></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {imagePath} from '@/mixins/imagePath';

import SlpkIcon from '../assets/icons/slpk.svg';
import PerceelIcon from '../assets/icons/perceel.svg';
import OppIcon from '../assets/icons/opp.svg';

export default {
	name: "HouseCard",
	props: {
		item: {
			required: true,
			type: Object,
		}
	},
	mixins: [imagePath],
	data() {
		return {
			slpkIcon: SlpkIcon,
			perceelIcon: PerceelIcon,
			oppIcon: OppIcon,
		}
	},
}
</script>

<style scoped lang="scss">

.card {
	
	&:nth-child(2n) {
		.card__info {
			display: flex;
			flex-direction: row-reverse;
			justify-content: flex-end;
		}
	}
	
	&__content {
		display: flex;
		flex-direction: column;
		padding: 1rem 1rem 0.5rem 1rem;
	}
	
	&__title {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	
	&__location {
		padding-bottom: 0.25em;
	}
	
	&__info {
		margin-top: 1.25rem;
		display: flex;
		align-items: baseline;
		gap: 1.5rem;
	}
	
	&__bedroomsNr, &__area {
		display: flex;
		align-items: stretch;
		gap: 0.5rem;
	}
	
	&__area .icon {
		width: 1rem;
	}
}

</style>