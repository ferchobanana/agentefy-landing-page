<script lang="ts">
    import Calendar from "$lib/components/ui/calendar/calendar.svelte";
    import { CalendarDate, parseDate, today, getLocalTimeZone } from "@internationalized/date";
    import type { SubmitFunction } from "@sveltejs/kit";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { user_state } from "./state.svelte";
    import { LoaderCircle } from "@lucide/svelte";
    
    let { step = $bindable() } = $props()
    let loading = $state(false)

    // Current date in specific timezone
    const todayMexico = today("America/Mexico_City");
    let value = $state<CalendarDate>(todayMexico);

    // From year, month, day parameters
    // const date = new CalendarDate(2024, 7, 10);
    
    // From ISO 8601 string
    // const parsedDate = parseDate("2024-07-10");
    
    // Current date in user's timezone
    // const localToday = today(getLocalTimeZone());

    const available_hours = $state([
        { hora: "9:00 am" },
        { hora: "10:00 am" },
        { hora: "11:00 am" },
        { hora: "12:00 pm" },
        { hora: "1:00 pm" },
    ])
    let selected_hour = $state("")

    // $inspect(value)

    const handle_submit: SubmitFunction = async ({ formData }) => {
        loading = true
        formData.append("hora", selected_hour)
        
        return async ({ result, update }) => {
            loading = false
            if(result.status == 200) {
                await goto("/schedule/gracias")
            }
        }
    }
</script>

<div class="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 w-full max-w-[600px] md:mt-6 mx-auto p-4">
    <Calendar
        minValue={todayMexico}
        type="single"
        bind:value
        locale="es"
        class="rounded-lg border shadow-sm inline-block"
        numberOfMonths={1}
        />

    <!-- Horarios disponibles -->
    <form class="flex flex-col gap-2" action="?/save_date" method="post" use:enhance={handle_submit}>
        <div class="mb-2">
            <p class="text-[1.1rem] font-semibold">Horarios disponibles</p>
            <p class="text-[.9rem] text-gray-700">Selecciona uno</p>
        </div>

        {#if loading}
            <div class="w-full h-[300px] grid place-items-center">
                <LoaderCircle size="20" class="animate-spin"></LoaderCircle>
            </div>
        {:else}
            {#each available_hours as h}
                <button class="horario" onclick={() => selected_hour = h.hora}>
                    {h.hora}
                </button>
            {/each}
        {/if}

        <input type="hidden" name="phone_number" value={user_state.phone_number}>
        <input type="hidden" name="year" bind:value={value.year}>
        <input type="hidden" name="month" bind:value={value.month}>
        <input type="hidden" name="day" bind:value={value.day}>
    </form>
</div>

<style>
    .horario {
        width: 100%;
        border: 1px #288dfa solid;
        color: #288dfa;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
    }
</style>