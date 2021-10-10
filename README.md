# Node Railsbank API Helper

[![https://telegram.me/@nayiem]](https://telegram.me/@nayiem)

A Promised NodeJS Module for connecting with the Railsbank V1 API

## Install via git

```
git clone https://github.com/qredit/noderailsbankapi
cd noderailsbankapi
npm install

node example.js
```

example.js:

```
const railsbankApi = require("./lib/railsbankApi");
const rabi = new railsbankApi.default();

enduser_body=$(< <(cat <<EOF
{
  "person": {
    "name": "Nayiem Willems",
    "email": "nayiem@domain.com",
    "date_of_birth": "1992-10-26",
    "telephone": "01234567890"
  },
  "enduser_meta": {
    "primary_account": [],
    "account_ordering": []
  }
}
EOF
))

APIKEY="APIKEY"


```

## Install via npm

```
npm install --save https://github.com/qredit/noderailsbankapi
```

```
const railsbankApi = require("./lib/railsbankApi");
const rabi = new railsbankApi.default();

enduser_body=$(< <(cat <<EOF
{
  "person": {
    "name": "Nayiem Willems",
    "email": "nayiem@domain.com",
    "date_of_birth": "1992-10-26",
    "telephone": "01234567890"
  },
  "enduser_meta": {
    "primary_account": [],
    "account_ordering": []
  }
}
EOF
))

APIKEY="APIKEY"
```
