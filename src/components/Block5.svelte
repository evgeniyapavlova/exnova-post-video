<script>
	import Button_50 from './Button_50.svelte';

	export let content, btn;
	const { text1, text2 } = content;
</script>

<div class="wrap">
	<div class="container">
		<div class="inner-container">
			<div class="text1">
				{text1}
			</div>
			<div class="text2">{text2}</div>
			<Button_50 text={btn} />
		</div>
	</div>
</div>

<style>
	.wrap {
		padding: 120px 0;
		border-bottom: 1px solid rgb(214, 223, 231);
	}
	.inner-container {
		background-color: var(--color-bg-0);
		padding: 100px 48px;
		border-radius: 40px;
		color: #fff;
		background-image: url('/src/lib/images/bgr_block_5.webp');
		background-position: 100% 40%;
		background-size: 650px;
		background-repeat: no-repeat;
	}
	.text1 {
		font-size: 24px;
		line-height: 1.3;
		margin-bottom: 12px;
		font-weight: 600;
		max-width: calc(100% - 600px);
	}
	.text2 {
		font-weight: 700;
		font-size: 40px;
		line-height: 1.2;
		margin-bottom: 24px;
	}

	@media only screen and (max-width: 1400px) {
		.wrap {
			padding: 96px 0;
		}
	}

	@media only screen and (max-width: 1150px) {
		.inner-container {
			background-position: 100% 100%;
			background-size: 55%;
		}
		.text1 {
			max-width: 45%;
		}
	}

	@media only screen and (max-width: 1100px) {
		.wrap {
			padding: 60px 0;
		}
		.inner-container {
			padding: 80px 48px;
		}
	}

	@media only screen and (max-width: 930px) {
		.inner-container {
			background-size: 46%;
		}

		.text1 {
			max-width: 54%;
		}

		.inner-container {
			padding-top: 60px;
			padding-bottom: 60px;
		}
	}

	@media only screen and (max-width: 700px) {
		.text1 {
			font-size: 18px;
		}
		.text2 {
			font-size: 28px;
		}
	}

	@media only screen and (max-width: 630px) {
		.text1 {
			max-width: 100%;
		}
		.inner-container {
			padding: 32px 24px 70%;
			background-size: 100%;
		}
		.wrap {
			padding: 64px 0;
		}
		.inner-container {
			text-align: center;
		}
	}
</style>
