import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import TestUtils from "react-addons-test-utils";

import SearchBar from '../lib/components/SearchBar';

describe('<SearchBar />', () => {
  it('should have an input for search', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('FormControl')).to.have.length(1);
  });

  it('should have a button', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('Button')).to.have.length(2);
  });

  it('contains a class of search-bar', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('.search-bar').hasClass('search-bar')).to.equal(true);
  });

  it('should have props for jobListings', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.props().jobs).to.be.defined;
  });

  it('sets the state of jobs', () => {
    const jobsArray = ['job1', 'job2', 'job3']
    const wrapper = mount(<SearchBar />);
    wrapper.setState({jobs: jobsArray});
    expect(wrapper.state('jobs')).to.equal(jobsArray);
  });
});
