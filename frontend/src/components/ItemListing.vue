<!-- https://vuetifyjs.com/en/components/data-iterators/#filter -->
<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-card-title class="subheading font-weight-bold">
                  {{ item.name }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                  >
                    <v-list-item-content
                      :class="{ 'blue--text': sortBy === key }"
                    >
                      {{ key }}:
                    </v-list-item-content>
                    <v-list-item-content
                      class="align-end"
                      :class="{ 'blue--text': sortBy === key }"
                    >
                      {{ item[key.toLowerCase()] }}
                    </v-list-item-content>
                  </v-list-item>
                  <v-col>
                    <v-row
                      align="center"
                      justify="space-around"
                      class="my-md-1"
                    >
                      <confirm-dialog
                        open-button-text="Delete"
                        deny-text="Cancel"
                        confirm-text="Delete"
                        :body-text="
                          'Are you sure you want to delete the book \'' +
                            item.name +
                            '\'?'
                        "
                        header-text="Confirm Delete"
                        mood="danger"
                      ></confirm-dialog>
                      <router-link
                        :to="{
                          name: 'BookDetail',
                          params: { bookId: item.id },
                        }"
                      >
                        <v-btn class="mx-2" fab dark color="indigo">
                          <v-icon dark>mdi-pencil</v-icon>
                        </v-btn>
                      </router-link>
                    </v-row>
                  </v-col>
                </v-list>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<style scoped>
.v-card {
  transition: opacity 0.3s ease-in-out;
}

/* https://github.com/vuetifyjs/vuetify/issues/9130#issuecomment-678795229 */
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}
</style>

<script>
import confirmDialog from "./ConfirmDialog";

export default {
  components: { confirmDialog },
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["Name", "Author", "First Published", "Genre"],
      items: [
        {
          id: 0,
          name: "The Lion, the Witch and the Wardrobe",
          author: "C. S. Lewis",
          "first published": 1950,
          genre: "Fantasy",
        },
        {
          id: 1,
          name: "She: A History of Adventure",
          author: "H. Rider Haggard",
          "first published": 1887,
          genre: "Adventure",
        },
        {
          id: 2,
          name: "The Adventures of Pinocchio",
          author: "Carlo Collodi",
          "first published": 1881,
          genre: "Fantasy",
        },
        {
          id: 3,
          name: "The Da Vinci Code",
          author: "Dan Brown",
          "first published": 2003,
          genre: "Mystery thriller",
        },
        {
          id: 4,
          name: "Harry Potter and the Chamber of Secrets",
          author: "J. K. Rowling",
          "first published": 1998,
          genre: "Fantasy",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
