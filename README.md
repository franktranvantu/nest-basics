# Use Transactions

```bash
$ nest g class events/entities/event.entity --no-spec
```

Notes: Add `transformOptions` to `main.ts`
```typescript
transformOptions: {
  enableImplicitConversion: true
}
```