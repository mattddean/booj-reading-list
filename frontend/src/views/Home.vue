<template>
  <div class="home">
    <ItemListing />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemListing from "@/components/ItemListing.vue";

export default {
  name: "Home",
  components: {
    ItemListing,
  },
};
</script>

    ItemListing