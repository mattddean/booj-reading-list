<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <router-link v-if="this.$root.$data.fullName == null" to="Login">
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
          >Login
        </v-btn>
      </router-link>
      <v-menu v-else offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            {{ $root.$data.fullName }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-btn @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <!-- <ItemListing /> -->
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { LOGOUT_MUTATION } from "./constants/graphql";
import { doLogout } from "./auth/auth";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$apollo
        .mutate({
          mutation: LOGOUT_MUTATION,
        })
        .then(() => {
          // TODO: consider doing something with the result (we get a status and a message back)

          doLogout(this.$apollo, this.$root);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
