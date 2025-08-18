<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import ImgAgent from "$lib/imgs/1_crear_agente.webp"
    import ImgInstructions from "$lib/imgs/2_instrucciones.webp"
    import ImgTools from "$lib/imgs/4_herramientas.webp"
    import ImgConvs from "$lib/imgs/11_conversaciones.webp"

  // 1. Define las imágenes que quieres mostrar
  const images = [
    {
      src: ImgAgent,
      alt: 'Agentes',
    },
    {
      src: ImgInstructions,
      alt: 'Intrucciones',
    },
    {
      src: ImgTools,
      alt: 'Herramientas',
    },
    {
      src: ImgConvs,
      alt: 'Intrucciones',
    },
  ];

  // 2. Estado para saber qué imagen está activa
  let currentImageIndex = 0;
  
  // 3. Variable para guardar el intervalo del temporizador
  let interval: number;

  // 4. Iniciar el temporizador cuando el componente se monta en la página
  onMount(() => {
    interval = setInterval(() => {
      // Cambia al siguiente índice de imagen, volviendo al inicio si llega al final
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 2500); // Cambia la imagen cada 4 segundos (4000 ms)
  });

  // 5. Limpiar el temporizador cuando el componente se destruye para evitar fugas de memoria
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<!-- Contenedor principal -->
<div class="image-container">
  <!-- 
    Iteramos sobre el array de imágenes. El segundo parámetro 'i' es el índice.
    La directiva `{#key ...}` ayuda a Svelte a identificar qué bloque está cambiando,
    lo que es crucial para que las transiciones se apliquen correctamente.
  -->
  {#key currentImageIndex}
    <img
      src={images[currentImageIndex].src}
      alt={images[currentImageIndex].alt}
      class="animated-image"
      in:fly={{ y: 20, duration: 600, delay: 100 }}
      out:fade={{ duration: 300 }}
    />
  {/key}
</div>

<style>
  .image-container {
    /* Es importante que el contenedor tenga posición relativa */
    position: relative;
    width: 100%;
    max-width: 800px; /* Ajusta el tamaño máximo según necesites */
    aspect-ratio: 16/9;
    margin: 2rem auto; /* Centrar y dar algo de espacio */
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden; /* Oculta cualquier parte de la imagen que se salga */
  }

  .animated-image {
    /* 
      Las imágenes se posicionan de forma absoluta para que se apilen una encima de la otra
      dentro del contenedor relativo. Esto es clave para que la transición sea suave.
    */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: contain; /* Asegura que la imagen se vea completa dentro del contenedor */
  }
</style>