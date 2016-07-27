import React from 'react';
import { mount, shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
import {expect} from 'chai';
import sinon from 'sinon';

import JobIndex from '../lib/components/JobIndex';
import Header from '../lib/components/Header';
import SearchBar from '../lib/components/SearchBar';
import JobListings from '../lib/components/JobListings';

var chai = require('chai');
chai.use(chaiEnzyme());

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

describe('<JobIndex />', () => {
  it('contains a <Header /> component', () => {
    const wrapper = shallow(<JobIndex/>);
      expect(wrapper.find(Header)).to.have.length(1);
  });

  it('contains a <SearchBar /> component', () => {
    const wrapper = shallow(<JobIndex/>);
      expect(wrapper.find(SearchBar)).to.have.length(1);
  });

  it('contains a <JobListings /> component', () => {
    const wrapper = shallow(<JobIndex />);
    wrapper.setState({ jobs: jobsArray });
    expect(wrapper).to.have.descendants("#listingsAndFooter");
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
