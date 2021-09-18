import React from "react";
import "./Experience.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Experience = () => {
  return (
    <div className="main">
      <Tabs>
        <TabList>
          <Tab>
            <p>Simeio Solutions</p>
          </Tab>
          <Tab>
            <p>Amdocs</p>
          </Tab>
          <Tab>
            <p>Edgeverve</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <div className="panel-heading">
              <h3>Consultant</h3>
              <div className="panel-sub-heading">
                <p>August 2020 - September 2021</p>
              </div>
            </div>
            <ul>
              <li>Full Stack Developer role.</li>
              <li>Worked in IGA domain.</li>
              <li>Worked on developing the microservice architecture.</li>
              <li>Migrated the exisiting restful services to microservices.</li>
              <li>
                Involved in doing POC for implementing technologies in project.
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <div className="panel-heading">
              <h3>Software Developer</h3>
              <div className="panel-sub-heading">
                <p>Sep 2018 - August 2020</p>
              </div>
            </div>
            <ul>
              <li>
                Delivering and Implementing new requirement using microservices
                within the deadlines.
              </li>
              <li>
                Involvement in Requirement Scoping with the Business Analyst.
              </li>
              <li>
                Designing the Impact Assessment (IA) with the Business Analyst
                and giving estimates for the requirement.
              </li>
              <li>Involvement in the Issues resolution in ST and UAT.</li>
              <li>Pre & Post Production and Production Release activity.</li>
              <li>
                Provide On-Site support (On-site Co-ordinator) as per Project
                requirements.
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <div className="panel-heading">
              <h3>Systems Engineer</h3>
              <div className="panel-sub-heading">
                <p>May 2016 - August 2018</p>
              </div>
            </div>
            <ul>
              <li>Worked as a Backend Java Developer.</li>
              <li>Client meetings and discussions about new requirements.</li>
              <li>
                Customizing the product(FINACLE Internet Banking) to incorporate
                the new requirements.
              </li>
              <li>Developing vies (JSP) based on new requirements.</li>
              <li>
                Testing new feature end to end and deliver to UAT testing team.
              </li>
              <li>
                Provide On-Site support (On-site Co-ordinator) as per Project
                requirements.
              </li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Experience;
