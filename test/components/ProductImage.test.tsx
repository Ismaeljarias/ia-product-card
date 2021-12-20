import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Product Image', () => {
  test('should show the component with the custom image', () => {
    const wrapper = renderer.create(
      <ProductImage className="product-name" img="https://image.com" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage img={product2.image} />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
