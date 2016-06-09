import React from 'react';
import Job from './Job';
import Header from './Header';

class JobShow extends React.Component {
  constructor() {
    super();
    this.state = { job: {} };
  }

  componentDidMount() {
    let job = {
      id: 1,
      title: "Javascript Developer at Alleare Consulting (Westwood, KS)",
      description: "<p>IMMEDIATE opening for an Adobe Campaign JavaScript Developer to join our growing team. This is an exciting opportunity in the marketing and analytics space. This individual will be responsible for JavaScript development in an adobe marketing campaign environment. They will have the opportunity to learn adobe marketing campaign products and develop into a senior developer on our team. If you already have senior level experience, this is an opportunity to hone in on your skills and always work with cutting edge technologies. &nbsp;Excellent opportunity to join a great team of industry experts.</p><br /><p>This individual will participate in and lead the design and configuration of the Adobe Campaign platform. They utilize SQL, JavaScript, XML, and Web Services to build sophisticated ETL processes, extend product functionality, and set-up the large-scale delivery of communications with dynamic content in real-time. More senior consultants are aware of cross-channels marketing practices, enabling them to lead business discussion and engage directly with customers on functional topics as well as able to go into the detail of defining the best design for very specific customer requirements.</p><br /><p>Responsibilities</p><br /><ul><br /><li>Lead work efforts to Configuration and design to meet customer business needs</li><br /><li>Leading Adobe Campaign Design, configuration and can handle most integration cases with 3<sup>rd</sup> party solutions</li><br /><li>Develop, test, and deploy Adobe Campaign software solutions including Campaigns, ETL processes, and Web Applications</li><br /><li>Troubleshoot, diagnose, and resolve software problems</li><br /><li>Onsite travel to customer sites may be needed (20-25%)</li><br /></ul>",
      url: "http://stackoverflow.com/jobs/117479/software-engineer-net-smashfly-technologies",
      location: "Westwood, KS",
      posted_date: "2016-06-02",
      remote: true,
      technologies: [
        {id: 1, name: ".net"},
        {id: 2, name: "c#"},
        {id: 3, name: "angularjs"},
        {id: 4, name: "angular"}
      ],
      company: {
        id: 2502,
        name: "Alleare Consulting"
      }
    };
    this.setState({ job: job });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Job key={this.state.job.id} job={this.state.job} fullListing={true} />
        </div>
      </div>
    );
  }
}



export default JobShow;
