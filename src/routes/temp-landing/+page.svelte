<script lang="ts">
  import Header from '$lib/components/temp-landing/Header.svelte';
  import Hero from '$lib/components/temp-landing/Hero.svelte';
  import Features from '$lib/components/temp-landing/Features.svelte';
  import WhatsAppIntegration from '$lib/components/temp-landing/WhatsAppIntegration.svelte';
  import CustomTools from '$lib/components/temp-landing/CustomTools.svelte';
  import Pricing from '$lib/components/temp-landing/Pricing.svelte';
  import Footer from '$lib/components/temp-landing/Footer.svelte';
</script>

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
