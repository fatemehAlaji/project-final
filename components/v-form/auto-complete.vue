<template>
  <v-col :cols="12" class="pa-2">
    <div class="grey--text text-right">
      {{ label }}
      <span class="error--text" v-if="$attrs.required">*</span>
    </div>
    <v-autocomplete
      :background-color="$attrs.disabled ? 'grey' : backgroundColor"
      solo
      hide-details="auto"
      flat
      class="rounded-pill"
      v-model="inputVal"
      v-bind="$attrs"
      :chips="multiple"
      :multiple="multiple"
    >
      <template v-if="$attrs.chips" v-slot:selection="data">
        <v-chip
          v-bind="data.attrs"
          :input-value="data.selected"
          close
          @click:close="remove(data.item)"
          color="var(--primary)"
          dark
        >
          {{ data.item[$attrs.itemText] }}
        </v-chip>
      </template>
    </v-autocomplete>
  </v-col>
</template>

<script>
  export default {
    props: {
      value: {
        required: true,
      },
      label: {
        type: String,
        required: false,
      },
      backgroundColor: {
        type: String,
        default: "grey lighten-2",
      },
      multiple: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      remove(item) {
        this.inputVal = this.inputVal.filter(
          (val) => val !== item[[this.$attrs.itemValue]],
        );
      },
    },
    computed: {
      inputVal: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit("input", val);
        },
      },
    },
  };
</script>

<style></style>
