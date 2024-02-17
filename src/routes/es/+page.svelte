<script>
	import AllBlocks from '../../components/AllBlocks.svelte';

	const es_content = {
		btn: 'Gana 50$',
		block1: {
			h1: 'Publica un vídeo<br /> en redes sociales&nbsp;y',
			h1_span: 'ganar US$&nbsp;50',
			h2: 'Publica un vídeo en tus redes sociales con el hashtag <span>#InvestwithExnova</span> y recibe una recompensa en tu cuenta de negociación.',
			income: 'Tus ingresos'
		},
		block2: {
			title: 'Exnova paga por sus videos de redes sociales',
			highlight:
				'¿Está activo en las redes sociales y disfruta creando contenido de video?<br />¡Felicitaciones, estás participando en nuestra oferta de pago por video!',
			text: 'Haga un video de 15 a 60 segundos sobre cómo operar con Exnova de acuerdo con nuestras pautas y compártalo en las redes sociales. A cambio, acreditaremos una bonita recompensa en su cuenta: ¡úsela para operar o retirar dinero!'
		},
		block3: {
			title: 'Cómo entrar',
			items: [
				'Asegúrate de ser un comerciante de Exnova. <span>Conviértase en comerciante si aún no lo es</span>',
				'<span>Regístrate</span> para participar y sigue las instrucciones',
				'Crea un vídeo y publícalo en tus redes sociales según <span>las reglas</span>',
				'¡Recibe tu recompensa!'
			]
		},
		block4: {
			title: 'Reglas principales',
			items1: [
				{
					title: 'Tener una cuenta Exnova',
					text: 'Debes ser un operador de Exnova, la cuenta debe estar verificada'
				},
				{
					title: 'Firma el acuerdo',
					text: 'Después de registrarse para participar, debe firmar la carta de acuerdo y enviárnosla a través de la dirección de correo electrónico vinculada a su cuenta.'
				}
			],
			item3Title: 'Publicar según el libro de reglas',
			item3Text: 'Debes seguir los lineamientos mencionados en la carta de acuerdo.',
			items2: [
				{
					text: 'Siga a Exnova',
					additional: [
						{ text: 'Facebook', link: 'https://www.facebook.com/iqoptioneu/' },
						{ text: 'Instagram', link: 'https://instagram.com/iqoption_official' }
					]
				},
				{
					text: 'Etiqueta a 3 amigos en nuestra publicación del concurso',
					additional: [{ text: 'Ver publicacion', link: 'https://www.facebook.com/iqoptioneu/' }]
				},
				{ text: 'Crea un vídeo y firma el acuerdo' },
				{
					text: 'Publica el vídeo en tus redes sociales con el hashtag <span>#InvestwithExnova</span>'
				}
			]
		},
		block5: {
			text1: 'Reclama una recompensa por lo que haces mejor.',
			text2: '¡Participa ahora!'
		}
	};
</script>

<svelte:head>
	<title>Exnova - Publica un vídeo en redes sociales y ganar US$ 50</title>
	<meta name="description" content="Exnova - Publica un vídeo en redes sociales y ganar US$ 50" />
	<meta property="og:title" content="Exnova - Publica un vídeo" />
	<meta property="og:description" content="Publica un vídeo en redes sociales y ganar US$ 50" />
	<meta property="og:image" content="/src/lib/images/fb_meta_img_es.jpg" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Exnova - Publica un vídeo" />
	<meta name="twitter:description" content="Publica un vídeo en redes sociales y ganar US$ 50" />
	<meta name="twitter:image" content="/src/lib/images/tw_meta_img_es.jpg" />
</svelte:head>

<AllBlocks lang="es" content={es_content} />
