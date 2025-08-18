<script lang="ts">
    import Logo from "$lib/imgs/logo.png";
    import { Button } from "$lib/components/ui/button";

    let isMenuOpen = false;
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
        <img src={Logo} class="w-[120px]" alt="" />
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a
          href="#pricing"
          class="text-gray-700 hover:text-blue-600 transition-colors">Precios</a
        >
        <Button class="bg-blue-600 hover:bg-blue-700">Contactar</Button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        aria-label="button"
        class="md:hidden p-2"
        onclick={() => (isMenuOpen = !isMenuOpen)}
      >
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