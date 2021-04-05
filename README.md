# Validate Input Data with Data Transfer Objects

```bash
$ npm i class-validator class-transformer
$ npm i @nestjs/mapped-types 
```

Add validationPipe to `main.ts`
```typescript
app.useGlobalPipes(new ValidationPipe());
```

```json
curl --location --request POST 'localhost:3000/coffees' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Coffee #1",
    "brand": 1,
    "flavors": [
      "Flavor #1",
      2
    ]
  }'
```