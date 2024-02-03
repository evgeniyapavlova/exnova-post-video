<script>
	import Button_50 from './Button_50.svelte';

	import block_1_img from '$lib/images/block_1_img.png';
	import yellow_img from '$lib/images/yellow.png';
	import pink_img from '$lib/images/pink.png';
	import violet_img from '$lib/images/violet.png';
	import income_img from '$lib/images/income.png';

	export let h1, h1_span, h2_1, h2_2, h2_3;
</script>

<div class="block_1">
	<div class="container">
		<div class="inner-container">
			<div class="title">
				<h1>
					{@html h1}
					<br /><span>{h1_span}</span>
				</h1>
				<h2>
					{h2_1}
					<span>{h2_2}</span>
					{h2_3}
				</h2>
				<Button_50 />
			</div>
			<div class="video-preview">
				<img src={block_1_img} class="main-img" alt="Woman with the phone and the laptop" />
				<img src={yellow_img} alt="Yellow icon" class="abs-img img-yellow" />
				<img src={pink_img} alt="Pink icon" class="abs-img img-pink" />
				<img src={violet_img} alt="Violet icon" class="abs-img img-violet" />
				<img src={income_img} alt="Your Income" class="img-income" />
			</div>
		</div>
	</div>
</div>

<style>
	.block_1 {
		background-color: var(--color-bg-0);
		padding: 120px 0 48px;
		border-bottom-left-radius: 40px;
		border-bottom-right-radius: 40px;
	}
	h1 {
		color: #fff;
		font-size: 48px;
		line-height: 1.125;
		letter-spacing: -0.3px;
		font-weight: 700;
		margin-bottom: 10px;
		position: relative;
		z-index: 1;
	}
	h1 span {
		color: var(--color-exnova-highlight);
	}

	.main-img {
		width: 342px;
		border-radius: 35px;
		position: relative;
		z-index: 1;
	}
	.video-preview {
		position: relative;
	}
	.abs-img {
		position: absolute;
		z-index: 0;
	}
	.img-yellow {
		max-width: 140px;
		left: -67px;
		top: -61px;
	}
	.img-pink {
		max-width: 150px;
		left: -155px;
		top: -32px;
	}
	.img-violet {
		max-width: 96px;
		right: 45px;
		bottom: -34px;
	}
	h2 {
		line-height: 1.5;
		color: var(--color-h2);
		font-size: 19px;
		font-weight: 300;
		max-width: 660px;
		margin-bottom: 32px;
	}

	h2 span {
		color: #fff;
	}

	.img-income {
		position: absolute;
		width: 150px;
		left: -30px;
		z-index: 1;
		top: 33%;
		transition: left 0.2s;
	}

	.title {
		padding-bottom: 48px;
		text-align: center;
	}

	@media only screen and (max-width: 799px) {
		.video-preview {
			position: absolute;
			transform: scale(0.7);
			transform-origin: top;
			right: -16px;
		}
	}
	@media only screen and (min-width: 800px) {
		.title {
			padding-bottom: 0;
			text-align: left;
			padding-right: 120px;
		}

		.block_1 {
			padding-top: 150px;
		}

		.inner-container {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}
	}

	@media only screen and (min-width: 1000px) {
		.video-preview {
			padding-right: 40px;
		}
		.img-income {
			left: -50px;
		}
		h1 {
			font-size: 64px;
		}
	}

	@media only screen and (min-width: 1300px) {
		.video-preview {
			padding-right: 80px;
		}
		.img-income {
			left: -105px;
		}
	}
</style>
