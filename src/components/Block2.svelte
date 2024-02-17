<script>
	import webp_img from '$lib/images/img_block_2.webp';
	import jpg_img from '$lib/images/img_block_2.png';

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
			<picture>
				<source srcset={webp_img} type="image/webp" />
				<img src={jpg_img} alt="Exnova logo" />
			</picture>
		</div>
	</div>
</div>

<style>
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
		max-width: 27%;
	}

	.right-block picture img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media only screen and (max-width: 1300px) {
		.right-block {
			max-width: 35%;
		}
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
		.right-block {
			margin: 0 auto;
			max-width: 70%;
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
