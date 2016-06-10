import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import TestUtils from "react-addons-test-utils";

import JobListings from '../lib/components/JobListings';
import Job from '../lib/components/Job';


const jobsArray = [
  { id: 1, title: "job1", description: "descption1", url: "url1",
    location: "location1", posted_date: "date1", remote: false,
    technologies: [ {id: 2, name: "c#"}, ],
    company: { id: 1, name: "name1" } },
    { id: 2, title: "job2", description: "descption2", url: "url2",
      location: "location2", posted_date: "date2", remote: false,
      technologies: [ {id: 1, name: ".net"}, ],
      company: { id: 2, name: "name2" }
    }
]


describe('<JobListings />', () => {
  it('jobs should call props of undefined', () => {
    const wrapper = shallow(<JobListings />);
    expect(wrapper.props().jobs).to.equal(undefined);
  });

  //it('returns Awaiting Ajax request when jobs is undefined', () => {
    //const wrapper = shallow(<JobListings />);
    //expect(wrapper.html()).to.equal(
      //'<div>Awaiting AJAX request</div>'
    //);
  //});

  //it('has two jobs', () => {
    //const wrapper = shallow(<JobListings />);
    //wrapper.setProps({jobs: jobsArray});
    //expect(wrapper.props().children).to.have.length(2);
  //})

  //it('returns the key values of each job', () => {
    //const wrapper = shallow(<JobListings />);
    //wrapper.setProps({jobs: jobsArray});
    //const jobs = wrapper.props().children
    //expect(jobs[0].key).to.equal('1')
    //expect(jobs[1].key).to.equal('2')
  //});

  //it('fullListing defaults to false', () => {
    //const wrapper = shallow(<JobListings />);
    //wrapper.setProps({jobs: jobsArray});
    //const jobs = wrapper.props().children
    //console.log(jobs[0].props.job.title)
    //expect(jobs[0].props.fullListing).to.equal(false);
  //});

  //it('job has a title', () => {
    //const wrapper = shallow(<JobListings />);
    //wrapper.setProps({jobs: jobsArray});
    //const jobs = wrapper.props().children
    //expect(jobs[0].props.job.title).to.equal('job1');
    //expect(jobs[1].props.job.title).to.equal('job2');
  //});

});

