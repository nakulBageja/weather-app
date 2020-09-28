# weather-app

## THINGS TO DO BEFORE DEPLOYING

- Add scripts in package.json

```bash
 "scripts": {
  "start": "node src/app.js"
}
```

- Change port from 3000 to process.env.PORT
- Change all fetch api calls to

```bash
/weather?address=
```

## SETTING UP HEROKU

```bash
  heroku keys:add
  heroku create "nakulbageja-weather-app"
  git push heroku master
```
