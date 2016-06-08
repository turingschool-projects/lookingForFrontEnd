import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import JobIndex from '../lib/components/JobIndex';
import Header from '../lib/components/header';
import JobListings from '../lib/components/jobListings';


function mockJobs(overrides) {

}

describe('<JobIndex />', () => {
  it('contains a <Header /> component', () => {
    const wrapper = mount(<JobIndex/>);
      expect(wrapper.find(Header)).to.have.length(1);
  });

  it('contains a <JobListing /> component', () => {
    const wrapper = mount(<JobIndex/>);
      expect(wrapper.find(JobListings)).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(JobIndex.prototype, 'componentDidMount');
    const wrapper = mount(<JobIndex />);
    expect(JobIndex.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('renders as a <div>', () => {
    const wrapper = shallow(<JobIndex />);
    expect(wrapper.type()).to.eql('div');
  });

  //it('sets the state of jobs', () => {
    //const wrapper = shallow(<JobIndex jobs={jobs}/>);
    //wrapper.setState({jobs: jobs});
    //expect(wrapper.find(jobs)).to.have.length(3);
  //});
});
