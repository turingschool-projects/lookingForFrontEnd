import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import TestUtils from "react-addons-test-utils";

import SearchBar from '../lib/components/SearchBarAndListings';

describe('<SearchBar />', () => {
  it('should have an input for search', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('FormControl')).to.have.length(1);
  });

  it('should have a button', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('Button')).to.have.length(1);
  });

  it('contains a class of search-bar', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.hasClass('search-bar')).to.equal(true);
  });
});

