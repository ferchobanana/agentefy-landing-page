<script lang="ts">
    import Logo from "$lib/imgs/logo.png"
    import { Button } from "$lib/components/ui/button";
</script>

<div class="w-[120px] mx-auto mt-8">
    <img src={Logo} alt="">
</div>
<div class="grid place-items-center w-full h-[400px] p-4">
    <div class="mx-auto flex flex-col items-center">
        <p class="text-[1.1rem] font-semibold">Gracias por agendar cita</p>
        <p class="mb-3">Pronto sabrás de nosotros :)</p>
        <Button href="/med">Regresar</Button>
    </div>
</div>