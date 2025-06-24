<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import WhatsAppIntegration from '$lib/components/WhatsAppIntegration.svelte';
  import CustomTools from '$lib/components/CustomTools.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import Footer from '$lib/components/Footer.svelte';
// </script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
  <Header />
  <main>
    <Hero />
    <Features />
    <WhatsAppIntegration />
    <CustomTools />
    <Pricing />
  </main>
  <Footer />
</div>
