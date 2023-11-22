import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FCaf%25C3%25A9&psig=AOvVaw1H7gi9c2ijcrSqiyT4bFwM&ust=1700777883981000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjvy77R2IIDFQAAAAAdAAAAABAE" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostarr el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
