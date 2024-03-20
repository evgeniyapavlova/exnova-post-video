<script>
	import { emailValidator, requiredValidator } from './validators.js';
	import { createFieldValidator } from './validation.js';

	const [validity, validate] = createFieldValidator(requiredValidator(), emailValidator());

	let email = null;
</script>

<div class="input-wrap">
	<input
		class="input"
		type="text"
		bind:value={email}
		placeholder="Your Email"
		class:field-danger={!$validity.valid}
		class:field-success={$validity.valid}
		use:validate={email}
	/>
	{#if $validity.dirty && !$validity.valid}
		<span class="validation-hint">
			{$validity.message}
		</span>
	{/if}
</div>
<button disabled={!$validity.valid}>Ok, I'm ready!</button>

<style>
	.input-wrap {
		position: relative;
		z-index: 1;
	}

	input {
		outline: none;
		border-width: 2px;
		/* z-index: 2; */
		width: 100%;
		border: none;
		box-sizing: border-box;
		cursor: pointer;
		color: #717883;
		background: #24262a;
		margin-bottom: 12px;
		border-radius: 8px;
		padding: 12px;
		/* position: relative; */
	}

	.validation-hint {
		color: rgba(255, 0, 0, 0.6);
		position: absolute;
		bottom: -6px;
		width: 100%;
		left: 0;
	}

	.field-danger {
		border-color: red;
	}

	.field-success {
		border-color: green;
	}
</style>
