<script>
	import item_1_img from '$lib/images/block_3_item_1.jpg';
	import item_2_img from '$lib/images/block_3_item_2.jpg';
	import item_3_img from '$lib/images/block_3_item_3.jpg';
	import item_4_img from '$lib/images/block_3_item_4.jpg';
	import LazyImage from './LazyImage.svelte';

	export let content;
	const { title, items } = content;

	let images = [item_1_img, item_2_img, item_3_img, item_4_img];
</script>

<div class="container block-3">
	<div class="title">{title}</div>
	<div class="wrap">
		{#each items as item, index}
			<div class="item item-block-3">
				<LazyImage src={images[index]} alt="Block 3 illustration {index + 1}" />
				{@html item}
			</div>
		{/each}
	</div>
</div>

<style>
	.title {
		color: #0d1d2d;
		line-height: 1.2;
		font-size: 40px;
		letter-spacing: -0.3px;
		margin-bottom: 48px;
		font-weight: 700;
		text-align: center;
	}
	.wrap {
		display: flex;
		gap: 16px 24px;
		justify-content: space-between;
		margin-bottom: 96px;
	}
	.item {
		width: 25%;
		color: rgb(255, 255, 255);
		font-weight: 600;
		letter-spacing: 0.1px;
		background-color: rgb(31, 188, 188);
		padding: 24px 24px 32px;
		border-radius: 24px;
		font-size: 19px;
		line-height: 1.47;
	}

	@media only screen and (max-width: 1100px) {
		.item {
			width: calc(50% - 64px);
			max-width: 300px;
		}
		.wrap {
			flex-wrap: wrap;
			gap: 32px 32px;
			justify-content: center;
			margin-bottom: 64px;
		}
	}

	@media only screen and (max-width: 630px) {
		.title {
			font-size: 30px;
		}
		.item {
			width: 100%;
		}
		.wrap {
			width: 100%;
		}
	}

	@media only screen and (max-width: 480px) {
		.item {
			max-width: 100%;
		}
	}
</style>
