<!-- https://vuetifyjs.com/en/components/dialogs/#persistent -->
<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        {{ openButtonText }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline"> {{ headerText }} </v-card-title>
      <v-card-text>{{ bodyText }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="gray darken-1" text @click="dialog = false">
          {{ denyText }}
        </v-btn>
        <v-btn
          :color="confirmButtonColor + ' darken-1'"
          text
          @click="dialog = false"
        >
          {{ confirmText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    confirmText: String,
    denyText: String,
    bodyText: String,
    headerText: String,
    openButtonText: String,
    mood: {
      validator: function(value) {
        // The value must match one of these strings
        return ["confirm", "warn", "danger"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    confirmButtonColor: function() {
      switch (this.mood) {
        case "warn":
          return "yellow";
        case "danger":
          return "red";
        default:
          return "green";
      }
    },
  },
};
</script>
