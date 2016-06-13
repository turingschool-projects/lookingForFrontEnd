import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import TestUtils from "react-addons-test-utils";

import JobShow from '../lib/components/JobShow';
import Job from '../lib/components/Job';
import $ from 'jquery';

const job1 = { job: { id: 1, title: "job1", description: "description1", url: "url1",
    location: "location1", posted_date: "date1", remote: false,
    technologies: [ {id: 2, name: "c#"}, ],
    company: { id: 1, name: "name1" } } }

describe('<JobShow />', () => {
  it('should call state when it first mounts', () => {
    sinon.spy(JobShow.prototype, 'componentDidMount');
    const wrapper = mount(<JobShow />);
    expect(JobShow.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('returns Awaiting for Ajax when job is undefined', () => {
    const wrapper = shallow(<JobShow />);
    expect(wrapper.props().children).to.equal('Loading...');
  });

  it('jobListing is set to true', () => {
    const wrapper = shallow(<JobShow />);
    wrapper.setState({ job: job1 })
    const job = wrapper.props().children[1].props.children.props
    expect(job.fullListing).to.equal(true);
  });

  it('job has a title', () => {
    const wrapper = shallow(<JobShow />);
    wrapper.setState({ job: job1 })
    const job = wrapper.props().children[1].props.children.props
    expect(job.job.title).to.equal('job1');
    expect(job.job.description).to.equal('description1');
    expect(job.job.id).to.equal(1);
    expect(job.job.location).to.equal('location1');
  });
});
