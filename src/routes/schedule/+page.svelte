<script lang="ts">
    import Logo from "$lib/imgs/logo.png"
    import Form from "$lib/components/schedule/Form.svelte";
    import CalendarPicker from "$lib/components/schedule/CalendarPicker.svelte";

    let step = $state(1)
</script>

<svelte:head>
    <title>Agendar cita - Agentefy Med</title>
</svelte:head>

<div class="w-[120px] mx-auto mt-6">
    <img src={Logo} alt="">
</div>

{#if step == 1}
    <Form bind:step></Form>
{:else if step == 2}
    <CalendarPicker bind:step></CalendarPicker>
{/if}

