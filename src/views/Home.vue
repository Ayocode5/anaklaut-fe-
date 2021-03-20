<template>
  <div class="home">
    <Hero />
    <Banner class="mx-6 my-6" />
    <Category class="my-6" />
    <Special class="my-6" />
    <Popular class="my-6" />
    <Footer class="mt-6" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Category from "@/components/Category.vue";
import Special from "@/components/Special.vue";
import Popular from "@/components/Popular.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Banner,
    Category,
    Special,
    Popular,
    Footer,
  },

  mounted() {
    // let externalScript = document.createElement("script"); //load Mitrans Snap.js
    // externalScript.setAttribute(
    //   "src",
    //   "https://app.sandbox.midtrans.com/snap/snap.js"
    // );
    // externalScript.setAttribute(
    //   "data-client-key",
    //   "SB-Mid-client-OPf5-6qjuxV6DrHf"
    // );
    // document.head.appendChild(externalScript);
  },
};
</script>