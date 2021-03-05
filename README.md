# Adding Pagination

```bash
$ nest g class common/dto/pagination-query.dto --no-spec
```

Notes: Add `transformOptions` to `main.ts`
```typescript
transformOptions: {
  enableImplicitConversion: true
}
```