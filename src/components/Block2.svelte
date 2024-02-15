<script>
	import LogoSvg from './LogoSvg.svelte';
	import violet_2_img from '$lib/images/violet_2.png';
	import blue_img from '$lib/images/blue.png';

	export let content;
	const { title, highlight, text } = content;
</script>

<div class="container">
	<div class="inner-container">
		<div class="text">
			<div class="title">{title}</div>
			<div class="highlight">{@html highlight}</div>
			<div class="inner-text">{text}</div>
		</div>
		<div class="right-block">
			<img src={violet_2_img} alt="Violet icon" class="abs-img img-violet" />
			<img src={blue_img} alt="Blue icon" class="abs-img img-blue" />
			<div class="logo-image">
				<LogoSvg height={150} width={150} />
			</div>
		</div>
	</div>
</div>

<style>
	.img-violet {
		right: 7px;
		bottom: -24px;
		transform: rotate(180deg);
	}
	.img-blue {
		left: 13px;
		top: 37%;
		width: 50px;
	}
	.abs-img {
		position: absolute;
		z-index: 0;
	}
	.inner-container {
		padding: 48px;
		background-image: linear-gradient(228deg, rgb(174, 111, 252), rgb(89, 117, 255));
		color: #fff;
		display: flex;
		justify-content: space-between;
		border-radius: 40px;
		margin: 96px 0;
		gap: 16px;
		align-items: center;
	}
	.text {
		font-size: 19px;
		line-height: 1.47;
		max-width: 60%;
	}
	.title {
		line-height: 1.3;
		font-size: 24px;
		font-weight: 600;
	}
	.highlight {
		margin: 24px 0;
		padding: 8px 8px 10px 16px;
		border-radius: 16px 0px 16px 16px;
		background-color: rgb(145, 163, 243);
		font-weight: 600;
	}
	.right-block {
		position: relative;
	}
	.logo-image {
		width: 240px;
		height: 240px;
		background: #fff;
		border-radius: 60px;
		box-shadow:
			inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px,
			inset rgba(0, 0, 0, 0.3) -8px -8px 18px 5px;
		transform: skew(5deg, -6deg);
		margin: 0 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 1;
	}
	@media only screen and (max-width: 950px) {
		.inner-container {
			margin: 60px 0;
			display: block;
			padding-bottom: 80px;
		}
		.text {
			max-width: 100%;
			margin-bottom: 48px;
		}
		.logo-image {
			margin: 0 auto;
		}
	}

	@media only screen and (max-width: 600px) {
		.inner-container {
			margin: 48px 0;
		}
		.inner-container {
			padding: 48px 24px;
		}
		.right-block {
			display: none;
		}
		.text {
			margin-bottom: 0;
		}
	}
</style>
