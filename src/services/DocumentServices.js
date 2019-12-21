import LocalData from '../../src/artifacts/documents.json';
import store from '../store/index'

export function getCatagoryList(){
    return LocalData.catagory;
}

export function getArticleList(catagoryId){
    let articles = LocalData.articles.filter(article => article.CatagoryId == catagoryId);
    return articles;
}

export function changeCatagoryForArticles(catagoryId){    
    store.dispatch('document/changeCatagory', catagoryId);
}