<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import Button from "$lib/components/ui/button/button.svelte";
    import { LoaderCircle, Bot } from "@lucide/svelte";
    import type { SubmitFunction } from "@sveltejs/kit";
    import { enhance } from "$app/forms";


	let loading = $state(false)
	let form_result = $state("")

	const handle_submit: SubmitFunction = () => {
		loading = true

		return async ({ result }) => {
			loading = false
			if(result.status == 200) {
				form_result = "Te has registrado con exito :)"
			} else {
				form_result = "Hubo un problema con tu registro :("
			}
		}
	}
</script>

<section class="relative overflow-hidden py-12 sm:py-18">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<!-- Badge -->
			<div
				class="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
				<Bot class="mr-2 h-4 w-4" />
				La plataforma definitiva de Agentes IA
			</div>

			<!-- Headline -->
			<h1
				class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
				Ahora cualquiera puede crear
				<span
					class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
					Agentes IA
				</span>
			</h1>

			<!-- Subheadline -->
			<p class="mt-6 text-lg leading-6 text-gray-600 sm:text-xl">
				Crea Agentes IA avanzados con una interfaz tan sencilla que cualquiera puede usar.
				<span class="inline-flex">Sin código, sin nodos, sin flujos de trabajo y sin límites.</span>
			</p>

			<div class="form w-full max-w-[400px] h-[380px] mx-auto my-8 rounded-md overflow-hidden">
				<Card.Root>
					<Card.Header>
						<Card.Title>
							Registrate
						</Card.Title>
						<Card.Description>
							Y obten 3 meses gratis en nuestro lanzamiento
						</Card.Description>
					</Card.Header>
					<Card.Content>
						<form method="post" use:enhance={handle_submit}>
							{#if form_result.length > 0}
								<div class="w-full h-full grid place-items-center">
									<p>{form_result}</p>
								</div>
							{:else}
								<Label class="mb-1">Nombre</Label>
								<Input required class="mb-2" name="nombre" placeholder="Nombre" />
								<Label class="mb-1">Correo</Label>
								<Input required type="email" inputmode="email" class="mb-2" name="correo" placeholder="Correo" />
								<Label class="mb-1">¿Cual es tu negocio? 🤔</Label>
								<Input required class="mb-2" name="negocio" placeholder="Tu negocio" />
								<Button type="submit" class="w-full cursor-pointer">
									{#if loading}
										<LoaderCircle size="18" class="animate-spin"></LoaderCircle>
									{:else}
										Registrarme	
									{/if}
								</Button>
							{/if}
						</form>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</div>
</section>
