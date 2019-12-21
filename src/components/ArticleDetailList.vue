<template>
    <div id="divArticleList">
        <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Version</th>
              <th>Title</th>
              <th>Author</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in articlelist" :key="item.ID">
              <td>{{ item.Id }}</td>
              <td>{{ item.Title }}</td>
              <td>{{ item.AuthorName }}</td>
              <td>{{ item.DateCreated }}</td>
            </tr>            
          </tbody>
        </table>
      </div>       
    </div>
</template>

 
<script>
export default {
    name:'ArticleDetailList',
    props:{
        articlelist: Array
    }
}
</script>