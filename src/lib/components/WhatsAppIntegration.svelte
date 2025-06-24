<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { MessageCircle, Smartphone, Zap, CheckCircle, ArrowRight, Clock, Users, TrendingUp } from '@lucide/svelte';
</script>

<section id="whatsapp" class="py-20 sm:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div>
        <div class="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-6">
          <MessageCircle class="mr-2 h-4 w-4" />
          Integración WhatsApp Business
        </div>
        
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Conecta WhatsApp en 
          <span class="text-green-600">30 segundos</span>
        </h2>
        
        <p class="text-lg text-gray-600 mb-8">
          La integración más rápida y sencilla del mercado. Nuestros agentes IA toman control inmediato de tus conversaciones de WhatsApp, respondiendo a clientes 24/7 con la personalidad de tu marca.
        </p>

        <!-- Benefits List -->
        <div class="space-y-4 mb-8">
          <div class="flex items-start space-x-3">
            <CheckCircle class="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-gray-900">Setup Instantáneo</h4>
              <p class="text-gray-600">Solo escanea un código QR y listo. Sin configuraciones complejas ni documentación técnica.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle class="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-gray-900">Respuestas Inteligentes</h4>
              <p class="text-gray-600">Los agentes entienden contexto, emociones y responden como tu mejor vendedor.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle class="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-gray-900">Handoff Perfecto</h4>
              <p class="text-gray-600">Transición suave a humanos cuando es necesario, con todo el contexto preservado.</p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">98%</div>
            <div class="text-sm text-gray-600">Respuestas automáticas</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">2s</div>
            <div class="text-sm text-gray-600">Tiempo de respuesta</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">24/7</div>
            <div class="text-sm text-gray-600">Disponibilidad</div>
          </div>
        </div>

        <Button size="lg" class="bg-green-600 hover:bg-green-700">
          Conectar WhatsApp Ahora
          <ArrowRight class="ml-2 h-5 w-5" />
        </Button>
      </div>

      <!-- Visual/Demo -->
      <div class="relative">
        <!-- Phone Mockup -->
        <div class="relative mx-auto w-80">
          <div class="relative rounded-3xl bg-black p-2 shadow-2xl">
            <div class="rounded-2xl bg-white overflow-hidden">
              <!-- Phone Header -->
              <div class="bg-green-500 px-4 py-3 flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle class="h-4 w-4 text-white" />
                </div>
                <div class="flex-1">
                  <div class="text-white font-medium text-sm">Tu Negocio</div>
                  <div class="text-green-100 text-xs">En línea</div>
                </div>
              </div>

              <!-- Chat Messages -->
              <div class="p-4 space-y-3 h-96 overflow-y-auto bg-gray-50">
                <!-- Customer Message -->
                <div class="flex justify-end">
                  <div class="bg-green-500 text-white rounded-2xl rounded-tr-md px-4 py-2 max-w-xs">
                    <p class="text-sm">Hola, ¿tienen disponibilidad para mañana?</p>
                    <div class="text-xs text-green-100 mt-1">14:32</div>
                  </div>
                </div>

                <!-- AI Response -->
                <div class="flex justify-start">
                  <div class="bg-white rounded-2xl rounded-tl-md px-4 py-2 max-w-xs shadow-sm">
                    <p class="text-sm text-gray-800">¡Hola! 👋 Sí, tenemos disponibilidad mañana. ¿Para qué servicio te interesa agendar?</p>
                    <div class="text-xs text-gray-500 mt-1">14:32 ✓✓</div>
                  </div>
                </div>

                <!-- Customer Message -->
                <div class="flex justify-end">
                  <div class="bg-green-500 text-white rounded-2xl rounded-tr-md px-4 py-2 max-w-xs">
                    <p class="text-sm">Consulta de marketing digital</p>
                    <div class="text-xs text-green-100 mt-1">14:33</div>
                  </div>
                </div>

                <!-- AI Response with CTA -->
                <div class="flex justify-start">
                  <div class="bg-white rounded-2xl rounded-tl-md px-4 py-2 max-w-xs shadow-sm">
                    <p class="text-sm text-gray-800">Perfecto! Te puedo agendar mañana a las 10:00 AM o 3:00 PM. ¿Cuál prefieres?</p>
                    <div class="mt-2 space-y-1">
                      <div class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-lg">📅 10:00 AM</div>
                      <div class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-lg">📅 3:00 PM</div>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">14:33 ✓✓</div>
                  </div>
                </div>

                <!-- Typing Indicator -->
                <div class="flex justify-start">
                  <div class="bg-white rounded-2xl rounded-tl-md px-4 py-2 shadow-sm">
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                      <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-2 shadow-lg">
            <Zap class="h-4 w-4" />
          </div>
          <div class="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg">
            <Smartphone class="h-4 w-4" />
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="absolute -left-8 top-1/4 hidden lg:block">
          <Card class="w-48 shadow-lg">
            <CardContent class="p-4">
              <div class="flex items-center space-x-2 mb-2">
                <Clock class="h-4 w-4 text-blue-500" />
                <span class="text-sm font-medium">Respuesta Instantánea</span>
              </div>
              <p class="text-xs text-gray-600">Agente IA respondió en 0.8 segundos</p>
            </CardContent>
          </Card>
        </div>

        <div class="absolute -right-8 bottom-1/4 hidden lg:block">
          <Card class="w-48 shadow-lg">
            <CardContent class="p-4">
              <div class="flex items-center space-x-2 mb-2">
                <TrendingUp class="h-4 w-4 text-green-500" />
                <span class="text-sm font-medium">Conversión Alta</span>
              </div>
              <p class="text-xs text-gray-600">85% de leads califican automáticamente</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <!-- Integration Steps -->
    <div class="mt-20">
      <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">
        Integración en 3 pasos simples
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-green-600">1</span>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Escanea QR</h4>
          <p class="text-gray-600">Abre WhatsApp Web y escanea el código QR desde tu dashboard</p>
        </div>
        
        <div class="text-center">
          <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-green-600">2</span>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Configura Agente</h4>
          <p class="text-gray-600">Define la personalidad y conocimiento de tu agente IA</p>
        </div>
        
        <div class="text-center">
          <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-green-600">3</span>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">¡Listo!</h4>
          <p class="text-gray-600">Tu agente IA ya está respondiendo a todos tus clientes</p>
        </div>
      </div>
    </div>
  </div>
</section>
