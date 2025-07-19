<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Check, Star, Zap, Crown, Rocket } from '@lucide/svelte';
</script>

<section id="pricing" class="py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
        Precios transparentes para cada etapa de tu negocio
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Comienza gratis y escala según creces. Sin sorpresas, sin compromisos anuales obligatorios.
      </p>
    </div>

    <!-- Pricing Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Starter Plan -->
      <Card class="relative border-2 hover:shadow-xl transition-all duration-300">
        <CardHeader class="text-center pb-8">
          <div class="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Zap class="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle class="text-2xl">Starter</CardTitle>
          <CardDescription class="text-base">Perfecto para empezar</CardDescription>
          <div class="mt-4">
            <span class="text-4xl font-bold text-gray-900">Gratis</span>
            <span class="text-gray-500 ml-2">para siempre</span>
          </div>
        </CardHeader>
        <CardContent class="space-y-4">
          <ul class="space-y-3">
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">1 Agente IA</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">100 conversaciones/mes</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">WhatsApp Business</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">3 herramientas personalizadas</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Soporte por email</span>
            </li>
          </ul>
          <Button class="w-full mt-6" variant="outline">
            Comenzar Gratis
          </Button>
        </CardContent>
      </Card>

      <!-- Professional Plan -->
      <Card class="relative border-2 border-blue-500 hover:shadow-xl transition-all duration-300 scale-105">
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star class="h-4 w-4 mr-1" />
            Más Popular
          </div>
        </div>
        <CardHeader class="text-center pb-8">
          <div class="mx-auto w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Crown class="h-6 w-6 text-white" />
          </div>
          <CardTitle class="text-2xl">Professional</CardTitle>
          <CardDescription class="text-base">Para equipos en crecimiento</CardDescription>
          <div class="mt-4">
            <span class="text-4xl font-bold text-gray-900">$49</span>
            <span class="text-gray-500 ml-2">/mes por agente</span>
          </div>
        </CardHeader>
        <CardContent class="space-y-4">
          <ul class="space-y-3">
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">5 Agentes IA</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">2,500 conversaciones/mes</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Todos los canales</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Herramientas ilimitadas</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Analytics avanzados</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Integraciones API</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Soporte prioritario</span>
            </li>
          </ul>
          <Button class="w-full mt-6 bg-blue-500 hover:bg-blue-600">
            Prueba 14 días gratis
          </Button>
        </CardContent>
      </Card>

      <!-- Enterprise Plan -->
      <Card class="relative border-2 hover:shadow-xl transition-all duration-300">
        <CardHeader class="text-center pb-8">
          <div class="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Rocket class="h-6 w-6 text-purple-600" />
          </div>
          <CardTitle class="text-2xl">Enterprise</CardTitle>
          <CardDescription class="text-base">Para grandes organizaciones</CardDescription>
          <div class="mt-4">
            <span class="text-4xl font-bold text-gray-900">Custom</span>
            <span class="text-gray-500 ml-2">contactanos</span>
          </div>
        </CardHeader>
        <CardContent class="space-y-4">
          <ul class="space-y-3">
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Agentes IA ilimitados</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Conversaciones ilimitadas</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Canales personalizados</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Herramientas a medida</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">SSO y seguridad avanzada</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Onboarding dedicado</span>
            </li>
            <li class="flex items-center">
              <Check class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">Soporte 24/7</span>
            </li>
          </ul>
          <Button class="w-full mt-6" variant="outline">
            Contactar Ventas
          </Button>
        </CardContent>
      </Card>
    </div>

    <!-- FAQ Section -->
    <div class="mt-20">
      <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">
        Preguntas frecuentes sobre precios
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">¿Puedo cambiar de plan en cualquier momento?</h4>
          <p class="text-gray-600">Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se aplican inmediatamente.</p>
        </div>
        
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">¿Qué pasa si supero mi límite de conversaciones?</h4>
          <p class="text-gray-600">Te notificaremos antes de llegar al límite. Puedes actualizar tu plan o comprar conversaciones adicionales.</p>
        </div>
        
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">¿Hay descuentos por pago anual?</h4>
          <p class="text-gray-600">Sí, ofrecemos 2 meses gratis al pagar anualmente. Eso es un 16% de descuento.</p>
        </div>
        
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">¿Incluye soporte técnico?</h4>
          <p class="text-gray-600">Todos los planes incluyen soporte. Professional y Enterprise tienen soporte prioritario y dedicado.</p>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="mt-16 text-center">
      <div class="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          ¿Listo para revolucionar tu CRM?
        </h3>
        <p class="text-gray-600 mb-6">
          Únete a más de 1,000 empresas que ya están automatizando su gestión de clientes con IA.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" class="bg-blue-500 hover:bg-blue-600">
            Comenzar Prueba Gratuita
          </Button>
          <Button variant="outline" size="lg">
            Agendar Demo Personalizada
          </Button>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          Sin tarjeta de crédito • Setup en 5 minutos • Soporte en español
        </p>
      </div>
    </div>
  </div>
</section>
