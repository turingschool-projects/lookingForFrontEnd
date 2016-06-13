import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import JobIndex from '../lib/components/JobIndex';
import Header from '../lib/components/Header';
import SearchBarAndListings from '../lib/components/SearchBarAndListings';



describe('<JobIndex />', () => {
  it('contains a <Header /> component', () => {
    const wrapper = mount(<JobIndex/>);
      expect(wrapper.find(Header)).to.have.length(1);
  });

  it('contains a <JobListing /> component', () => {
    const wrapper = mount(<SearchBarAndListings/>);
      expect(wrapper.find(SearchBarAndListings)).to.have.length(1);
  });

  it('contains a div with className of container', () => {
    const wrapper = shallow(<JobIndex/>);
    expect(wrapper.find('.container').hasClass('container')).to.equal(true);
  });

  it('renders as a <div>', () => {
    const wrapper = shallow(<JobIndex />);
    expect(wrapper.type()).to.eql('div');
  });
});
