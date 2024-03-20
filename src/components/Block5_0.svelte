<script>
	export let lang;
	let tempLang = lang;
	if (lang === 'id' || !lang) tempLang = 'en';
</script>

<div class="iframe-container">
	<iframe
		title="Exnova registration form"
		src="https://exnova.org/lp/exnova-regframe-light/{tempLang}/"
		frameborder="0"
		allowfullscreen
	></iframe>
</div>

<style>
	.iframe-container {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 970px;
	}
	.iframe-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
