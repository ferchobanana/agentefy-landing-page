<script lang="ts">
	import IconoLogo from "$lib/imgs/icono-agentefy.png";
	import OrdenMedica from "$lib/imgs/orden-medica-edit.jpg";

    import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle,
	} from "$lib/components/ui/card";

    import {
		Calendar,
		Images,
		FileCheck,
		RefreshCwOff,
		Hammer,
		SearchCheck
	} from "@lucide/svelte";
    
	const features = [
		{
			icon: Calendar,
			title: "Agendamiento de Citas",
			description: "Cualquier sistema de agendamiento de forma automática. El agente sabe cómo administrar las citas.",
			orientation: "reverse",
			chat: [
				{
					role: "ai",
					text: "¿Para qué día te gustaria agendar?",
					image: null
				},
				{
					role: "human",
					text: "para el proximo lunes a medio día",
					image: null
				},
				{
					role: "ai",
					text: "Tu cita ha sido agendada para el próximo lunes a las 12 pm",
					image: null
				},
			]
		},
		{
			icon: Images,
			title: "Interpretación de Ordenes Médicas",
			description: "Nuestros agentes entienden de manera nativa ordenes médicas, imagenes, documentos o hasta videos. No usamos un OCR. Nuestros agentes son multimodales.",
			orientation: "normal",
			chat: [
				{
					role: "human",
					text: "",
					image: OrdenMedica
				},
				{
					role: "ai",
					text: "Veo que necesitas una resonancia magnética de rodilla derecha",
					image: null
				},
			]
		},
		{
			icon: FileCheck,
			title: "Responde con información verificada",
			description: "Nuestros agentes tienen herramientas que le permiten responder información verificada de los estudios, para no responder con información erronea o falsa.",
			orientation: "reverse",
			chat: [
				{
					role: "human",
					text: "¿Cuál es la preparación del estudio?",
					image: null
				},
				{
					role: "tool",
					icon: Hammer,
					text: "Verificación <b>información resonancias</b>",
					image: null
				},
				{
					role: "ai",
					text: "Para su resonancia de rodilla, le pedimos que se presente con ropa cómoda, sin objetos metálicos (joyas, relojes, etc.). El estudio dura aproximadamente 30 minutos.",
					image: null
				},
			]
		},
		{
			icon: RefreshCwOff,
			title: "Sistema de autocorreción",
			description: "Nuestro sistema corrige a los agentes cuando se equivocan, reduciendo el porcentaje de error a menos del 1%",
			orientation: "normal",
			chat: [
				{
					role: "human",
					text: "para el proximo lunes a medio día",
					image: null
				},
				{
					role: "tool",
					icon: SearchCheck,
					text: "<b>Corrección</b> automatica realizada.",
					image: null
				},
				{
					role: "ai",
					text: "Tu cita ha sido agendada para el próximo lunes a las 12 pm",
					image: null
				},
			]
		},
	];
</script>

<!-- Features Section -->
<section id="features" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				¿Qué púede hacer el agente?
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Nuestros agentes de IA están diseñados para atender a tus pacientes en
				el proceso de agendamiento. Sus capacidades tecnologicas le permiten
				entender más allá de solo texto y llevar una conversación realista.
			</p>
		</div>

		<div class="flex flex-col gap-30">
			{#each features as feature}
				<div class="grid md:grid-cols-2 grid-flow-row justify-center gap-10 md:gap-20 items-center">
					<div class="{feature.orientation == "reverse" ? "md:order-last" : "md:justify-self-end" }">
						<Card class="text-center hover:shadow-lg transition-shadow duration-300 max-w-[400px]">
							<CardHeader>
								<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<feature.icon class="h-7 w-7 text-blue-600"></feature.icon>
								</div>
								<CardTitle class="text-xl mb-2">{feature.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription class="text-gray-600 leading-relaxed">
									{feature.description}
								</CardDescription>
							</CardContent>
						</Card>
					</div>
					
					<!-- Contenedor CHAT -->
					<div class="{feature.orientation == "reverse" ? "md:justify-self-end" : "md:justify-self-start" }">
						<div class="bg-white rounded-2xl shadow-2xl max-w-[450px] p-6 mx-auto">
							<div class="flex items-center space-x-3 mb-4">
								<div class="w-10 h-10 rounded-full flex items-center justify-center">
									<img src={IconoLogo} class="w-[80%]" alt="" />
								</div>
								<div>
									<h3 class="font-semibold text-gray-900">Agentefy <i>Med</i></h3>
									<p class="text-sm text-blue-600">En línea</p>
								</div>
							</div>

							<div class="flex flex-col gap-3">
								{#each feature.chat as m}
									{#if m.role == "ai"}
										<div class="bg-gray-100 rounded-lg p-3 text-sm w-[320px] self-end">
											{m.text}
										</div>
									{:else if m.role == "human"}
										{#if m.image}
											<div class="bg-blue-500 text-white rounded-lg p-3 text-sm w-[320px]">
												<img src={m.image} alt="Imagen chat">
											</div>
										{:else}
											<div class="bg-blue-500 text-white rounded-lg p-3 text-sm w-[320px]">
												{m.text}
											</div>
										{/if}
									{:else}
										<div class="bg-[#dde6ee] rounded-lg p-3 text-sm flex gap-2 self-end w-[350px] md:w-[380px]">
											<m.icon size="18"></m.icon> {@html m.text}
										</div>
									{/if}
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>