<template>
  <!-- https://blog.pusher.com/web-application-laravel-vue-part-4/ -->

  <div class="flex-center position-ref full-height">
    <div class="content">
      <div class="m-b-md">
        <item-listing></item-listing>
        <h2 class="title m-b-md">Here we go!</h2>
        <h3>Your efficent task planner</h3>
      </div>
    </div>
  </div>
</template>

<script>
import ItemListing from "../components/ItemListing";

export default {
  data() {
    return {};
  },
  components: {
    ItemListing,
  },
  computed: {},
  created() {},
  methods: {},
};
</script>