<script>
	import fb_meta_img_es from '$lib/images/fb_meta_img_es.jpg';
	import tw_meta_img_es from '$lib/images/tw_meta_img_es.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const es_content = {
		btn: 'Gana 15$',
		block1: {
			h1: 'Exnova le ofrece<br /> la oportunidad de',
			h1_span: 'impulsar<br /> su carrera comercial',
			h2: 'Si tiene un teléfono y está activo en las redes sociales, lo apoyaremos en su viaje comercial.<br />Sólo necesitas mencionarnos con el hashtag <span>#ExnovaInvest</span>.',
			income: 'Tus ingresos'
		},
		block2: {
			title: 'Exnova le ofrece la oportunidad de impulsar su carrera comercial.',
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
						{ text: 'Facebook', link: 'https://facebook.com/exnova.en/' },
						{ text: 'Instagram', link: 'https://www.instagram.com/exnova_trading/' }
					]
				},
				{
					text: 'Etiqueta a 5 amigos en nuestra publicación del concurso',
					additional: [{ text: 'Ver publicacion', link: 'https://facebook.com/exnova.en/' }]
				},
				{ text: 'Crea un vídeo y firma el acuerdo' },
				{
					text: 'Publica el vídeo en tus redes sociales con el hashtag <span>#ExnovaInvest</span>'
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
	<title>Exnova - Publica un vídeo en redes sociales y ganar US$ 15</title>
	<meta name="description" content="Exnova - Publica un vídeo en redes sociales y ganar US$ 15" />
	<meta property="og:title" content="Exnova - Publica un vídeo" />
	<meta property="og:description" content="Publica un vídeo en redes sociales y ganar US$ 15" />
	<meta property="og:image" content={fb_meta_img_es} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Exnova - Publica un vídeo" />
	<meta name="twitter:description" content="Publica un vídeo en redes sociales y ganar US$ 15" />
	<meta name="twitter:image" content={tw_meta_img_es} />
</svelte:head>

<AllBlocks lang="es" content={es_content} />
