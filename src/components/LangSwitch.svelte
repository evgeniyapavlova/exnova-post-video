<script lang="ts">
	const options = {
		en: { key: 'en', name: 'Eng' },
		ar: { key: 'ar', name: 'Ar' }
	};
	export let value = options.en.key;
	let checked = true;

	function handleClick(event) {
		const target = event.target;

		const state = target.getAttribute('aria-checked');

		checked = state === 'true' ? false : true;

		value = checked === true ? options.en.key : options.ar.key;
	}
</script>

<div class="switch-lang__container">
	<button role="switch" aria-checked={checked} on:click={handleClick}>{options[value].name}</button>
</div>

<style>
	.switch-lang__container {
		width: 160px;
		height: 40px;
		background-color: var(--color-switch);
		border-radius: 10px;
		padding: 4px;
		position: relative;
	}

	.switch-lang__container button {
		background-color: #fff;
		border: none;
		border-radius: 8px;
		font-weight: bold;
		text-align: center;
		width: 50%;
		height: calc(100% - 8px);
		position: absolute;
		left: 4px;
		transition: left 0.2s ease-in-out;
		cursor: pointer;
	}

	.switch-lang__container button[aria-checked='true'] {
		left: 4px;
	}

	.switch-lang__container button[aria-checked='false'] {
		left: calc(50% - 4px);
	}
</style>
