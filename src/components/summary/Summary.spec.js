import React from 'react';
import Summary from './Summary';
import {shallow} from 'enzyme';

describe('Summary Component', () => {
  it('renders Loading when no products are available yet', () => {
    const component = shallow(
      <Summary
        products={[]}
        loadProducts={() => {}}
        updateProduct={() => {}}
        updateQuantity={() => {}}
      />
    );

    expect(component.text()).toBe('Loading...');
  });

  it('renders products', () => {
    const component = shallow(
      <Summary
        products={[
          {
            id: 111,
            name: 'X1 Cound DVR',
            price: 10.00
          },
          {
            id: 222,
            name: 'DTA Additional Outlet',
            price: 3.99
          }
        ]}
        loadProducts={() => {}}
        updateProduct={() => {}}
        updateQuantity={() => {}}
      />
    );
    const productsEl = component.find('.products select option');
    expect(productsEl.length).toBe(3);
    const htmlContent = productsEl.map(el => el.html());
    const expected = [
        '<option>Select</option>',
        '<option value="111">X1 Cound DVR - $ 10.00</option>',
        '<option value="222">DTA Additional Outlet - $ 3.99</option>'
      ];
    expect(htmlContent).toEqual(expected);
  });
});
