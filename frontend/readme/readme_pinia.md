# Youtube

- https://www.youtube.com/watch?v=wuD_i0bA5ng

# Step

- yarn add pinia
- edit main.ts
  ```
  import { createPinia } from "pinia";
  const pinia = createPinia();
  const app = createApp(App);
  app.use(pinia);
  ```
- create store/useFeaturedStore.ts
