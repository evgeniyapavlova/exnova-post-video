<script>
	import fb_meta_img_pt from '$lib/images/fb_meta_img_pt.jpg';
	import tw_meta_img_pt from '$lib/images/tw_meta_img_pt.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const pt_content = {
		btn: 'Ganhe 15$',
		block1: {
			h1: 'A Exnova está oferecendo a você a oportunidade de ',
			h1_span: 'iniciar sua carreira comercial',
			h2: 'Se você tem um telefone e é ativo nas redes sociais, apoiaremos sua jornada comercial.<br />Basta nos mencionar com a hashtag <span>#ExnovaInvest</span>.',
			income: 'Sua renda'
		},

		block2: {
			title: 'A Exnova está oferecendo a você a oportunidade de iniciar sua carreira comercial',
			highlight:
				'Você é ativo nas redes sociais e gosta de criar conteúdo de vídeo?<br />Parabéns, você está participando da nossa oferta de pagamento por vídeo!',
			text: 'Faça um vídeo de 15 a 60 segundos sobre negociação com Exnova de acordo com nossas diretrizes e compartilhe-o nas redes sociais. Em troca, creditaremos uma bela recompensa em sua conta – use-a para negociar ou sacar!'
		},
		block3: {
			title: 'Como entrar',
			items: [
				'Certifique-se de que você é um Trader Exnova. <span>Torne-se um trader se ainda não for</span>',
				'<span>Inscreva-se</span> para participar e siga as instruções',
				'Crie um vídeo e poste nas suas redes sociais de acordo com <span>as regras</span>',
				'Receber sua recompensa!'
			]
		},
		block4: {
			title: 'Regras principais',
			item3Title: 'Postar de acordo com o livro de regras',
			item3Text: 'Você deve seguir as diretrizes mencionadas na carta de acordo',
			items1: [
				{
					title: 'Tenha uma conta Exnova',
					text: 'Você deve ser um trader Exnova, a conta deve ser verificada'
				},
				{
					title: 'Assine o acordo',
					text: 'Depois de se inscrever para participação, você precisa assinar a carta de concordância e enviá-la de volta para nós através do endereço de e-mail vinculado à sua conta'
				}
			],
			items2: [
				{
					text: 'Siga a Exnova',
					additional: [
						{ text: 'Facebook', link: 'https://facebook.com/exnova.en/' },
						{ text: 'Instagram', link: 'https://www.instagram.com/exnova_trading/' }
					]
				},
				{
					text: 'Marcar 5 amigos na postagem da nossa competição',
					additional: [{ text: 'Ver postagem', link: 'https://facebook.com/exnova.en/' }]
				},
				{ text: 'Crie um vídeo e assine o contrato' },
				{
					text: 'Poste o vídeo em suas redes sociais com a hashtag <span>#ExnovaInvest</span>'
				}
			]
		},
		block5: {
			text1: 'Reivindique uma recompensa pelo que você faz de melhor.',
			text2: 'Participe agora!'
		}
	};
</script>

<svelte:head>
	<title>Exnova - Poste um vídeo nas redes sociais e ganhe US$ 15</title>
	<meta name="description" content="Exnova - Poste um vídeo nas redes sociais e ganhe US$ 15" />

	<meta property="og:title" content="Exnova - Poste um vídeo" />
	<meta property="og:description" content="Poste um vídeo nas redes sociais e ganhe US$ 15" />
	<meta property="og:image" content={fb_meta_img_pt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Exnova - Poste um vídeo" />
	<meta name="twitter:description" content="Poste um vídeo nas redes sociais e ganhe US$ 15" />
	<meta name="twitter:image" content={tw_meta_img_pt} />
</svelte:head>

<AllBlocks lang="pt" content={pt_content} />
