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
				<p class="card__bedroomsNr"><img :src="slpkIcon" alt="" /> {{ item.bedroomsNr }}</p>
				<div class="card__area">
					<img class="icon" :src="perceelIcon" alt="" />
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
			justify-content: flex-start;
		}
		
		.card__area {
		
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
		//flex-direction: row;
		//justify-content: flex-start;
		gap: 1.5rem;
	}
	
	&__bedroomsNr, &__area {
		display: flex;
		gap: 0.5rem;
	}
	
	&__bedroomsNr {
		//margin-right: 2rem;
	}
	
	&__area .icon {
		width: 20px;
		//width: 4rem;
		//display: flex;
	}
}

</style>