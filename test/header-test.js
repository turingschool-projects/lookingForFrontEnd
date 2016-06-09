import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import TestUtils from "react-addons-test-utils";

import Header from '../lib/components/header';
import SearchBar from '../lib/components/searchBar';

describe('<Header />', () => {
  //before('render and locate element', () => {
    //var renderedComponent = TestUtils.renderIntoDocument(
      //<Header />
    //);

    //// Searching for <input> tag within rendered React component
    //// Throws an exception if not found
    //var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      //renderedComponent,
      //'<SearchBar />'
    //);

    //this.inputElement = inputComponent.getDOMNode();
  //});

  it('should render an <a>', () => {
    const wrapper = mount(<Header/>);
    expect(wrapper.find('a')).to.have.length(1);
  });

  it('contains a class of nav', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.hasClass('nav')).to.equal(true);
  });

  it('has an <a> with LookingFor text', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.contains(<a href="#">Looking For</a>)).to.equal(true);
  });

  //it('contains a <SearchBar/> component', () => {
    //const wrapper = mount(<Header/>);
    //expect(wrapper.contains(<SearchBar />)).to.equal(true);
  //});
});

