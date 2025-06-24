<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Wrench, Code, Zap, Puzzle, ArrowRight, Sparkles, Database, Globe, Calendar, Calculator, FileText, ShoppingCart } from '@lucide/svelte';
</script>

<section id="tools" class="py-20 sm:py-32 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 mb-6">
        <Wrench class="mr-2 h-4 w-4" />
        Herramientas Personalizadas
      </div>
      
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
        Crea herramientas únicas para tus 
        <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Agentes IA
        </span>
      </h2>
      
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Sin escribir una línea de código, diseña herramientas específicas para tu industria. 
        Tus agentes las usarán automáticamente para resolver problemas complejos y únicos de tu negocio.
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <!-- Tool Builder Interface -->
      <div class="relative">
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-xl">
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Constructor de Herramientas</h3>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-red-400 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div class="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>

          <!-- Tool Being Built -->
          <div class="bg-white rounded-lg p-4 mb-4 border-2 border-dashed border-purple-200">
            <div class="flex items-center space-x-3 mb-3">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calculator class="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900">Calculadora de ROI</h4>
                <p class="text-sm text-gray-500">Para agentes de ventas</p>
              </div>
            </div>
            
            <div class="space-y-2">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Inversión inicial:</span>
                <span class="font-mono bg-gray-100 px-2 py-1 rounded">$10,000</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Retorno mensual:</span>
                <span class="font-mono bg-gray-100 px-2 py-1 rounded">$2,500</span>
              </div>
              <div class="flex items-center justify-between text-sm font-medium">
                <span class="text-gray-900">ROI proyectado:</span>
                <span class="text-green-600 font-mono bg-green-50 px-2 py-1 rounded">300%</span>
              </div>
            </div>
          </div>

          <!-- Available Components -->
          <div class="grid grid-cols-3 gap-2">
            <div class="bg-blue-50 p-2 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition-colors">
              <Database class="h-4 w-4 text-blue-600 mx-auto mb-1" />
              <span class="text-xs text-blue-700">Base de Datos</span>
            </div>
            <div class="bg-green-50 p-2 rounded-lg text-center cursor-pointer hover:bg-green-100 transition-colors">
              <Globe class="h-4 w-4 text-green-600 mx-auto mb-1" />
              <span class="text-xs text-green-700">API Externa</span>
            </div>
            <div class="bg-orange-50 p-2 rounded-lg text-center cursor-pointer hover:bg-orange-100 transition-colors">
              <Calendar class="h-4 w-4 text-orange-600 mx-auto mb-1" />
              <span class="text-xs text-orange-700">Calendario</span>
            </div>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute -top-4 -right-4 bg-purple-500 text-white rounded-full p-3 shadow-lg">
          <Sparkles class="h-5 w-5" />
        </div>
        <div class="absolute -bottom-4 -left-4 bg-pink-500 text-white rounded-full p-3 shadow-lg">
          <Code class="h-5 w-5" />
        </div>
      </div>

      <!-- Features List -->
      <div class="space-y-6">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Puzzle class="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Constructor Visual</h4>
            <p class="text-gray-600">
              Arrastra y suelta componentes para crear herramientas complejas. 
              Conecta APIs, bases de datos y servicios externos sin programar.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Zap class="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Integración Automática</h4>
            <p class="text-gray-600">
              Una vez creada, la herramienta se integra automáticamente con todos tus agentes. 
              Ellos sabrán cuándo y cómo usarla.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Database class="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Datos en Tiempo Real</h4>
            <p class="text-gray-600">
              Conecta con cualquier fuente de datos: CRMs, ERPs, APIs públicas, 
              hojas de cálculo y más. Información siempre actualizada.
            </p>
          </div>
        </div>

        <Button size="lg" class="bg-purple-600 hover:bg-purple-700">
          Crear Mi Primera Herramienta
          <ArrowRight class="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>

    <!-- Example Tools -->
    <div>
      <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">
        Herramientas que puedes crear en minutos
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- ROI Calculator -->
        <Card class="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Calculator class="h-5 w-5 text-green-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Calculadora ROI</CardTitle>
                <CardDescription>Para equipos de ventas</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600 mb-4">
              Calcula automáticamente el retorno de inversión para propuestas comerciales complejas.
            </p>
            <div class="flex items-center text-xs text-gray-500">
              <span class="bg-green-50 text-green-700 px-2 py-1 rounded-full mr-2">Ventas</span>
              <span>5 min setup</span>
            </div>
          </CardContent>
        </Card>

        <!-- Inventory Checker -->
        <Card class="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart class="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Consultor de Inventario</CardTitle>
                <CardDescription>Para e-commerce</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600 mb-4">
              Verifica stock en tiempo real y sugiere productos alternativos automáticamente.
            </p>
            <div class="flex items-center text-xs text-gray-500">
              <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded-full mr-2">E-commerce</span>
              <span>3 min setup</span>
            </div>
          </CardContent>
        </Card>

        <!-- Appointment Scheduler -->
        <Card class="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar class="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Agendador Inteligente</CardTitle>
                <CardDescription>Para servicios</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600 mb-4">
              Agenda citas considerando disponibilidad, ubicación y preferencias del cliente.
            </p>
            <div class="flex items-center text-xs text-gray-500">
              <span class="bg-purple-50 text-purple-700 px-2 py-1 rounded-full mr-2">Servicios</span>
              <span>4 min setup</span>
            </div>
          </CardContent>
        </Card>

        <!-- Document Generator -->
        <Card class="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText class="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Generador de Contratos</CardTitle>
                <CardDescription>Para legales</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600 mb-4">
              Genera contratos personalizados basados en plantillas y datos del cliente.
            </p>
            <div class="flex items-center text-xs text-gray-500">
              <span class="bg-orange-50 text-orange-700 px-2 py-1 rounded-full mr-2">Legal</span>
              <span>7 min setup</span>
            </div>
          </CardContent>
        </Card>

        <!-- Price Calculator -->
        <Card class="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Calculator class="h-5 w-5 text-red-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Cotizador Dinámico</CardTitle>
                <CardDescription>Para manufactura</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600 mb-4">
              Calcula precios considerando materiales, mano de obra y márgenes en tiempo real.
            </p>
            <div class="flex items-center text-xs text-gray-500">
              <span class="bg-red-50 text-red-700 px-2 py-1 rounded-full mr-2">Manufactura</span>
              <span>6 min setup</span>
            </div>
          </CardContent>
        </Card>

        <!-- API Connector -->
        <Card class="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Globe class="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <CardTitle class="text-lg">Conector Universal</CardTitle>
                <CardDescription>Para cualquier API</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600 mb-4">
              Conecta cualquier API externa para que tus agentes accedan a datos de terceros.
            </p>
            <div class="flex items-center text-xs text-gray-500">
              <span class="bg-teal-50 text-teal-700 px-2 py-1 rounded-full mr-2">Universal</span>
              <span>2 min setup</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="mt-16 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">
        ¿Tienes una idea específica para tu industria?
      </h3>
      <p class="text-lg text-gray-600 mb-6">
        Nuestro equipo puede ayudarte a crear herramientas personalizadas para casos de uso únicos.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" class="bg-purple-600 hover:bg-purple-700">
          Solicitar Herramienta Personalizada
        </Button>
        <Button variant="outline" size="lg">
          Ver Más Ejemplos
        </Button>
      </div>
    </div>
  </div>
</section>
