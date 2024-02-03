<script>
	import Button_50 from './Button_50.svelte';

	export let text1, text2;
</script>

<div class="wrap">
	<div class="container">
		<div class="inner-container">
			<div class="text1">
				{text1}
			</div>
			<div class="text2">{text2}</div>
			<Button_50 />
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
		padding: 48px;
		border-radius: 40px;
		color: #fff;
		background-image: url('/src/lib/images/bgr_block_5.png');
		background-position: 100% 100%;
		background-size: 720px;
		background-repeat: no-repeat;
	}
	.text1 {
		font-size: 24px;
		line-height: 1.3;
		margin-bottom: 12px;
		font-weight: 600;
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
		.inner-container {
			background-size: 55%;
		}
	}

	@media only screen and (max-width: 1100px) {
		.wrap {
			padding: 60px 0;
		}
	}

	@media only screen and (max-width: 700px) {
		.text1 {
			font-size: 16px;
		}
		.text2 {
			font-size: 19px;
		}
	}

	@media only screen and (max-width: 630px) {
		.inner-container {
			padding: 32px 24px 120px;
            background-size: 100%;
		}
        .wrap {
			padding: 48px 0;
		}
	}
</style>
