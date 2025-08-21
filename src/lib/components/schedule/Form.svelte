<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import Label from "$lib/components/ui/label/label.svelte";
    import { Input } from "$lib/components/ui/input";
    import Button from "$lib/components/ui/button/button.svelte";
    import { LoaderCircle } from "@lucide/svelte";
    import type { SubmitFunction } from "@sveltejs/kit";
    import { enhance } from "$app/forms";
    import { user_state } from "./state.svelte"

    let { step = $bindable() } = $props()
    let loading = $state(false)

    let name = $state("")
    let email = $state("")
    let phone_number = $state("")

    const handle_submit: SubmitFunction = async () => {
        loading = true
        user_state.name = name
        user_state.email = email
        user_state.phone_number = phone_number

        return async ({ result, update }) => {
            loading = false
            step = 2
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
                    <Input  name="phone_number"
                            required
                            type="tel"
                            inputmode="tel"
                            placeholder="5532300351"
                            bind:value={phone_number} />
                </div>
    
                <Button type="submit" class="cursor-pointer">
                    {#if loading}
                        <LoaderCircle size="18" class="animate-spin"></LoaderCircle>
                    {:else}
                        Quiero agendar
                    {/if}
                </Button>

                <p class="text-[.8rem]">No usaremos tu información para enviarte publicidad o spam, solo la usaremos para contactarte.</p>
            </form>
        </Card.Content>
    </Card.Root>
</div>