# cotw

This project serves a simple geonames api once the data has been loaded into a sqlite database using [these scripts](https://github.com/mattschlosser/cotw-bash-scripts)

The loopback api ended up not being useful as it was too slow to perform thousands of api calls

**Project repo:** https://github.com/mattschlosser/geonames

To setup, clone the repo, and place the generated sqlite3 db `data.db` into the root of the loopback project. 
```bash
npm i 
npm start
```

**Live Demo (India Data):** https://cotw.rugg.rocks/explorer

The api makes it easy to find alternative names. Too slow for practical use as it requires a call for every village. 

For example, say I want to find alternative names for the city of "Yavatmal" in Idia

Making a `GET` request to my newly created API https://cotw.rugg.rocks/places/?filter[where][name]=Yavatmal returns: 
```json
    [
  {
    "geonameid": 1252771,
    "name": "Yavatmal",
    "asciiname": "Yavatmal",
    "alternatenames": "Distretto di Yavatmal,District dYavatmal,Distrito de Yavatmal,Javatmal,YVT,Yavatmal,Yavatmal District,Yavatmal district,Yavatmāl,mntqt yafatmal,ya wa te ma er xian,yabatamala jilla,yavatamala,yavatamala jil'ha,yavatamala jila,yavatamala jilla,yavatamala jillo,yavatamalamandalam,yavatmal jilla,yavatmal mavattam,Яватмал,ضلع یاوتمال,منطقة يافاتمال,یوٹمل ضلع,यवतमाल जिला,यवतमाल जिल्ला,यवतमाळ,यवतमाळ जिल्ला,यवतमाळ जिल्हा,यवतमाळमण्डलम्,યવતમાળ જિલ્લો,ଯବତମାଲ ଜିଲ୍ଲା,யவத்மாள் மாவட்டம்,యావత్మల్ జిల్లా,亞瓦特馬爾縣",
    "latitude": "20.15",
    "longitude": "78.35",
    "cc2": ""
  }
]
```

In the above case, there was a hit. The `geonameid` is 1252771. Using this as the id in the next call:
https://cotw.rugg.rocks/places/1252771/alternate-places
```json
    [
  {
    "geonameid": 1252771,
    "isoLanguage": "en",
    "alternateName": "Yavatmal District",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "",
    "alternateName": "Yavatmāl",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "link",
    "alternateName": "https://en.wikipedia.org/wiki/Yavatmal_district",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "en",
    "alternateName": "Yavatmal district",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "es",
    "alternateName": "Distrito de Yavatmal",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "fr",
    "alternateName": "District dYavatmal",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "it",
    "alternateName": "Distretto di Yavatmal",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "ar",
    "alternateName": "منطقة يافاتمال",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "gu",
    "alternateName": "યવતમાળ જિલ્લો",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "hi",
    "alternateName": "यवतमाल जिला",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "mr",
    "alternateName": "यवतमाळ जिल्हा",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "ne",
    "alternateName": "यवतमाळ जिल्ला",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "new",
    "alternateName": "यवतमाल जिल्ला",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "or",
    "alternateName": "ଯବତମାଲ ଜିଲ୍ଲା",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "pnb",
    "alternateName": "ضلع یاوتمال",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "sa",
    "alternateName": "यवतमाळमण्डलम्",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "ta",
    "alternateName": "யவத்மாள் மாவட்டம்",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "te",
    "alternateName": "యావత్మల్ జిల్లా",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "ur",
    "alternateName": "یوٹمل ضلع",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "ru",
    "alternateName": "Яватмал",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "zh",
    "alternateName": "亞瓦特馬爾縣",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "",
    "alternateName": "Yavatmal",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "en",
    "alternateName": "Yavatmal",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "mr",
    "alternateName": "यवतमाळ",
    "from": "",
    "to": ""
  },
  {
    "geonameid": 1252771,
    "isoLanguage": "abbr",
    "alternateName": "YVT",
    "from": "",
    "to": ""
  }
]
``` 
Above, we see translations for the city of Yavatmal. For example, it's Hindi translation is "यवतमाल जिला". 

In this case, many others are available. I am still not sure on how complete this dataset is. 

# Loopback README

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
