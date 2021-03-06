## To start in dev
```
$ npm i
$ npm run start:dev
```

## Deployment
Staging
```
$ git push heroku-staging master
```

## Database Migrations
Create empty migration class
```
$ npm run migration:create [name]
```
Generate migration based on changes to entities
```
$ npm run migration:generate [name]
```
Run migrations locally
```
$ npm run migration:run
```
Run migrations on staging
```
$ heroku run npm run migration:run -r heroku-staging
```

## Debugging
Staging logs
```
$ heroku logs --tail -r heroku-staging
```

## Config
Set env vars on staging
```
$ heroku config:set VAR_NAME=myVariable -r heroku-staging
```