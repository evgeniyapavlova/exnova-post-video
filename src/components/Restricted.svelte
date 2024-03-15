<script>
	import IqOptionLogo from './svg/IQOptionLogo.svelte';
</script>

<div class="wrap reg" id="wrap-restricted">
	<IqOptionLogo />
	<div class="group-mid">
		<div class="group-text">
			<div class="title">We cannot redirect you to the requested page</div>
			<div class="text">
				We are sorry to say that IQ Option doesn't cooperate with this particular website in your
				region. If you believe that there is a mistake, you can proceed to the broker's website.
			</div>
		</div>
		<div class="group-btn">
			<a href="//iqoption.com/" class="button" data-test-id="redirect-button">Go to IQ Option</a>
			<div class="text-2">We sincerely apologize for the inconvenience.</div>
		</div>
	</div>
	<div></div>
</div>

<style>
	.text-2 {
		font-size: 16px;
		opacity: 0.5;
	}
	.button {
		text-decoration: none;
		display: inline-block;
		min-width: 220px;
		outline: none;
		cursor: pointer;
		border-radius: 5px;
		text-align: center;
		letter-spacing: -0.025em;
		padding: 1em 2em;
		background-color: #ff7701;
		color: white;
		border-radius: 0;
		transition: background-color 0.3s ease-out;
		font: 600 16px var(--mainFont);
	}
	.group-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
	.title {
		color: inherit;
		font-size: 30px;
		font-weight: 600;
	}
	.text {
		font-size: 18px;
		opacity: 0.7;
		max-width: 43em;
	}
	.group-mid {
		display: flex;
		flex-direction: column;
		gap: 54px;
	}
	.group-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	#wrap-restricted {
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
</style>
