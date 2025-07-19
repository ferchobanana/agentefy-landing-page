<script lang="ts">
  import { NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '$lib/components/ui/navigation-menu';
  import { Button } from '$lib/components/ui/button';
  import { Bot, Menu, X } from '@lucide/svelte';
  
  let mobileMenuOpen = false;
</script>

<header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <Bot class="h-8 w-8 text-blue-600" />
        <span class="text-xl font-bold text-gray-900">Agentefy</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <NavigationMenuRoot>
          <NavigationMenuList class="flex space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Producto</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <div class="row-span-3">
                    <NavigationMenuLink href="#features" class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:shadow-md">
                      <Bot class="h-6 w-6 text-white" />
                      <div class="mb-2 mt-4 text-lg font-medium text-white">
                        Agentes IA
                      </div>
                      <p class="text-sm leading-tight text-blue-100">
                        Automatiza tu CRM con agentes inteligentes que trabajan 24/7
                      </p>
                    </NavigationMenuLink>
                  </div>
                  <NavigationMenuLink href="#features" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">CRM Inteligente</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Gestión completa de clientes con IA
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#whatsapp" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">WhatsApp Business</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Conecta WhatsApp en segundos
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#tools" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">Herramientas Personalizadas</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Crea herramientas únicas para tus agentes
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Soluciones</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="grid w-[400px] gap-3 p-4">
                  <NavigationMenuLink href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">Ventas</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Automatiza tu proceso de ventas completo
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">Soporte</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Atención al cliente 24/7 con IA
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">Marketing</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Campañas inteligentes y personalizadas
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#pricing" class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Precios
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#" class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Recursos
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      </div>

      <!-- CTA Buttons -->
      <div class="hidden md:flex items-center space-x-4">
        <Button>Iniciar Sesión</Button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <Button variant="ghost" size="sm" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
          {#if mobileMenuOpen}
            <X class="h-6 w-6" />
          {:else}
            <Menu class="h-6 w-6" />
          {/if}
        </Button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="md:hidden border-t bg-white py-4">
        <div class="space-y-2">
          <a href="#features" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Producto</a>
          <a href="#whatsapp" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">WhatsApp</a>
          <a href="#tools" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Herramientas</a>
          <a href="#pricing" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Precios</a>
          <div class="pt-4 space-y-2">
            <Button variant="ghost" class="w-full justify-start">Iniciar Sesión</Button>
            <Button class="w-full">Prueba Gratis</Button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</header>
