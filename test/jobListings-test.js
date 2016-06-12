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
  it('returns no results matched your search', () => {
    const wrapper = shallow(<JobListings jobs="" />);
    expect(wrapper.html()).to.equal(
      '<h3 class="no-results-message">No results matched your search</h3>'
    );
  });

  it('fullListings defaults to false', () => {
    const wrapper = shallow(<JobListings jobs={jobsArray}/>);
    expect(wrapper).to.have.length(1)
    const jobs = wrapper.props().children
    expect(jobs[0].props.fullListing).to.equal(false);
  })

  it('job has a title', () => {
    const wrapper = shallow(<JobListings jobs={jobsArray} />);
    const jobs = wrapper.props().children
    expect(jobs[0].props.job.title).to.equal('job1');
    expect(jobs[1].props.job.title).to.equal('job2');
  });

  it('returns the key values of each job', () => {
    const wrapper = shallow(<JobListings jobs={jobsArray} />);
    const jobs = wrapper.props().children
    expect(jobs[0].key).to.equal('1')
    expect(jobs[1].key).to.equal('2')
  });
});

