<template>
	<div class="card" >
		<img class="card__image" :src="getImagePath(item.img)" alt="" />
		<div class="card__content">
			<div class="card__title">
				<h2 class="card__location h2">{{ item.location }}</h2>
				<p class="card__price h2">&euro; {{ item.price }}</p>
			</div>
			<h3 class="card__type h3">{{ item.type }}</h3>
			<div style="margin-top: 1.25rem; ">
				<p class="card__bedroomsNr"><img :src="slpkIcon" alt="" /> {{ item.bedroomsNr }}</p>
				<p class="card__area"><img :src="perceelIcon" alt="" />  <span>{{ item.area }} m<sup>2</sup></span></p>
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
	
	&__bedroomsNr, &__area {
		display: inline-flex;
		gap: 0.5rem;
	}
	
	&__bedroomsNr {
		margin-right: 2rem;
	}
}

</style>