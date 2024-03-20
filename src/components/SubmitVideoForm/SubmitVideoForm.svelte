<script>
	export let btn;
	let country = '';
	let email = '';
	let videoLink = '';
	let agreeChecked = false;

	async function handleSubmit() {
		const formData = { country, email, videoLink };

		try {
			const response = await fetch(
				'https://script.google.com/macros/s/AKfycbzkjaYAEYWqV6cHIoHvZxML7Onzl8-31kAcBMiMuzyoiWGQbnzgyhOdseZVE_AVFLuZ/exec',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				}
			);

			if (response.ok) {
				country = '';
				email = '';
				videoLink = '';
			} else {
				console.error('Failed to submit form data');
			}
		} catch (error) {
			console.error('Error submitting form data:', error);
		}
	}
</script>

<form on:submit={handleSubmit}>
	<input type="text" placeholder="Country" bind:value={country} />

	<input type="email" placeholder="Email" bind:value={email} />
	<input type="text" class="video-link" placeholder="Video Link" bind:value={videoLink} />
	<input class="checkbox-styled" type="checkbox" bind:checked={agreeChecked} />
	<label for="agree" class="checkbox-label"
		>I agree to the Terms and Conditions and Privacy Policy</label
	>

	<button type="submit" disabled={!agreeChecked || !videoLink || !email || !country}>{btn}</button>
</form>

<style>
	form {
		max-width: 300px;
	}
	.checkbox-label {
		color: #717883;
		font-size: 14px;
	}
	.video-link {
		margin-bottom: 24px;
	}
	.checkbox-styled {
		margin: 0 4px 0 0;
		cursor: pointer;
	}
	input[type='text'],
	input[type='email'] {
		width: 100%;
		outline: none;
		border: none;
		box-sizing: border-box;
		cursor: pointer;
		color: #717883;
		background: #24262a;
		margin-bottom: 12px;
		border-radius: 8px;
		padding: 12px;
	}
	button {
		display: block;
		margin-top: 24px;
		background-color: var(--color-exnova-highlight);
		color: var(--color-bg-1);
		font-weight: 500;
		font-size: 17px;
		padding: 14px 48px;
		border-radius: 8px;
		line-height: 28px;
		cursor: pointer;
	}
	button:disabled {
		background-color: rgba(2, 129, 227, 0.5);
		color: rgba(255, 255, 255, 0.5);
	}
	@media only screen and (max-width: 630px) {
		form {
			margin: 0 auto;
		}
		button {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
