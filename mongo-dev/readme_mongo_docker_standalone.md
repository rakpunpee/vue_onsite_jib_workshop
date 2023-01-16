# Run mongo on docker container

```
docker run --name mongo-dev \
-v /Users/chaiyasittayabovorn/Desktop/Training/VueJS/vuejs-core/vuejs_mevn_stack_dist/workshops/vuestack_2023/mongo-dev/db:/data/db \
-v /Users/chaiyasittayabovorn/Desktop/Training/VueJS/vuejs-core/vuejs_mevn_stack_dist/workshops/vuestack_2023/data/dummy_db_cmpos:/script \
-p 27018:27017 -d --rm mongo
```

- mongorestore -d demopos /script/
- mongo -p 27018
