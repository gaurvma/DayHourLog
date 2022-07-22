# Daily Work Logger
#### To record where you spend your time.
A daily work logging in a simple way , In the 4 quadrants of time management matrix.



### Install dependencies
```
  npm install
```

### Create or update environment file in src/environments/{environment.ts}
Update firebase credential from firebase account
```
  export const environment = {
    production: true,
    firebase: {
      apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      authDomain: "xxxxxxxxx.xxxxxxxxxxx.xxx",
      projectId: "xxxxxxxxx",
      storageBucket: "xx-xxxxxx.appspot.com",
      messagingSenderId: "xxxxxxxxxxxxx",
      appId: "1:xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxxxx",
      databaseURL: "https://xxxxxxxxx.xxxxxxxxxxxxxxx.firebasedatabase.app"
    }
  };
```


### Run app
```
  ng serve
```
