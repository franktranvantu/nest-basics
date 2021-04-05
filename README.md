# Setting up Migrations

## ormconfig.js
```javascript
module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
    migrationsDir: 'src/migrations',
    }
};
```

## Creating a TypeOrm Migration
```bash
npx typeorm migration:create -n CoffeeRefactor
```

## src/migrations/... file
```typescript
public async up(queryRunner: QueryRunner): Promise<any> {
  await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
}
    
public async down(queryRunner: QueryRunner): Promise<any> {
  await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
}
```

## RUNNING MIGRATIONS

Remember

You must BUILD your Nest project (so that everything is output to the `/dist/` folder, before a Migration can run, it needs compilated files.

### Compile project first
```bash
npm run build
```

### Run migration(s)
```bash
npx typeorm migration:run
```
### REVERT migration(s)
```bash
npx typeorm migration:revert
```

### Let TypeOrm generate migrations (for you)
```bash
npx typeorm migration:generate -n SchemaSync
```