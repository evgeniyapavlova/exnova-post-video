<script>
	import { onMount } from 'svelte';

	const countries = [
		'United States',
		'Canada',
		'Australia',
		'United Kingdom',
		'Germany',
		'France',
		'Italy',
		'Japan',
		'Brazil',
		'China',
		'India',
		'Russia',
		'Mexico',
		'South Korea',
		'Spain',
		'Netherlands',
		'Switzerland',
		'Sweden',
		'Norway'
	];

	let filteredCountries = countries.slice();
	let searchTerm = '';
	let selectedCountry = '';
	// let showDropdown = false;

	function filterCountries() {
		filteredCountries = countries.filter((country) =>
			country.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	onMount(() => {
		shuffleArray(countries);
		filterCountries();
	});

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	function handleSelection(country) {
		selectedCountry = country;
		// toggleDropdown();
		searchTerm = selectedCountry;
	}

	// function toggleDropdown() {
	// 	showDropdown = !showDropdown;
	// }

	$: filterCountries();
</script>

<!-- 		on:focus={toggleDropdown}
		on:blur={toggleDropdown} -->
<div class="custom-select">
	<input type="text" placeholder="Country" bind:value={searchTerm} on:input={filterCountries} />
	<!-- {#if showDropdown} -->
	<div class="options">
		{#each filteredCountries as country}
			<button
				class="option"
				on:click={() => {
					console.log(country);

					handleSelection(country);
				}}>{country}</button
			>
		{/each}
	</div>
	<!-- {/if} -->
</div>

<style>
	.custom-select {
		width: 100%;
		/* z-index: 2; */
		position: relative;
	}

	.custom-select:has(input[type='text']:focus) {
		z-index: 2;
		position: relative;
	}

	input[type='text']:focus ~ .options {
		opacity: 1;
		z-index: 1000;
	}

	input[type='text'] {
		width: 100%;
		border: none;
		box-sizing: border-box;
		cursor: pointer;
		color: #717883;
		background: #24262a;
		margin-bottom: 12px;
		border-radius: 8px;
		padding: 12px;
		outline: none;
	}

	.options {
		opacity: 0;
		z-index: 0;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		border-radius: 0 0 4px 4px;
		background-color: #24262a;
		max-height: 200px;
		overflow-y: auto;
		/* opacity: 1;
		z-index: 1000; */
	}

	.option {
		padding: 0.5rem;
		cursor: pointer;
		color: #717883;
		background: #24262a;
		display: block;
		width: 100%;
		text-align: left;
	}

	.option:hover {
		background-color: #f0f0f0;
	}
</style>
