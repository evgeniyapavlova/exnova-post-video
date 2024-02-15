<script>
	import { page } from '$app/stores';
	let currentYear = new Date().getFullYear();

	const pathArray = $page.url.pathname.split('/');
	const currentLang = pathArray[pathArray.length - 1] || 'en';
	const langs_map = {
		en: {
			text1:
				'The financial products offered by the company carry a high level of risk and can result in the loss of all your funds. You should never invest money that you cannot afford to lose.',
			text2:
				'Payment transactions are managed by: DIGITAL SMART CY LIMITED <br />Address: 6 Koutsoventi street, 4101 Agios Athanasios Limassol, Cyprus <br />Company business number: HE 410889',
			aff_program: 'Affiliate Program',
			privacy: 'Privacy Policy',
			terms: 'Terms &amp; Conditions'
		},
		es: {
			text1:
				'Los productos financieros ofrecidos por la compañía conllevan un alto nivel de riesgo y pueden ocasionar la pérdida de todos tus fondos. Nunca deberás invertir dinero que no puedas permitirte perder.',
			text2:
				'Las transacciones de los pagos están gestionadas por: DIGITAL SMART CY LIMITED<br />Dirección: 6 Koutsoventi street, 4101 Agios Athanasios, Limasol, Chipre.<br />Número registral de la compañía: HE 410889',
			aff_program: 'Programa de afiliados',
			privacy: 'Política de privacidad',
			terms: 'Términos y Condiciones'
		},
		pt: {
			text1:
				'Os produtos financeiros fornecidos pela empresa apresentam um alto nível de risco e podem resultar na perda de todos os seus fundos. Você nunca deve investir dinheiro que não pode perder.',
			text2:
				'As transações de pagamento são gerenciadas por: DIGITAL SMART CY LIMITED<br />Endereço: 6 Koutsoventi street, 4101 Agios Athanasios Limassol, Chipre<br />Número comercial da empresa: HE 410889',
			aff_program: 'Programa de afiliados',
			privacy: 'Política de privacidade',
			terms: 'Termos e Condições'
		},
		id: {
			text1:
				'Produk finansial yang ditawarkan perusahaan ini mengandung risiko tingkat tinggi dan dapat menyebabkan hilangnya semua dana Anda. Jangan menginvestasikan uang jika Anda tidak sanggup kehilangan uang tersebut.',
			text2:
				'Transaksi pembayaran dikelola oleh: DIGITAL SMART CY LIMITED<br />Alamat: 6 Koutsoventi street, 4101 Agios Athanasios Limassol, Cyprus<br />Nomor bisnis perusahaan: HE 410889',
			aff_program: 'Program Affiliate',
			privacy: 'Kebijakan Privasi',
			terms: 'Syarat & Ketentuan'
		}
	};
</script>

<footer>
	<div class="footer-top">
		<div class="container">
			<a href="https://exnova.com/">
				<svg xmlns="http://www.w3.org/2000/svg" width="168" height="40" fill="#141822"
					><path
						d="M18.26 7.273V0h3.653v7.273h-3.652zm21.914 14.545H32.87v-3.636h7.304v3.636zm-14.922-9.532l-5.165 5.143-5.165-5.143-2.582 2.572L17.505 20l2.582-2.571L22.669 20l5.165-5.142-2.582-2.572zm-5.165 10.286l5.165 5.142 2.582-2.571L22.67 20l-2.582 2.572zm-7.748 2.57L17.505 20l2.582 2.572-5.165 5.142-2.583-2.571zm5.922 7.585V40h3.652v-7.273h-3.652zM7.304 21.818H0v-3.636h7.304v3.636zM33 4.572l-5.165 5.143 2.583 2.571 5.165-5.142L33 4.572zm-2.582 23.142l5.165 5.142L33 35.428l-5.165-5.143 2.583-2.571zM12.34 30.285l-2.583-2.571-5.165 5.142 2.583 2.572 5.165-5.143zM7.175 4.572l5.165 5.143-2.583 2.571-5.165-5.142 2.583-2.572zm50.63 13.565v-3.563h13.538v-3.665H53.565v18.183H71.47v-3.665H57.806v-3.753h12.99v-3.537h-12.99zm25.702 1.648l-3.654-3.753H74.67l6.087 6.226-6.8 6.834h5.183l4.367-4.387 4.368 4.387h5.183l-6.8-6.834 6.087-6.226h-5.183l-3.655 3.753zm12.058 9.307v-13.06h4.177v1.762c.751-1.154 2.165-2.143 4.776-2.143 5.348 0 7.297 3.031 7.297 7.177v6.264h-4.177v-6.264c0-2.168-.905-3.981-3.948-3.981s-3.948 1.813-3.948 3.981v6.264h-4.177z"
					/><path
						fill-rule="evenodd"
						d="M123.325 29.472c6.087 0 9.194-2.827 9.194-6.91 0-4.108-3.107-6.91-9.194-6.91s-9.195 2.802-9.195 6.91c0 4.083 3.108 6.91 9.195 6.91zm0-3.195c-3.604 0-5.018-1.572-5.018-3.715s1.414-3.715 5.018-3.715 5.017 1.572 5.017 3.715-1.413 3.715-5.017 3.715z"
					/><path
						d="M146.983 16.032h4.406l-7.106 13.06h-4.177L133 16.032h4.406l4.788 8.85 4.789-8.85z"
					/><path
						fill-rule="evenodd"
						d="M152.031 25.149c0 3.093 2.916 4.247 6.685 4.247 2.942 0 4.356-.811 5.094-2.016v1.712H168V21.04c0-3.55-1.605-5.388-7.272-5.388-2.445 0-4.266.33-5.539.646-.739.19-1.375.406-1.91.647l1.451 2.65c.472-.165.994-.304 1.592-.431a19.888 19.888 0 0 1 4.152-.444c2.941 0 3.349.85 3.349 2.003-6.94-.507-11.792.127-11.792 4.426zm4.177-.38c0-1.84 3.145-1.877 7.602-1.738v1.002c0 1.128-1.171 2.168-4.075 2.168-2.725 0-3.527-.558-3.527-1.433z"
					/></svg
				>
			</a>
			<div class="socials">
				<a href="https://www.instagram.com/exnova_trading/" data-test-id="social-instagram">
					<svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15.638 0h-8.53C3.183 0 0 3.167 0 7.073v8.488c0 3.905 3.183 7.073 7.108 7.073h8.53c3.925 0 7.108-3.168 7.108-7.073V7.073C22.746 3.167 19.563 0 15.638 0zm4.976 15.56c0 2.73-2.232 4.952-4.976 4.952h-8.53c-2.744 0-4.976-2.221-4.976-4.951V7.073c0-2.73 2.232-4.951 4.976-4.951h8.53c2.744 0 4.976 2.22 4.976 4.951v8.488zm-9.23-9.89c-3.14 0-5.686 2.534-5.686 5.66 0 3.124 2.546 5.658 5.687 5.658 3.14 0 5.686-2.534 5.686-5.659s-2.546-5.658-5.686-5.658zm0 9.196c-1.958 0-3.553-1.587-3.553-3.537s1.595-3.536 3.554-3.536c1.959 0 3.554 1.586 3.554 3.536s-1.595 3.537-3.554 3.537zM18.23 5.25c0 .418-.34.756-.76.756a.758.758 0 0 1-.76-.756c0-.417.341-.756.76-.756.42 0 .76.339.76.756z"
							fill="#141822"
						/></svg
					></a
				>
				<a href="https://facebook.com/exnova.en/" data-test-id="social-fb">
					<svg width="14" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
						><path
							d="M13.295.005L10.168 0C6.654 0 4.383 2.318 4.383 5.906V8.63H1.238a.49.49 0 0 0-.492.49v3.945c0 .27.22.49.492.49h3.145v9.956c0 .27.22.489.492.489h4.103a.49.49 0 0 0 .492-.49v-9.956h3.676a.49.49 0 0 0 .492-.489l.002-3.946a.489.489 0 0 0-.492-.49H9.47V6.322c0-1.11.265-1.673 1.718-1.673h2.107a.49.49 0 0 0 .491-.49V.494a.49.49 0 0 0-.49-.489z"
							fill="#141822"
						/></svg
					></a
				>
				<a href="https://twitter.com/exnova_trading" data-test-id="social-twitter">
					<svg width="27" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"
						><path
							d="M26.761 2.486c-.966.422-1.995.701-3.068.837A5.273 5.273 0 0 0 26.035.394a10.673 10.673 0 0 1-3.376 1.283A5.349 5.349 0 0 0 18.769 0c-2.948 0-5.322 2.381-5.322 5.3 0 .42.036.824.124 1.208A15.097 15.097 0 0 1 2.595.966a5.314 5.314 0 0 0-.73 2.678 5.3 5.3 0 0 0 2.366 4.404 5.279 5.279 0 0 1-2.406-.653v.058c0 2.575 1.846 4.714 4.267 5.207a5.34 5.34 0 0 1-1.396.174c-.341 0-.686-.02-1.009-.09a5.372 5.372 0 0 0 4.976 3.69 10.734 10.734 0 0 1-6.602 2.26c-.437 0-.856-.018-1.275-.072A15.045 15.045 0 0 0 8.956 21c9.798 0 15.156-8.077 15.156-15.078 0-.234-.008-.46-.02-.685a10.594 10.594 0 0 0 2.67-2.75z"
							fill="#141822"
						/></svg
					></a
				>
			</div>
		</div>
	</div>
	<div class="footer-middle">
		<div class="container">
			<p>
				{langs_map[currentLang].text1}
			</p>
			<p style="margin-top: 40px; margin-bottom: 16px;">
				Digital Smart LLC. Address: Lighthouse Trust Nevis Ltd, Suite 1, A.L. Evelyn Ltd Building,
				Main Street, Charlestown, Nevis
			</p>
			<p>{@html langs_map[currentLang].text2}</p>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="container">
			<div class="copyright">
				Digital Smart LLC. © {currentYear}
			</div>
			<div class="terms-links">
				<a
					href="https://affstore.com/en/lp/exnova/"
					target="_blank"
					data-id="footer-link-affstore"
					data-test-id="affstore-link">{langs_map[currentLang].aff_program}</a
				>
				<a
					href="https://exnova.com/terms/privacy-policy"
					target="_blank"
					data-id="footer-link-policy"
					data-test-id="privacy-policy">{langs_map[currentLang].privacy}</a
				>
				<a
					href="https://exnova.com/terms/terms-conditions"
					target="_blank"
					data-id="footer-link-terms"
					data-test-id="terms">{langs_map[currentLang].terms}</a
				> <a href="mailto:support@exnova.com">support@exnova.com</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		font-size: 14px;
		color: var(--footer-color-font);
	}

	footer p {
		opacity: 0.6;
		line-height: 1.5;
		letter-spacing: -0.2px;
		text-align: center;
	}

	.socials {
		display: flex;
		align-items: center;
		gap: 64px;
		line-height: 0;
		justify-content: center;
		margin-top: 40px;
		margin-bottom: 10px;
	}
	.footer-middle {
		border-bottom: 1px solid #f8f8fa;
	}

	.footer-top {
		padding: 64px 0 40px;
		text-align: center;
	}

	.footer-middle {
		padding-bottom: 64px;
	}
	.footer-bottom {
		padding: 30px 0;
		font-size: 16px;
		letter-spacing: -0.25px;
		line-height: 1.4;
	}
	.terms-links {
		font-weight: 600;
		margin-top: 24px;
	}

	.copyright {
		text-align: center;
	}

	.terms-links a {
		display: block;
		margin-top: 12px;
		text-align: center;
	}
	@media only screen and (min-width: 500px) {
		.footer-top {
			text-align: left;
		}
		.footer-top .container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.socials {
			justify-content: unset;
			margin: 0;
		}
		footer p {
			text-align: left;
		}
	}
	@media only screen and (min-width: 1000px) {
		footer {
			font-size: 16px;
		}
		.footer-bottom {
			font-size: 18px;
		}
		.terms-links {
			display: flex;
			gap: 40px;
		}
		.terms-links a {
			text-align: left;
		}
		.copyright {
			text-align: left;
		}
	}

	@media only screen and (min-width: 1300px) {
		.footer-bottom .container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.terms-links {
			margin-top: 0;
		}
	}
</style>
