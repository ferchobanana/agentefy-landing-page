<script lang="ts">
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
	} from "@lucide/svelte";
    
    const features = [
    {
      icon: Calendar,
      title: "Agendamiento de Citas",
      description:
        "Cualquier sistema de agendamiento de forma automática. El agente sabe cómo administrar las citas.",
    },
    {
      icon: Images,
      title: "Interpretación de Ordenes Médicas",
      description:
        "Nuestros agentes entienden de manera nativa ordenes médicas, imagenes, documentos o hasta videos. No usamos un OCR. Nuestros agentes son multimodales.",
    },
    {
      icon: FileCheck,
      title: "Responde con información verificada",
      description:
        "Nuestros agentes tienen herramientas que le permiten responder información verificada de los estudios, para no responder con información erronea o falsa.",
    },
    {
      icon: RefreshCwOff,
      title: "Sistema de autocorreción",
      description:
        "Nuestro sistema corrige a los agentes cuando se equivocan, reduciendo el porcentaje de error a menos del 1%",
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

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each features as feature}
        <Card
          class="text-center hover:shadow-lg transition-shadow duration-300"
        >
          <CardHeader>
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
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
      {/each}
    </div>
  </div>
</section>