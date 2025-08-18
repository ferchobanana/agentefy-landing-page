<script>
    import {
		MessageCircle,
		Phone,
		Mail,
		MapPin
	} from "@lucide/svelte";
</script>

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