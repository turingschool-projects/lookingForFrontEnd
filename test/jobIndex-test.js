import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import JobIndex from '../lib/components/JobIndex';
import Header from '../lib/components/header';
import JobListings from '../lib/components/jobListings';

describe('<JobIndex />', () => {
  it('contains a <Header /> component', function() {
    sinon.spy(JobIndex.prototype, 'componentDidMount');
    const wrapper = mount(<JobIndex/>);
      expect(wrapper.find(Header)).to.have.length(1);
  });
});
