<script lang="ts">
    import {
		Star
	} from "@lucide/svelte";

    import {
		Card,
		CardContent,
		CardDescription,
		CardHeader
	} from "$lib/components/ui/card";

    const testimonials = [
    {
      name: "Dr. Carlos Mendoza",
      clinic: "Clínica Especializada del Noroeste",
      text: "La capacidad de entender ordenes médicas casi ilegibles me parece una locura. Increíble tecnología.",
      rating: 5,
    },
    {
      name: "Dra. Ana Rodríguez",
      clinic: "Instituto de Estudios Médicos Sur",
      text: "Gracias al agente nuestros pacientes son atendidos inmediatamente y nuestra agenda está perfectamente organizada.",
      rating: 5,
    },
    {
      name: "Dr. María González",
      clinic: "Centro Médico San Rafael",
      text: "Nuestro agente transformo nuestra visión sobre los procesos que podemos automatizar con nuestra clínica.",
      rating: 5,
    },
  ];
</script>

<!-- Testimonials Section -->
<section id="testimonials" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Lo que dicen nuestros clientes
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Clínicas médicas de toda Latinoamérica ya están automatizando su
        atención a pacientes y maximizando su agenda para aprovechar todos los
        horarios con nuestros agentes de IA.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      {#each testimonials as testimonial}
        <Card class="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div class="flex items-center space-x-1 mb-4">
              {#each Array(testimonial.rating) as _}
                <Star class="h-5 w-5 text-yellow-400 fill-current" />
              {/each}
            </div>
            <CardDescription class="text-gray-700 leading-relaxed text-base">
              "{testimonial.text}"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="border-t pt-4">
              <p class="font-semibold text-gray-900">{testimonial.name}</p>
              <p class="text-sm text-gray-600">{testimonial.clinic}</p>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>