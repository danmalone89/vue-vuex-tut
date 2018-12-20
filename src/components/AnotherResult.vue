<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// mapGetters automatically creates computed properties for our getters.

export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>