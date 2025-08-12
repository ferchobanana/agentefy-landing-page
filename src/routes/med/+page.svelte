<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    MessageCircle,
    Calendar,
    FileText,
    UserCheck,
    CheckCircle,
    Star,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    Zap,
    Shield,
    Clock,
  } from "@lucide/svelte";

  let isMenuOpen = false;

  const features = [
    {
      icon: Calendar,
      title: "Agendamiento Automático",
      description:
        "Programa citas médicas automáticamente y sincroniza con Google Calendar en tiempo real.",
    },
    {
      icon: FileText,
      title: "Lectura de Recetas",
      description:
        "Interpreta recetas médicas escritas a mano usando IA avanzada de reconocimiento óptico.",
    },
    {
      icon: UserCheck,
      title: "Evaluación de Pacientes",
      description:
        "Realiza preguntas específicas para determinar la elegibilidad del paciente para estudios.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Nativo",
      description:
        "Integración completa con WhatsApp Business para una experiencia familiar.",
    },
  ];

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

  const testimonials = [
    {
      name: "Dr. María González",
      clinic: "Centro Médico San Rafael",
      text: "Nuestro agente de IA ha revolucionado la forma en que gestionamos las citas. Los pacientes están más satisfechos y nosotros más organizados.",
      rating: 5,
    },
    {
      name: "Dr. Carlos Mendoza",
      clinic: "Clínica Especializada del Norte",
      text: "La capacidad de leer recetas escritas a mano nos ha ahorrado horas de trabajo manual. Increíble tecnología.",
      rating: 5,
    },
    {
      name: "Dra. Ana Rodríguez",
      clinic: "Instituto de Estudios Médicos",
      text: "El proceso de evaluación de pacientes es ahora mucho más eficiente. Recomiendo este servicio al 100%.",
      rating: 5,
    },
  ];
</script>

<svelte:head>
  <title>Agentes IA para WhatsApp - Clínicas Médicas</title>
  <meta
    name="description"
    content="Automatiza tu clínica con agentes de IA para WhatsApp. Agenda citas, lee ordenes médicas y evalúa pacientes automáticamente."
  />
</svelte:head>

<!-- Navigation -->
<nav
  class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center space-x-2">
        <MessageCircle class="h-8 w-8 text-blue-600" />
        <span class="font-bold text-xl text-gray-900">MediBot AI</span>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a
          href="#features"
          class="text-gray-700 hover:text-blue-600 transition-colors"
          >Características</a
        >
        <a
          href="#benefits"
          class="text-gray-700 hover:text-blue-600 transition-colors"
          >Beneficios</a
        >
        <a
          href="#testimonials"
          class="text-gray-700 hover:text-blue-600 transition-colors"
          >Testimonios</a
        >
        <a
          href="#pricing"
          class="text-gray-700 hover:text-blue-600 transition-colors">Precios</a
        >
        <Button class="bg-blue-600 hover:bg-blue-700">Contactar</Button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2" onclick={() => (isMenuOpen = !isMenuOpen)}>
        <div class="w-6 h-6 flex flex-col justify-center items-center">
          <span
            class="w-4 h-0.5 bg-gray-600 mb-1 transition-all {isMenuOpen
              ? 'rotate-45 translate-y-1.5'
              : ''}"
          ></span>
          <span
            class="w-4 h-0.5 bg-gray-600 mb-1 transition-all {isMenuOpen
              ? 'opacity-0'
              : ''}"
          ></span>
          <span
            class="w-4 h-0.5 bg-gray-600 transition-all {isMenuOpen
              ? '-rotate-45 -translate-y-1.5'
              : ''}"
          ></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4">
          <a
            href="#features"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Características</a
          >
          <a
            href="#benefits"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Beneficios</a
          >
          <a
            href="#testimonials"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Testimonios</a
          >
          <a
            href="#pricing"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Precios</a
          >
          <Button class="bg-blue-600 hover:bg-blue-700 w-full">Contactar</Button
          >
        </div>
      </div>
    {/if}
  </div>
</nav>

<!-- Hero Section -->
<section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="text-center lg:text-left">
        <h1
          class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Revoluciona tu <span class="text-blue-600">Clínica Médica</span> con IA
        </h1>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Automatiza el agendamiento de citas, lee recetas escritas a mano y
          evalúa pacientes con nuestros agentes de IA para WhatsApp. Disponible
          24/7 para tu clínica.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button
            size="lg"
            class="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
          >
            Comenzar Ahora
            <ArrowRight class="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" class="text-lg px-8 py-4">
            Ver Demo
          </Button>
        </div>
        <div
          class="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500"
        >
          <div class="flex items-center">
            <CheckCircle class="h-5 w-5 text-blue-500 mr-2" />
            Implementación en 48h
          </div>
          <div class="flex items-center">
            <CheckCircle class="h-5 w-5 text-blue-500 mr-2" />
            Soporte 24/7
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <MessageCircle class="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">MediBot AI</h3>
              <p class="text-sm text-blue-600">En línea</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-gray-100 rounded-lg p-3 text-sm">
              Hola! Soy tu asistente médico virtual. ¿En qué puedo ayudarte hoy?
            </div>
            <div class="bg-blue-500 text-white rounded-lg p-3 text-sm ml-8">
              Necesito agendar una cita para un estudio
            </div>
            <div class="bg-gray-100 rounded-lg p-3 text-sm">
              Perfecto! Te ayudo con eso. ¿Podrías enviarme tu receta médica?
            </div>
            <div class="bg-blue-500 text-white rounded-lg p-3 text-sm ml-8">
              📄 [Imagen de receta]
            </div>
            <div class="bg-gray-100 rounded-lg p-3 text-sm">
              He leído tu receta. Necesitas un estudio de sangre. ¿Prefieres
              mañana a las 9:00 AM o 2:00 PM?
            </div>
          </div>
        </div>

        <!-- Floating elements -->
        <div
          class="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce"
        >
          <Calendar class="h-6 w-6 text-blue-600" />
        </div>
        <div
          class="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-pulse"
        >
          <FileText class="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Características Principales
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Nuestros agentes de IA están diseñados específicamente para clínicas
        médicas, con funcionalidades avanzadas que simplifican tu trabajo
        diario.
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
              <svelte:component
                this={feature.icon}
                class="h-8 w-8 text-blue-600"
              />
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

<!-- Benefits Section -->
<section id="benefits" class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        ¿Por qué elegir MediBot AI?
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Transforma la experiencia de tus pacientes y optimiza la eficiencia de
        tu clínica con tecnología de inteligencia artificial de última
        generación.
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

<!-- Testimonials Section -->
<section id="testimonials" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Lo que dicen nuestros clientes
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Clínicas médicas de toda Latinoamérica ya están transformando su
        atención al paciente con nuestros agentes de IA.
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

<!-- Pricing Section -->
<section id="pricing" class="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Precios Transparentes
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Inversión única para implementación y una tarifa mensual accesible. Sin
        costos ocultos, sin sorpresas.
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <Card class="bg-white shadow-2xl">
        <CardHeader class="text-center pb-8">
          <CardTitle class="text-3xl font-bold text-gray-900 mb-2">
            Plan Profesional
          </CardTitle>
          <CardDescription class="text-lg text-gray-600">
            Todo lo que necesitas para automatizar tu clínica médica
          </CardDescription>
        </CardHeader>
        <CardContent class="px-8 pb-8">
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="text-center">
              <div
                class="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
              >
                <Zap class="h-10 w-10 text-blue-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Implementación
              </h3>
              <div class="text-4xl font-bold text-blue-600 mb-2">$1,500</div>
              <p class="text-gray-600">Pago único</p>
              <ul class="mt-4 space-y-2 text-sm text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Configuración completa
                </li>
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Integración con WhatsApp
                </li>
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Capacitación del equipo
                </li>
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Soporte durante implementación
                </li>
              </ul>
            </div>

            <div class="text-center">
              <div
                class="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
              >
                <Calendar class="h-10 w-10 text-blue-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Mensualidad</h3>
              <div class="text-4xl font-bold text-blue-600 mb-2">$49</div>
              <p class="text-gray-600">Por mes</p>
              <ul class="mt-4 space-y-2 text-sm text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Mensajes ilimitados
                </li>
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Actualizaciones automáticas
                </li>
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Soporte técnico 24/7
                </li>
                <li class="flex items-center">
                  <CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
                  Reportes y analíticas
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <Button
              size="lg"
              class="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4"
            >
              Solicitar Demo Gratuita
              <ArrowRight class="ml-2 h-5 w-5" />
            </Button>
            <p class="mt-4 text-sm text-gray-600">
              Demo personalizada • Sin compromiso • Implementación en 48 horas
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-blue-600">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
      ¿Listo para revolucionar tu clínica médica?
    </h2>
    <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
      Únete a las clínicas médicas que ya están automatizando su atención al
      paciente con inteligencia artificial. Comienza hoy mismo.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" variant="secondary" class="text-lg px-8 py-4">
        Agendar Consulta Gratuita
      </Button>
      <Button
        size="lg"
        variant="outline"
        class="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600"
      >
        Descargar Brochure
      </Button>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-4 gap-8">
      <div class="col-span-2">
        <div class="flex items-center space-x-2 mb-4">
          <MessageCircle class="h-8 w-8 text-blue-400" />
          <span class="font-bold text-xl">MediBot AI</span>
        </div>
        <p class="text-gray-400 mb-6 max-w-md">
          Revolucionamos la atención médica con agentes de IA para WhatsApp,
          diseñados específicamente para clínicas de estudios médicos.
        </p>
        <div class="space-y-2">
          <div class="flex items-center space-x-3">
            <Phone class="h-5 w-5 text-blue-400" />
            <span class="text-gray-300">+1 (555) 123-4567</span>
          </div>
          <div class="flex items-center space-x-3">
            <Mail class="h-5 w-5 text-blue-400" />
            <span class="text-gray-300">contacto@medibot-ai.com</span>
          </div>
          <div class="flex items-center space-x-3">
            <MapPin class="h-5 w-5 text-blue-400" />
            <span class="text-gray-300">Ciudad de México, México</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Servicios</h3>
        <ul class="space-y-2 text-gray-400">
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Agentes de IA</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Integración WhatsApp</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Google Calendar</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Lectura de Recetas</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Empresa</h3>
        <ul class="space-y-2 text-gray-400">
          <li>
            <a href="#" class="hover:text-white transition-colors">Acerca de</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Blog</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Casos de Éxito</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Contacto</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>&copy; 2024 MediBot AI. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
