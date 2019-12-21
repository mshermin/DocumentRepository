<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <CatagoryList :catagories="catagories" :selected="selected"/>
      <div class="sidebar-sticky">
        <ArticleList :doclist="articles" :selectedPart="selected"/>        
      </div>
    </nav>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <h2>Documents</h2>
      <ArticleDetailList :articlelist="articles"/>      
    </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CatagoryList from '@/components/CategoryList.vue'
import ArticleDetailList from '@/components/ArticleDetailList.vue'
import ArticleList from '@/components/ArticleList.vue'
import * as service from '@/services/DocumentServices'

import '@/assets/css/dashboard.css'

export default {
  name: 'home',
  data: function(){
    return {
      catagories: {},
      articles: {},
      selected: 0
    }
  },
  computed: {
    
  },
  components: {
    CatagoryList,
    ArticleList,
    ArticleDetailList
  },
  created: function(){
    this.catagories = service.getCatagoryList();
    this.selected = this.catagories[0].Id;
    this.articles = service.getArticleList(this.selected);
    
  }
}
</script>
