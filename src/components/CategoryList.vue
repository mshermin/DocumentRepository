<template>
  <div class="form-group">
    <select class="form-control" v-model="selectedCat" v-on:change="onCatagoryChanged">
      <option v-for="item in catagories" :key="item.Id" :value="item.Id">{{ item.Title}}</option>
    </select>
  </div>
</template>

<script>
import * as service from '@/services/DocumentServices'

export default {
  name: "CatagoryList",
  data: function() {
    return {
      selectedCat: this.selected
    }
  },
  props: {
    catagories: Array,
    selected: Number
  },
  methods: {
    onCatagoryChanged: function() {
      service.changeCatagoryForArticles(this.selectedCat);
    }
  }
};
</script>

<style>
</style>