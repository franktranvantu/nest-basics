# Non-class-based Provider Tokens

```typescript
// String-valued token
{
  provide: 'COFFEE_BRANDS',
  useValue: ['buddy brew', 'nescafe'] // array of coffee brands,
},

// Injecting string-valued token into CoffeesService
@Injectable()
export class CoffeesService {
  constructor(@Inject('COFFEE_BRANDS') coffeeBrands: string[]) {}
}

/* coffees.constants.ts File */
export const COFFEE_BRANDS = 'COFFEE_BRANDS';
```