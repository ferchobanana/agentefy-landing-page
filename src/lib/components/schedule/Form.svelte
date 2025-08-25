<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import Label from "$lib/components/ui/label/label.svelte";
    import { Input } from "$lib/components/ui/input";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Select from "$lib/components/ui/select/index.js";
    import { LoaderCircle } from "@lucide/svelte";
    import type { SubmitFunction } from "@sveltejs/kit";
    import { enhance } from "$app/forms";
    import { user_state } from "./state.svelte"
    import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js'

    let { step = $bindable() } = $props()
    let loading = $state(false)
    let error = $state("")

    let name = $state("")
    let email = $state("")

    let selected_country: CountryCode = $state('MX');
    const countries = getCountries().map(country => ({
        code: country,
        name: new Intl.DisplayNames(['es'], { type: 'region' }).of(country),
        callingCode: getCountryCallingCode(country)
    }));
    let selected_country_calling_code = $derived(getCountryCallingCode(selected_country))
    let phone_number = $state("")

    let business_types = [
        { value: "centro-de-diagnostico-imagen", label: "Centro de diagnóstico por imagen" },
        { value: "laboratorio", label: "Laboratorio" },
        { value: "clinica", label: "Clínica" },
        { value: "consultorio", label: "Consultorio" },
        { value: "otro", label: "Otro" },
    ]
    let selected_business_type = $state("")
    let business_type_trigger_content = $derived(
        business_types.find((b) => b.value === selected_business_type)?.label ?? "Selecciona una opción"
    )

    const handle_submit: SubmitFunction = async () => {
        loading = true
        user_state.name = name
        user_state.email = email
        user_state.phone_number = selected_country_calling_code + phone_number

        return async ({ result, update }) => {
            if(result.status == 200) {
                loading = false
                step = 2
            } else {
                error = "Parece que hubo un error en tu registro, intentalo nuevamente 😢"
            }
        }
    }

</script>


<div class="p-4">
    <Card.Root class="w-full max-w-[400px] mx-auto md:mt-6">
        <Card.Content>
            <form   action="?/save_form"
                    method="post"
                    class="w-full flex flex-col gap-3"
                    use:enhance={handle_submit}>
                <div>
                    <Label class="mb-1">Nombre</Label>
                    <Input  name="name"
                            required
                            placeholder="Nombre"
                            bind:value={name} />
                </div>

                <div>
                    <Label class="mb-1">Correo electrónico</Label>
                    <Input  name="email"
                            required
                            type="email"
                            placeholder="juan@gmail.com"
                            bind:value={email} />
                </div>
    
                <div>
                    <Label class="mb-1">Número celular</Label>
                    <div class="grid grid-cols-[80px_1fr] gap-1">
                        <Select.Root type="single" name="country_code" bind:value={selected_country}>
                            <Select.Trigger class="w-full">
                                +{selected_country_calling_code}
                            </Select.Trigger>
                            <Select.Content>
                                {#each countries as c}
                                    <Select.Item value={c.code}>{c.name} +{c.callingCode}</Select.Item>
                                {/each}
                            </Select.Content>
                        </Select.Root>
                        <Input  name="phone_number"
                                required
                                type="tel"
                                inputmode="tel"
                                placeholder="5532300351"
                                bind:value={phone_number} />
                    </div>
                </div>

                <input type="hidden" name="country_calling_code" value={selected_country_calling_code}>

                <div>
                    <Label class="mb-1">¿Cuál es tu tipo de negocio?</Label>
                    <Select.Root type="single" name="business_type" bind:value={selected_business_type}>
                        <Select.Trigger class="w-full">
                            {business_type_trigger_content}
                        </Select.Trigger>
                        <Select.Content>
                            {#each business_types as b}
                                <Select.Item value={b.value}>{b.label}</Select.Item>
                            {/each}
                        </Select.Content>
                    </Select.Root>
                </div>
    
                <Button type="submit" class="cursor-pointer">
                    {#if loading}
                        <LoaderCircle size="18" class="animate-spin"></LoaderCircle>
                    {:else}
                        Quiero agendar
                    {/if}
                </Button>

                {#if error.length > 0}
                    <p class="text-[.9rem] text-red-500">{error}</p>
                {/if}

                <p class="text-[.8rem]">No usaremos tu información para enviarte publicidad o spam, solo la usaremos para contactarte.</p>
            </form>
        </Card.Content>
    </Card.Root>
</div>