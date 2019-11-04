# test-vuex-error

## Project setup
```
npm install
```

### Run tests
```
npm run test
```

After test running you get an error.

If one test is deleted in ComponentUnderTest.spec.js test will pass. 

If `created` hook is replaced to `mounted` in Init.vue tests will pass. 

Adding options `sync: false` also fixes the problem.

Issue in https://github.com/vuejs/vue-test-utils/issues/1337

----

The bug lies somewhere in Vue.js' sync behaviour. 
See `without-test-utils` branch. It does not use `vue-test-utils`,
but the same error is occured. 
