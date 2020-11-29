# weather-app

https://nakulbageja-weather-app.herokuapp.com

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

 ![](image_2020-11-01_195105.png)
