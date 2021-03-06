# Handling Malicious Request Data

```json
curl --location --request POST 'localhost:3000/coffees' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Coffee #1",
    "brand": "Brand #1",
    "flavors": [
      "Flavor #1",
      "Flavor #2"
    ],
     "isEnable": true
  }'
```

Do not enable white list => *All properties of body request will be returned.*

Enable `whitelist` in `main.ts` => *Only the properties of DTO will be returned.*

Enable `forbidNonWhitelisted` in `main.ts` => *STOP a request if any non-white listed properties are present .*
