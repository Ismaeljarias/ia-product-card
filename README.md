# IA-Product-Card

This is a test package of deployment for NPM

### Ismael Arias

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ia-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
        count: 4,
        // maxCount: 10,
      }}>
  {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
  <>
  <ProductImage />
  <ProductTitle />
  <ProductButtons />
  </>
  )}
</ProductCard>
```
