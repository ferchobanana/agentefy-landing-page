<script lang="ts">
    import {
        Calendar,
        FileText,
        CheckCircle,
        ArrowRight,
    } from "@lucide/svelte";
    import IconoLogo from "$lib/imgs/icono-agentefy.png";
    import OrdenMedica from "$lib/imgs/orden-medica-edit.jpg";

      import { Button } from "$lib/components/ui/button";
</script>

<!-- Hero Section -->
<section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div class="text-center lg:text-left">
				<h1 class="text-5xl md:text-6xl tracking-tight font-bold text-gray-900 mb-6 leading-tight">
					El primer Agente IA que realmente atiende tu <span class="text-blue-600">Centro de diagnóstico</span>
				</h1>
				<p class="md:text-xl text-gray-600 mb-8 leading-relaxed">
					Agenda, edita o cancela citas, interpreta ordenes médicas, envía
					notificaciones y recordatorios, con una IA que de verdad entiende todo
					el proceso de tus clientes.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
					<Button
						size="lg"
						class="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
						Agendar llamada
						<ArrowRight class="ml-2 h-5 w-5" />
					</Button>
					<Button variant="outline" size="lg" class="text-lg px-8 py-4">
						Ver Demostración
					</Button>
				</div>
				<div class="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
					<div class="flex items-center">
						<CheckCircle class="h-5 w-5 text-blue-500 mr-2" />
						Implementación en 5 días
					</div>
					<div class="flex items-center">
						<CheckCircle class="h-5 w-5 text-blue-500 mr-2" />
						Activo 24/7
					</div>
				</div>
			</div>

			<div class="relative">
				<!-- Contenedor CHAT -->
				<div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
					<div class="flex items-center space-x-3 mb-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center">
							<img src={IconoLogo} class="w-[80%]" alt="" />
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Agentefy <i>Med</i></h3>
							<p class="text-sm text-blue-600">En línea</p>
						</div>
					</div>

					<div class="space-y-3">
						<div class="bg-gray-100 rounded-lg p-3 text-sm">
							Hola, soy tu asistente de Clinica 123. ¿En qué puedo ayudarte hoy?
						</div>
						<div class="bg-blue-500 text-white rounded-lg p-3 text-sm ml-8">
							Necesito agendar una cita para un estudio
						</div>
						<div class="bg-gray-100 rounded-lg p-3 text-sm">
							Perfecto ¿Cuentas con una orden médica?
						</div>
						<div class="bg-blue-500 text-white rounded-lg p-3 text-sm ml-8">
							<img src={OrdenMedica} alt="" />
						</div>
						<div class="bg-gray-100 rounded-lg p-3 text-sm">
							Veo que necesitas una resonancia magnética de rodilla derecha.
							¿Para que día te gustaria agendar?
						</div>
					</div>
				</div>

				<!-- Floating elements -->
				<div class="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
					<Calendar class="h-6 w-6 text-blue-600" />
				</div>
				<div class="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
					<FileText class="h-6 w-6 text-blue-600" />
				</div>
			</div>
		</div>
	</div>
</section>