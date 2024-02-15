<script>
	import AllBlocks from '../../components/AllBlocks.svelte';

	const pt_content = {
		btn: 'Ganhe 50$',
		block1: {
			h1: 'Poste um vídeo<br /> nas redes sociais&nbsp;e',
			h1_span: 'ganhe US$ 50',
			h2: 'Publique um vídeo em suas redes sociais com a hashtag <span>#InvestwithExnova</span> e receba uma recompensa em sua conta de negociação',
			income: 'Sua renda'
		},

		block2: {
			title: 'A Exnova está pagando pelos seus vídeos nas redes sociais',
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
					text: 'Depois de se inscrever para participação, você precisa assinar a carta de concordância e enviá-la de volta para nós através do endereço de e-mail vinculado à sua conta'
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
					text: 'Marcar 3 amigos na postagem da nossa competição',
					additional: [{ text: 'View post', link: 'https://facebook.com/exnova.en/' }]
				},
				{ text: '!!!!!! Create a video and sign the agreement' },
				{
					text: '!!!!!! Post the video on your social media with a hashtag <span>#InvestwithExnova</span>'
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
	<title>Exnova - Poste um vídeo nas redes sociais e ganhe US$ 50</title>
	<meta name="description" content="Exnova - Poste um vídeo nas redes sociais e ganhe US$ 50" />
</svelte:head>

<AllBlocks lang="pt" content={pt_content} />
