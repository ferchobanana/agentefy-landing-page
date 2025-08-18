<script>
    import {
		Zap,
		Shield,
		Clock,
	} from "@lucide/svelte";

    const benefits = [
    {
      icon: Clock,
      title: "Disponible 24/7",
      description:
        "Tu asistente virtual nunca descansa, atiende pacientes las 24 horas del día.",
    },
    {
      icon: Zap,
      title: "Respuesta Instantánea",
      description:
        "Reduce el tiempo de espera de horas a segundos para tus pacientes.",
    },
    {
      icon: Shield,
      title: "Datos Seguros",
      description:
        "Cumple con todas las normativas de privacidad médica y protección de datos.",
    },
  ];
</script>

<!-- Benefits Section -->
<section id="benefits" class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        ¿Por qué elegir Agentefy Med?
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Nuestro sistema contempla todas las posibilidades para que tus pacientes
        tengan una experiencia incluso mejor que con humano. Y una plataforma
        que de manera sencillo te permite administrarlo todo.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      {#each benefits as benefit}
        <div
          class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div
            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
          >
            <svelte:component
              this={benefit.icon}
              class="h-6 w-6 text-blue-600"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {benefit.title}
          </h3>
          <p class="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>