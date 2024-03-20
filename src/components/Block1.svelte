<script>
	import LazyImage from './LazyImage.svelte';

	import Button_50 from './Button_50.svelte';
	import LogoSvg from './svg/LogoSvg.svelte';

	import yellow_img from '$lib/images/yellow.png';
	import pink_img from '$lib/images/pink.png';
	import violet_img from '$lib/images/violet.png';

	import webp_id from '$lib/images/id_header_img_x2.webp';
	import jpg_id from '$lib/images/id_header_img_x2.jpg';

	import webp_pt from '$lib/images/pt_header_img_x2.webp';
	import jpg_pt from '$lib/images/pt_header_img_x2.jpg';

	import webp_es from '$lib/images/es_header_img_x2.webp';
	import jpg_es from '$lib/images/es_header_img_x2.jpg';

	export let content, btn, lang;
	const { h1, h1_span, h2, income } = content;

	const images_map = {
		en: {
			webp: webp_es,
			jpg: jpg_es
		},
		es: {
			webp: webp_es,
			jpg: jpg_es
		},
		id: {
			webp: webp_id,
			jpg: jpg_id
		},
		pt: {
			webp: webp_pt,
			jpg: jpg_pt
		}
	};
</script>

<div class="block_1">
	<div class="container">
		<div class="inner-container">
			<div class="title">
				<h1>
					{@html h1}
					<br /><span>{@html h1_span}</span>
				</h1>
				<h2>
					{@html h2}
				</h2>
				<Button_50 text={btn} />
			</div>
			<div class="video-preview">
				<div class="picture-wrap-header">
					<picture>
						<source srcset={images_map[lang].webp} type="image/webp" />
						<LazyImage alt="The girl with a laptop" src={images_map[lang].jpg} />
					</picture>
				</div>

				<LazyImage src={yellow_img} alt="Yellow icon" className="abs-img img-yellow" />

				<LazyImage src={pink_img} alt="Pink icon" className="abs-img img-pink" />

				<LazyImage src={violet_img} alt="Violet icon" className="abs-img img-violet" />

				<div class="income-block">
					<div class="logo-wrap">
						<LogoSvg height={26} width={26} />
					</div>
					<div class="text">
						<div class="text-money">$15</div>
						<p>{income}</p>
					</div>
				</div>
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

	.picture-wrap-header {
		border-radius: 35px;
		width: 340px;
		height: 510px;
		overflow: hidden;
		z-index: 1;
		position: relative;
		background-color: rgba(255, 255, 255, 0.2);
	}

	.video-preview {
		position: relative;
	}

	h2 {
		line-height: 1.5;
		color: var(--color-h2);
		font-size: 19px;
		font-weight: 300;
		max-width: 660px;
		margin-bottom: 32px;
	}

	.title {
		padding-bottom: 48px;
		text-align: center;
	}

	.income-block {
		width: 150px;
		height: 68px;
		background-color: #fff;
		border-radius: 12px;
		position: absolute;
		top: 33%;
		z-index: 1;
		left: -30px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 12px;
		box-sizing: border-box;
		transition: left 0.2s;
	}

	.income-block .logo-wrap {
		width: 42px;
		height: 42px;
		background-color: #eaeaea;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.income-block .text {
		padding-left: 10px;
	}

	.income-block .text-money {
		color: #0d1d2d;
		font-weight: 700;
		margin-bottom: 2px;
	}

	.income-block p {
		color: #808d9a;
		font-size: 12px;
	}

	@media only screen and (max-width: 799px) {
		.video-preview {
			display: none;
		}
	}
	@media only screen and (min-width: 800px) {
		.title {
			padding-bottom: 0;
			text-align: left;
			padding-right: 120px;
		}

		.block_1 {
			padding-top: 120px;
			padding-bottom: 64px;
		}

		.inner-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	@media only screen and (min-width: 1000px) {
		.video-preview {
			padding-right: 40px;
		}
		.income-block {
			left: -50px;
		}
	}

	@media only screen and (min-width: 1200px) {
		h1 {
			font-size: 64px;
		}
		.inner-container {
			align-items: flex-start;
		}
		.block_1 {
			padding-top: 150px;
		}
	}

	@media only screen and (min-width: 1300px) {
		.video-preview {
			padding-right: 80px;
		}
		.income-block {
			left: -105px;
		}
	}
</style>
