## FragginWagon's PGPool Tools

For right now this is for users looking to uplaod accounts into PGPool but I will add more features as I get the time.
___
I have started a discord that I will make better over time [here](https://discord.gg/VBZuATn)
___
To run this locally all you need to do is run these in the terminal at the root of this folder:

`npm install && bower install && gulp serve`

npm and bower installs only need to be made once.

To run this or place this on a server you will need to run `gulp build` which will create a `dist/` folder in the root of this drive thats contents can be copied to the root of a hosting server

you will need an .htaccess file in the root of your remote server if it uses apache that contains the following:

```
<IfModule mod_rewrite.c>
   Options +FollowSymlinks
   RewriteEngine On
   RewriteBase //
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_URI} !.*\.(css|js|html|png|jpg|jpeg|gif|txt)
   RewriteRule (.*) index.html [L]
</IfModule>
```

### For Account Upload Section
For this to work if PGPool is on another server you will need to modify the following files:

add in `flask-cors` to the `requirements.txt`

in `pgpool.py` you will need to add a few lines:

> add `from flask_cors import CORS` under `from flask import Flask, request, jsonify`
> add `CORS(app)` under `app = Flask(__name__)`

the above two will allow cross domain communication so you wont hit any CORS issues when you try and save the accounts

You will also need to enter the url of your pgpool in the `src/app/index.api.js` as well you can enter the URL of your custom url for the restart numbra api server (Not uploaded mine yet but will at a later date)

## Final Notes and such...
+ Feel free to use this how you may.
+ Issues when uploading an account can be posted on discord once I get a channel going but please use GitHub issues
+ Want a feature? Make a GitHub issue for it please
+ Please dont complain that this doesnt work for you. I am willing to help when I am available so be patient
+ Give me credit where credit is due :)
+ I do havemore features planned so again...patience please
+ Enjoy
