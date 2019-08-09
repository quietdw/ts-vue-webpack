1. `webpack-dev-server` 生成本地 webpack 服务器；
2. `html-webpack-plugin` 生成简单的 html 页面；
3. `vue-loader` webpack 支持 vue 文件；
4. `typescript-loader` 支持 `.ts` 文件，需要`shims-vue.d.ts`文件的支持，使 ts 认识 vue；
5. 在 vue 中使用 ts：
   ```
   module: {
   rules: [
           {
               test: /\.vue$/,
               loader: "vue-loader",
               options: {
               esModule: true
               }
           },
           {
               test: /\.tsx?$/,
               loader: "ts-loader",
               options: {
               appendTsSuffixTo: [/\.vue$/]
               }
           }
        ]
    }
   ```
