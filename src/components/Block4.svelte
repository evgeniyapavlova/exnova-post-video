<script>
	export let title, items, item3Title, item3Text, item3Points;
</script>

<div class="wrap">
	<div class="container">
		<div class="inner-container">
			<div class="title">{title}</div>
			{#each items as item}
				<div class="wrap1 wrap1-flex">
					<div class="item-title">{item.title}</div>
					<div class="item-text">{item.text}</div>
				</div>
			{/each}
			<div class="wrap1 wrap1-additional-info">
				<div class="wrap1-flex">
					<div class="item-title">{item3Title}</div>
					<div class="item-text">{item3Text}</div>
				</div>
				<div class="gray-block-wrap">
					{#each item3Points as item, index}
						<div class="gray-block">
							<div class="number">{index + 1}</div>
							<div class="gray-block-text mb8">{@html item.text}</div>
							{#if item.additional}
								{#each item.additional as item_additional, index}
									<div class="additional-info mb8">
										<a href={item_additional.link} target="_blank">{item_additional.text}</a>
									</div>{/each}
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.wrap {
		background-color: rgb(214, 223, 231);
		padding: 64px 0;
	}
	.title {
		color: #fff;
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 48px;
	}
	.inner-container {
		padding: 48px;
		border-radius: 40px;
		background-color: rgb(27, 161, 161);
		background-image: url('/src/lib/images/bgr_block_4.png');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	.wrap1-flex {
		display: flex;
		align-items: flex-start;
		justify-self: flex-start;
	}
	.wrap1 {
		background: #fff;
		margin-top: 32px;
		padding: 24px;
		border-radius: 24px;
	}
	.item-title {
		font-weight: 600;
		font-size: 24px;
		line-height: 1.3;
		padding-right: 32px;
	}
	.item-text {
		font-size: 19px;
		line-height: 1.47;
	}
	.wrap1-flex .item-title {
		width: 35%;
	}

	.wrap1-flex .item-text {
		width: 65%;
	}
	.wrap1-additional-info .wrap1-flex {
		margin-bottom: 40px;
	}

	.gray-block {
		background-color: #eff3f6;
		border-radius: 16px;
		width: 25%;
		padding: 24px 24px 32px;
		font-size: 19px;
		line-height: 1.47;
	}

	.number {
		width: 64px;
		height: 64px;
		font-size: 32px;
		line-height: 1.25;
		color: #fff;
		font-weight: 600;
		background-color: var(--color-exnova-highlight);
		border-radius: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;
	}
	.gray-block-wrap {
		display: flex;
		gap: 16px 24px;
	}
	.mb8 {
		margin-bottom: 8px;
	}

	.additional-info {
		color: var(--color-exnova-highlight);
		font-weight: 600;
	}

	@media only screen and (max-width: 1100px) {
		.gray-block {
			width: calc(50% - 64px);
			max-width: 300px;
		}
		.gray-block-wrap {
			flex-wrap: wrap;
			gap: 32px 32px;
			justify-content: center;
		}
		.wrap1-flex {
			display: block;
		}
		.wrap1-flex .item-title {
			margin-bottom: 16px;
		}
		.wrap1-flex .item-title,
		.wrap1-flex .item-text {
			width: 100%;
			text-align: center;
		}
	}

	@media only screen and (max-width: 630px) {
		.inner-container {
			padding: 24px;
		}
		.title {
			font-size: 30px;
		}
		.gray-block {
			width: 100%;
            text-align: center;
		}
		.number {
			width: 40px;
			height: 40px;
			font-size: 24px;
			margin: 0 auto 16px;
		}
	}
</style>
