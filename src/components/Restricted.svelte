<div class="wrap reg" id="restricted-wrap">
	<div class="group-text">
		<div class="title-reg">We cannot redirect you to the requested page</div>
		<div class="text-2">We sincerely apologize for the inconvenience.</div>
	</div>
</div>

<style>
	#restricted-wrap {
		justify-content: center;
	}
	.text-2 {
		font-size: 16px;
		opacity: 0.5;
	}
	.title-reg {
		color: inherit;
		font-size: 30px;
		font-weight: 600;
	}
	.group-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	.wrap {
		height: 100%;
		background: white;
		color: #141822;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		gap: 32px;
		padding: 32px;
		height: 100vh;
	}

	@media (max-width: 600px) {
		.text-2 {
			font-size: 14px;
		}
		.title-reg {
			font-size: 24px;
		}
	}
</style>
