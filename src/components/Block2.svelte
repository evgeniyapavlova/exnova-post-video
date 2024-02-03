<script>
	import violet_2_img from '$lib/images/violet_2.png';
	import blue_img from '$lib/images/blue.png';

	export let title, highlight, text;
</script>

<div class="container">
	<div class="inner-container">
		<div class="text">
			<div class="title">{title}</div>
			<div class="highlight">{@html highlight}</div>
			<div class="inner-text">{text}</div>
		</div>
		<div class="right-block">
			<img src={violet_2_img} alt="Violet icon" class="abs-img img-violet" />
			<img src={blue_img} alt="Blue icon" class="abs-img img-blue" />
			<div class="logo-image">
				<svg
					width="150"
					height="150"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_388_8)">
						<path
							d="M18.26 7.273V0H21.913V7.273H18.26ZM40.174 21.818H32.87V18.182H40.174V21.818ZM25.252 12.286L20.087 17.429L14.922 12.286L12.34 14.858L17.505 20L20.087 17.429L22.669 20L27.834 14.858L25.252 12.286ZM20.087 22.572L25.252 27.714L27.834 25.143L22.669 20L20.087 22.572ZM12.339 25.142L17.505 20L20.087 22.572L14.922 27.714L12.339 25.142ZM18.261 32.727V40H21.913V32.727H18.261ZM7.304 21.818H0V18.182H7.304V21.818ZM33 4.572L27.835 9.715L30.418 12.286L35.583 7.144L33 4.572ZM30.418 27.714L35.583 32.856L33 35.428L27.835 30.285L30.418 27.714ZM12.34 30.285L9.757 27.714L4.592 32.856L7.175 35.428L12.34 30.285ZM7.175 4.572L12.34 9.715L9.757 12.286L4.592 7.144L7.175 4.572ZM57.805 18.137V14.574H71.343V10.909H53.565V29.092H71.47V25.427H57.806V21.674H70.796V18.137H57.805ZM83.507 19.785L79.853 16.032H74.67L80.757 22.258L73.957 29.092H79.14L83.507 24.705L87.875 29.092H93.058L86.258 22.258L92.345 16.032H87.162L83.507 19.785ZM95.565 29.092V16.032H99.742V17.794C100.493 16.64 101.907 15.651 104.518 15.651C109.866 15.651 111.815 18.682 111.815 22.828V29.092H107.638V22.828C107.638 20.66 106.733 18.847 103.69 18.847C100.646 18.847 99.742 20.66 99.742 22.828V29.092H95.565Z"
							fill="#141822"
						/>
					</g>
					<defs>
						<clipPath id="clip0_388_8">
							<rect width="40" height="40" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	</div>
</div>

<style>
	.img-violet {
		right: 7px;
		bottom: -24px;
		transform: rotate(180deg);
	}
	.img-blue {
		left: 13px;
		top: 37%;
		width: 50px;
	}
	.abs-img {
		position: absolute;
		z-index: 0;
	}
	.inner-container {
		padding: 48px;
		background-image: linear-gradient(228deg, rgb(174, 111, 252), rgb(89, 117, 255));
		color: #fff;
		display: flex;
		justify-content: space-between;
		border-radius: 40px;
		margin: 96px 0;
		gap: 16px;
		align-items: center;
	}
	.text {
		font-size: 19px;
		line-height: 1.47;
		max-width: 60%;
	}
	.title {
		line-height: 1.3;
		font-size: 24px;
		font-weight: 600;
	}
	.highlight {
		margin: 24px 0;
		padding: 8px 8px 10px 16px;
		border-radius: 16px 0px 16px 16px;
		background-color: rgb(145, 163, 243);
		font-weight: 600;
	}
	.right-block {
		position: relative;
	}
	.logo-image {
		width: 240px;
		height: 240px;
		background: #fff;
		border-radius: 60px;
		box-shadow:
			inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px,
			inset rgba(0, 0, 0, 0.3) -8px -8px 18px 5px;
		transform: skew(5deg, -6deg);
		margin: 0 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 1;
	}
	@media only screen and (max-width: 950px) {
		.inner-container {
			margin: 60px 0;
			display: block;
			padding-bottom: 80px;
		}
		.text {
			max-width: 100%;
			margin-bottom: 48px;
		}
		.logo-image {
			margin: 0 auto;
		}
	}

	@media only screen and (max-width: 600px) {
		.inner-container {
			margin: 48px 0;
		}
		.inner-container {
			padding: 48px 24px;
		}
		.right-block {
			display: none;
		}
		.text {
			margin-bottom: 0;
		}
	}
</style>
