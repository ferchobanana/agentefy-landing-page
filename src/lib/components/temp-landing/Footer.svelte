<script lang="ts">
  import { Bot, MessageCircle, Mail, Phone, MapPin, Twitter, Linkedin, Github } from '@lucide/svelte';
</script>

<footer class="bg-gray-900 text-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center space-x-2 mb-4">
          <Bot class="h-8 w-8 text-blue-400" />
          <span class="text-xl font-bold">Agentefy CRM</span>
        </div>
        <p class="text-gray-300 mb-6 max-w-md">
          La plataforma de CRM más avanzada del mundo, potenciada por agentes de IA que trabajan 24/7 para hacer crecer tu negocio.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Twitter class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Linkedin class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Github class="h-5 w-5" />
          </a>
        </div>
      </div>

      <!-- Product Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Producto</h3>
        <ul class="space-y-2">
          <li><a href="#features" class="text-gray-300 hover:text-white transition-colors">Características</a></li>
          <li><a href="#whatsapp" class="text-gray-300 hover:text-white transition-colors">WhatsApp Business</a></li>
          <li><a href="#tools" class="text-gray-300 hover:text-white transition-colors">Herramientas Personalizadas</a></li>
          <li><a href="#pricing" class="text-gray-300 hover:text-white transition-colors">Precios</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Integraciones</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">API</a></li>
        </ul>
      </div>

      <!-- Company Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Empresa</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Acerca de</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Carreras</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Prensa</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Casos de Éxito</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
        </ul>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="border-t border-gray-800 mt-12 pt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex items-center space-x-3">
          <Mail class="h-5 w-5 text-blue-400" />
          <span class="text-gray-300">hola@agentefy.com</span>
        </div>
        <div class="flex items-center space-x-3">
          <Phone class="h-5 w-5 text-blue-400" />
          <span class="text-gray-300">+1 (555) 123-4567</span>
        </div>
        <div class="flex items-center space-x-3">
          <MapPin class="h-5 w-5 text-blue-400" />
          <span class="text-gray-300">San Francisco, CA</span>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div class="text-gray-400 text-sm">
        © 2024 Agentefy CRM. Todos los derechos reservados.
      </div>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
      </div>
    </div>

    <!-- WhatsApp Float Button -->
    <div class="fixed bottom-6 right-6 z-50">
      <a href="https://wa.me/1234567890" class="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2">
        <MessageCircle class="h-6 w-6" />
        <span class="hidden sm:inline text-sm font-medium">¿Necesitas ayuda?</span>
      </a>
    </div>
  </div>
</footer>
