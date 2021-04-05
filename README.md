# Class Providers

```typescript
// "useClass" syntax example
{
  provide: ConfigService,
    useClass:
  process.env.NODE_ENV === 'development'
    ? DevelopmentConfigService
    : ProductionConfigService,
}
```