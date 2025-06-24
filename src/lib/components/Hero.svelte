<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Bot, MessageCircle, Zap, ArrowRight, Play } from '@lucide/svelte';
</script>

<section class="relative overflow-hidden py-20 sm:py-32">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <!-- Badge -->
      <div class="mb-8 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        <Bot class="mr-2 h-4 w-4" />
        Potenciado por Inteligencia Artificial
      </div>

      <!-- Headline -->
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        Tu CRM del futuro con
        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Agentes IA
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        Automatiza completamente tu gestión de clientes con agentes inteligentes que trabajan 24/7. 
        Conecta WhatsApp en segundos y crea herramientas personalizadas sin código.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" class="text-lg px-8 py-4">
          Comenzar Gratis
          <ArrowRight class="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" class="text-lg px-8 py-4">
          <Play class="mr-2 h-5 w-5" />
          Ver Demo
        </Button>
      </div>

      <!-- Social Proof -->
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
        <div class="flex items-center">
          <div class="flex -space-x-2">
            <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face" alt="Usuario 1" />
            <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face" alt="Usuario 2" />
            <img class="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face" alt="Usuario 3" />
          </div>
          <span class="ml-3">+1,000 empresas confían en nosotros</span>
        </div>
        <div class="flex items-center">
          <MessageCircle class="mr-2 h-4 w-4 text-green-500" />
          <span>Integración WhatsApp en 30 segundos</span>
        </div>
        <div class="flex items-center">
          <Zap class="mr-2 h-4 w-4 text-yellow-500" />
          <span>Setup en menos de 5 minutos</span>
        </div>
      </div>
    </div>

    <!-- Hero Image/Video Placeholder -->
    <div class="mt-16 sm:mt-24">
      <div class="relative mx-auto max-w-5xl">
        <div class="relative rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl">
          <div class="rounded-xl bg-white p-8">
            <div class="aspect-video rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div class="text-center">
                <Bot class="mx-auto h-16 w-16 text-blue-500 mb-4" />
                <p class="text-lg font-medium text-gray-700">Dashboard de Agentefy CRM</p>
                <p class="text-sm text-gray-500 mt-2">Agentes IA trabajando en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Floating elements -->
        <div class="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl"></div>
        <div class="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-purple-500/10 blur-xl"></div>
      </div>
    </div>
  </div>
</section>
