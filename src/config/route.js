import {createMemoryHistory, createRouter} from 'vue-router'
import HomePage from "../pages/HomePage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import BasketPage from "../pages/FavoritePage.vue";
import FavoritePage from "../pages/FavoritePage.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/favorite', component: FavoritePage},
    {path: '/profile', component: ProfilePage},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export {router}