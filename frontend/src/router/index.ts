import * as vueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Stock from "@/views/Stock.vue";
import StockCreate from "@/views/StockCreate.vue";
import StockEdit from "@/views/StockEdit.vue";
import Shop from "@/views/Shop.vue";
import Transaction from "@/views/Transaction.vue";
import Report from "@/views/Report.vue";

const routes: Array<vueRouter.RouteRecordRaw> = [];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
