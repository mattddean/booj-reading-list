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
import { REGISTER_MUTATION, LOGIN_MUTATION } from "../constants/graphql";
import { doLogin } from "../auth/auth";

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
        // login to existing user account
        this.$apollo
          .mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              username,
              password,
            },
          })
          .then((result) => {
            this.handleLogin(result);
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        // register new user
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
            this.handleLogin(result);
          })
          .catch((error) => {
            alert(error);
          });
      }
      this.$router.push({ path: "/" });
    },
    handleLogin(loginMutationResult) {
      const accessToken = loginMutationResult.data.login.access_token;
      const userId = loginMutationResult.data.login.user.id;
      const userFullName = loginMutationResult.data.login.user.name;
      doLogin(this.$apollo, this.$root, accessToken, userId, userFullName);
    },
  },
};
</script>
