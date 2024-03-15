<script>
	export let text;
	import { onMount } from 'svelte';

	function getURLParameters() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return Object.fromEntries(urlParams.entries());
	}

	function updateLinks() {
		const parameters = getURLParameters();
		const links = document.querySelectorAll('a');

		links.forEach((link) => {
			const linkHref = link.getAttribute('href');

			if (linkHref && !linkHref.startsWith('#') && !linkHref.startsWith('mailto')) {
				const [url, query] = linkHref.split('?');

				const queryParams = new URLSearchParams(query);
				for (const [key, value] of Object.entries(parameters)) {
					let tempKey = key;
					if (tempKey === 'aff') {
						tempKey = 'c';
					} else if (tempKey === 'afftrack') {
						tempKey = 'pid';
					}
					queryParams.set(tempKey, value);
				}

				const updatedHref = url + '?' + queryParams.toString();
				link.href = updatedHref;
			}
		});
	}

	onMount(() => {
		updateLinks();
	});
</script>

<a href="https://iqoption.com">
	{text}
</a>

<style>
	a {
		background-color: var(--color-exnova-highlight);
		color: var(--color-bg-1);
		font-weight: 500;
		font-size: 17px;
		padding: 14px 48px;
		border-radius: 8px;
		line-height: 28px;
		display: inline-block;
	}
</style>
