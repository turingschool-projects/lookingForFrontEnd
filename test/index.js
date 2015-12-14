import React       from 'react/addons';
import { expect }  from 'chai';
import { shallow } from 'enzyme';

import HelloWorld  from './lib/HelloWorld';

describe('HelloWorld', () => {
  it('receives prop: name ', () => {
    let name = 'World';
    const component = shallow(<HelloWorld name={name} />);

    expect(component.props().name).to.eq(name)
  });
});
