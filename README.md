# rick-morty-universe
Fan project in the Rick and Morty Universe which uses public [graphql API](https://rickandmortyapi.com/documentation/#graphql).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Install apollo CLI 
```
npm install -g apollo
```
Install it locally or globally in case of `graphql` version errors

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### For detailed apollo configuration
See [CLI](https://www.apollographql.com/docs/devtools/cli/)
[Config](https://www.apollographql.com/docs/devtools/apollo-config/#clientservice)
[VScode plugin](https://apollographql-jp.com/devtools/editor-plugins/)

### Rick and Morty API docs
See [API](https://rickandmortyapi.com/documentation/#graphql)
Source code [GitHub](https://github.com/afuh/rick-and-morty-api)

## Useful apollo commands
```
npx apollo help client // help
npx apollo help client:<command name> // help for specific comand
```

### Generate types
```
npx apollo client:codegen --target=typescript
```

### Get schema from gql service
```
npx apollo client:download-schema schema.gql
```

### Generate manifest.json 
```
npx apollo client:extract
```
