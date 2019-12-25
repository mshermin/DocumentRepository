<template>
  <div id="divArticleList">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="item in list" :key="item.Id">
        <a class="nav-link" href="#">
          <span class="text-blue">{{ item.Id }}</span>&nbsp;
          <span>{{ item.Title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

 
<script>
export default {
  name: "ArticleList",
  props: {
    doclist: Array
  },
  data() {
    return {
      list: this.doclist
    };
  }
};
</script>
