<script>
	import { slide } from 'svelte/transition';

	import Loader from './Loader.svelte';
	import Checkmark from '../svg/Checkmark.svelte';

	export let btn;
	let country = '';
	let email = '';
	let videoLink = '';
	let agreeChecked = false;
	let loading = false;
	let success = false;

	async function handleSubmit(event) {
		loading = true;
		event.preventDefault();
		var requestOptions = {
			method: 'POST',
			redirect: 'follow'
		};

		fetch(
			`https://script.google.com/macros/s/AKfycbytjI4GW0eS4wSrIHTmSKS22SyEZcNeB1UseC7S4PXL9fIEu1VcUYxxVrufJrROOsaT/exec?country=${country}&email=${email}&videoLink=${videoLink}`,
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => {
				console.log(result);
				loading = false;
				success = true;
				country = '';
				email = '';
				videoLink = '';
			})
			.catch((error) => {
				alert('Something went wrong, please try again.');
				loading = false;
			});
	}
</script>

<form class={loading ? 'loading' : ''}>
	{#if success}<div transition:slide class="success"><Checkmark /></div>{/if}
	<input type="text" placeholder="Country" bind:value={country} />

	<input type="email" placeholder="Email" bind:value={email} />
	<input type="text" class="video-link" placeholder="Video Link" bind:value={videoLink} />
	<input class="checkbox-styled" type="checkbox" bind:checked={agreeChecked} />
	<label for="agree" class="checkbox-label"
		>I agree to the Terms and Conditions and Privacy Policy</label
	>

	<button
		type="submit"
		disabled={!agreeChecked || !videoLink || !email || !country || loading}
		on:click={handleSubmit}
	>
		{#if loading}
			<Loader />
		{/if}
		{btn}
	</button>
</form>

<style>
	.success {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-bg-0);
		z-index: 10;
	}
	.loading button {
		background-color: rgba(2, 129, 227, 0.5);
		color: transparent !important;
	}

	form {
		max-width: 300px;
		position: relative;
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
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 24px;
		background-color: var(--color-exnova-highlight);
		color: var(--color-bg-1);
		font-weight: 500;
		font-size: 17px;
		padding: 14px 48px;
		border-radius: 8px;
		line-height: 28px;
		cursor: pointer;
		transition: background-color 0.2s ease-out;
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
