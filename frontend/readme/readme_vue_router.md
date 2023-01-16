# Vue Routing

- yarn add vue-router
- ./router/index.ts

## ex: route define

```ts
const routes: Array<vueRouter.RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/stock",
    meta: { isSecured: true },
    name: "stock",
    component: Stock,
  },
```

## ex: route guard

```ts
const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Router guard
router.beforeEach((to, from, next) => {
```
