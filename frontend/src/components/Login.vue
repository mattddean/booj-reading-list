<!-- https://github.com/howtographql/vue-apollo/blob/master/src/components/AppLogin.vue -->
<!-- https://www.howtographql.com/vue-apollo/5-authentication/ -->
<template>
  <div>
    <h4 class="mv3">{{ login ? "Login" : "Sign Up" }}</h4>
    <div class="flex flex-column">
      <input
        v-show="!login"
        v-model="name"
        type="text"
        placeholder="Your name"
      />
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <input
        v-model="passwordConfirmation"
        type="password"
        placeholder="Confirm Password"
      />
    </div>
    <div class="flex mt3">
      <button type="button" class="pointer mr2 button" @click="confirm()">
        {{ login ? "login" : "create account" }}
      </button>
      <button type="button" class="pointer button" @click="login = !login">
        {{ login ? "need to create an account?" : "already have an account?" }}
      </button>
    </div>
  </div>
</template>

<script>
import { GC_USER_ID, GC_AUTH_TOKEN, FULL_NAME } from "../constants/settings";
import { REGISTER_MUTATION, LOGIN_MUTATION } from "../constants/graphql";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      login: true,
      name: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  methods: {
    confirm() {
      const { name, username, password, passwordConfirmation } = this.$data;
      if (this.login) {
        this.$apollo
          .mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              username,
              password,
            },
          })
          .then((result) => {
            const id = result.data.login.user.id;
            const token = result.data.login.access_token;
            const fullName = result.data.login.user.name;
            this.saveUserData(id, token, fullName);
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        this.$apollo
          .mutate({
            mutation: REGISTER_MUTATION,
            variables: {
              name,
              username,
              password,
              passwordConfirmation,
            },
          })
          .then((result) => {
            const id = result.data.login.user.id;
            const token = result.data.login.access_token;
            const fullName = result.data.login.user.name;
            this.saveUserData(id, token, fullName);
          })
          .catch((error) => {
            alert(error);
          });
      }
      this.$router.push({ path: "/" });
    },
    saveUserData(id, token, fullName) {
      // update localStorage with these new values
      localStorage.setItem(GC_USER_ID, id);
      localStorage.setItem(GC_AUTH_TOKEN, token);
      localStorage.setItem(FULL_NAME, fullName);

      // update root Vue data with these new values
      this.$root.$data.userId = localStorage.getItem(GC_USER_ID);
      this.$root.$data.fullName = localStorage.getItem(FULL_NAME);
    },
  },
};
</script>
