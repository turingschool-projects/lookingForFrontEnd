import React from 'react/addons';
import { expect } from 'chai';
import { shallow, describeWithDOM, mount } from 'enzyme';

import HelloWorld from '../lib/HelloWorld';

describeWithDOM('HelloWorld', () => {
  it('receives prop: name ', () => {
    const name = 'World';
    const component = mount(<HelloWorld name={name} />);
    expect(component.props().name).to.equal(name);
  });
});

describe('HelloWorld', () => {
  it('renders an h1', ()=> {
    const name = 'World';
    const component = shallow(<HelloWorld name={name} />);

    expect(component.find('h1').text()).to.equal('Hello, World!');
  });
});
