<template>
  <!-- https://vuetifyjs.com/en/components/forms/#usage -->
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="book.name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="book.author"
            :counter="10"
            label="Author"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="book.firstPublished"
            label="First Published"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="book.genre"
            label="Genre"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      book: {
        name: "",
        author: "",
        firstPublished: 0,
        genre: "",
      },
    };
  },
  apollo: {
    book: {
      query: gql`
        query theBook {
          book(id: $bookId) {
            name
            author
            firstPublished
            genre
          }
        }
      `,
      variables: {
        bookId: 1,
      },
    },
  },
};
</script>
