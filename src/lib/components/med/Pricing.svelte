<script>
	import { Button } from "$lib/components/ui/button";
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle,
	} from "$lib/components/ui/card";

	import { Calendar, CheckCircle, ArrowRight, Zap } from "@lucide/svelte";
</script>

<!-- Pricing Section -->
<section id="pricing" class="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto">
			<Card class="bg-white shadow-2xl">
				<CardHeader class="text-center pb-8">
					<CardTitle class="text-3xl font-bold text-gray-900 mb-2">
						Los mejores precios
					</CardTitle>
					<CardDescription class="text-lg text-gray-600">
						Inversión única para implementación y una tarifa mensual accesible.
						Todo lo que necesitas para automatizar la atención de clientes de tu centro de diagnóstico
					</CardDescription>
				</CardHeader>
				<CardContent class="px-8 pb-8">
					<div class="grid md:grid-cols-2 gap-8 mb-8">
						<div class="text-center">
							<div class="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
								<Zap class="h-10 w-10 text-blue-600" />
							</div>
							<h3 class="text-2xl font-bold text-gray-900 mb-2">
								Implementación desde
							</h3>
							<div class="text-4xl font-bold text-blue-600 mb-2">
								$19,500 MXN
							</div>
							<p class="text-gray-600">Pago único</p>
							<ul class="mt-4 space-y-2 text-sm text-gray-600 ml-12">
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Configuración completa
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Integración con WhatsApp
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Capacitación del equipo
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Soporte durante implementación
								</li>
							</ul>
						</div>

						<div class="text-center">
							<div class="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
								<Calendar class="h-10 w-10 text-blue-600" />
							</div>
							<h3 class="text-2xl font-bold text-gray-900 mb-2">Mensualidad</h3>
							<div class="text-4xl font-bold text-blue-600 mb-2">
								$1,499 MXN
							</div>
							<p class="text-gray-600">Por mes</p>
							<ul class="mt-4 space-y-2 text-sm text-gray-600 ml-12">
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Hasta 2000 mensajes
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Actualizaciones automáticas
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Soporte técnico veloz
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Reportes y analíticas
								</li>
							</ul>
						</div>
					</div>

					<div class="text-center">
						<Button href="/schedule" size="lg" class="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4" >
							Agendar llamada
							<ArrowRight class="ml-2 h-5 w-5" />
						</Button>
						<p class="mt-4 text-sm text-gray-600">
							Veamos como podemos inplementarlo en tu centro de diagnóstico
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
