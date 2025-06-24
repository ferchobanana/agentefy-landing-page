<script lang="ts">
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Bot, Brain, Zap, Shield, BarChart3, Users, MessageSquare, Workflow } from '@lucide/svelte';
</script>

<section id="features" class="py-20 sm:py-32 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        CRM Inteligente que Revoluciona tu Negocio
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Nuestros agentes IA no solo automatizan tareas, crean estrategias inteligentes para hacer crecer tu negocio
      </p>
    </div>

    <!-- Features Grid -->
    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Agentes IA Autónomos -->
      <Card class="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <CardHeader class="relative">
          <div class="flex items-center space-x-3">
            <div class="rounded-lg bg-blue-500 p-2">
              <Bot class="h-6 w-6 text-white" />
            </div>
            <CardTitle class="text-xl">Agentes IA Autónomos</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="relative">
          <CardDescription class="text-base">
            Agentes que aprenden de tus clientes, toman decisiones inteligentes y ejecutan acciones automáticamente sin supervisión humana.
          </CardDescription>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              Respuestas automáticas contextuales
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              Seguimiento proactivo de leads
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              Análisis predictivo de comportamiento
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- Aprendizaje Continuo -->
      <Card class="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
        <CardHeader class="relative">
          <div class="flex items-center space-x-3">
            <div class="rounded-lg bg-purple-500 p-2">
              <Brain class="h-6 w-6 text-white" />
            </div>
            <CardTitle class="text-xl">Aprendizaje Continuo</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="relative">
          <CardDescription class="text-base">
            Los agentes mejoran constantemente analizando cada interacción, adaptándose a tu industria y perfeccionando sus respuestas.
          </CardDescription>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
              Optimización automática de procesos
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
              Personalización por industria
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
              Mejora continua de conversiones
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- Automatización Inteligente -->
      <Card class="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
        <CardHeader class="relative">
          <div class="flex items-center space-x-3">
            <div class="rounded-lg bg-green-500 p-2">
              <Zap class="h-6 w-6 text-white" />
            </div>
            <CardTitle class="text-xl">Automatización Total</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="relative">
          <CardDescription class="text-base">
            Desde la captura de leads hasta el cierre de ventas, automatiza todo tu embudo comercial con inteligencia artificial avanzada.
          </CardDescription>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
              Workflows complejos sin código
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
              Integración con 500+ herramientas
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
              Escalado automático de procesos
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- Seguridad Empresarial -->
      <Card class="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50"></div>
        <CardHeader class="relative">
          <div class="flex items-center space-x-3">
            <div class="rounded-lg bg-red-500 p-2">
              <Shield class="h-6 w-6 text-white" />
            </div>
            <CardTitle class="text-xl">Seguridad Empresarial</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="relative">
          <CardDescription class="text-base">
            Protección de datos nivel bancario, cumplimiento GDPR y controles de acceso granulares para equipos empresariales.
          </CardDescription>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-red-500"></div>
              Encriptación end-to-end
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-red-500"></div>
              Auditoría completa de acciones
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-red-500"></div>
              Roles y permisos avanzados
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- Analytics Avanzados -->
      <Card class="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50"></div>
        <CardHeader class="relative">
          <div class="flex items-center space-x-3">
            <div class="rounded-lg bg-yellow-500 p-2">
              <BarChart3 class="h-6 w-6 text-white" />
            </div>
            <CardTitle class="text-xl">Analytics Predictivos</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="relative">
          <CardDescription class="text-base">
            Dashboards inteligentes que predicen tendencias, identifican oportunidades y optimizan automáticamente tu estrategia comercial.
          </CardDescription>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
              Predicción de churn de clientes
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
              Scoring automático de leads
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
              Reportes ejecutivos automáticos
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- Colaboración en Equipo -->
      <Card class="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50"></div>
        <CardHeader class="relative">
          <div class="flex items-center space-x-3">
            <div class="rounded-lg bg-teal-500 p-2">
              <Users class="h-6 w-6 text-white" />
            </div>
            <CardTitle class="text-xl">Colaboración Inteligente</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="relative">
          <CardDescription class="text-base">
            Los agentes coordinan automáticamente con tu equipo, asignan tareas según expertise y mantienen a todos sincronizados.
          </CardDescription>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500"></div>
              Asignación inteligente de leads
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500"></div>
              Notificaciones contextuales
            </li>
            <li class="flex items-center">
              <div class="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500"></div>
              Handoff humano-IA perfecto
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <!-- Bottom CTA -->
    <div class="mt-16 text-center">
      <p class="text-lg text-gray-600 mb-6">
        ¿Listo para experimentar el futuro del CRM?
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div class="flex items-center text-sm text-gray-500">
          <MessageSquare class="mr-2 h-4 w-4 text-green-500" />
          <span>Setup en 5 minutos</span>
        </div>
        <div class="flex items-center text-sm text-gray-500">
          <Workflow class="mr-2 h-4 w-4 text-blue-500" />
          <span>Sin necesidad de código</span>
        </div>
        <div class="flex items-center text-sm text-gray-500">
          <Shield class="mr-2 h-4 w-4 text-red-500" />
          <span>Seguridad empresarial</span>
        </div>
      </div>
    </div>
  </div>
</section>
