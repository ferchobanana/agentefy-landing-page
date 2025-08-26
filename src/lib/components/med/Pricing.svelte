<script>
	import { Button } from "$lib/components/ui/button";
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle,
	} from "$lib/components/ui/card";

	import { Calendar, Bot, CheckCircle, ArrowRight, Zap } from "@lucide/svelte";
</script>

<!-- Pricing Section -->
<section id="pricing" class="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto">
			<Card class="bg-white shadow-2xl flex flex-col gap-3">
				<CardHeader class="text-center pb-1">
					<CardTitle class="text-3xl font-bold text-gray-900">
						Inversión accesible
					</CardTitle>
					<CardDescription class="text-[1rem] text-gray-600">
						Todo lo que necesitas para automatizar la atención de clientes de tu centro de diagnóstico
					</CardDescription>
				</CardHeader>
				<CardContent class="px-8 pb-8">
					<div class="flex justify-center gap-8 mb-8">
						<div class="text-center">
							<div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-1">
								<Bot class="h-7 w-7 text-blue-600" />
							</div>
							<h3 class="text-[1.4rem] font-bold text-gray-900 leading-tight">
								Implementación desde
							</h3>
							<div class="text-[1.8rem] font-bold text-blue-600 leading-tight">
								$19,499 MXN
							</div>
							<p class="text-gray-600 mb-4">(Pago único)</p>

							<h3 class="text-[1.4rem] font-bold text-gray-900 leading-tight">Mensualidad</h3>
							<div class="text-[1.8rem] font-bold text-blue-600 mb-2 leading-tight">
								$1,499 MXN
							</div>
							<ul class="mt-4 space-y-2 text-sm text-gray-600">
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
									Hasta 1200 mensajes por mes
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Actualizaciones automáticas
								</li>
								<li class="flex items-center">
									<CheckCircle class="h-4 w-4 text-blue-500 mr-2" />
									Soporte técnico
								</li>
							</ul>
						</div>
					</div>

					<div class="text-center flex flex-col items-center">
						<a 	href="/schedule"
							class="shake-button flex rounded-md text-[#fff] gap-2 font-[500] items-center justify-center w-full max-w-[400px] h-[60px] text-[1.2rem] bg-blue-600 hover:bg-blue-700 px-12 py-4">
							<Calendar size="18" />
							Agendar llamada
						</a>
						<p class="mt-4 text-sm text-gray-600">
							Veamos como podemos implementarlo en tu centro médico
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<style>
	/* Pausa entre animaciones */
	.shake-button {
		animation: shake 2.5s ease-in-out infinite;
		animation-delay: .5s;
	}

	/* Definición de la animación shake */
	@keyframes shake {
		0%, 33.33%, 100% { transform: translateX(0); } /* Pausa */
		5% { transform: translateX(-5px) rotate(-2deg); }
		10% { transform: translateX(5px) rotate(2deg); }
		15% { transform: translateX(-3px) rotate(-1deg); }
		23% { transform: translateX(3px) rotate(1deg); }
	}

	/* .shake-button {
		animation-play-state: running;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;	
	} */
</style>
