/**
 * Contact Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Work = {
    template: ` 
        <div class="banner-image work-banner-image">
            <h1 class="home-banner-text text-focus-in">RESUME</h1>
        </div>
        <div class="content home-intro">
            <section>
                <h2 class="resume-sub-header">Employment History</h2>
                <section class="employer">
                <h4 class="resume-title">SiriusXM-Pandora</h4> <span class="tag resume-current">Current</span>
                <h6 class="resume-title">August 2014 &mdash;</h6>
                </section>
                <section>
                    <h5 class="resume-title">Team Lead, Principal Software Engineer</h5>
                    <h6 class="resume-title">January 2021 &mdash;</h6>
                    <h6 class="resume-title">Lawerenceville, New Jersey</h6>
                    <p class="resume">Design and implementation of the APIS for the newer applications running on cars
                     and on mobile, web, and ten-foot devices with Envoy and Spring Cloud Gateway.</p>
                    <p class="resume">Participated in the design and development of REST APIs based around microservices 
                    built using Scala with Akka HTTP Framework run on Docker technology with AWS ECR/ECS. The system is later augmented with 
                    a Routing engine written with Spring Boot and Zuul Framework.</p>
                </section>
                <section>
                    <h5 class="resume-title">Senior Software Architect</h5>
                    <h6 class="resume-title">August 2014 &mdash; December 2020</h6>
                    <h6 class="resume-title">Lawerenceville, New Jersey</h6>
                    <p class="resume">Responsible for design, implementation and enhancements of various backend 
                    systems that are part of the core function of the SiriusXM Internet- and satellite-based music players, 
                    including search and recommendation systems:</p>
                    <ul class="resume">
                        <li class="resume"> Enhancements and stabilization of search infrastructure based on Apache Solr (SolrCloud). 
                        Designed the new network topology deployed on Amazon Web Services from scripted EC2 provisioning 
                        and spin-up down to security and segmentation of servers using advanced network implementations 
                        e.g. Route53 Private Hosted Zones and VPC Peering</li>
                        <li class="resume">Implementation of system monitoring using Python and Logstash + Solr + Banana</li>
                        <li class="resume">Involved in the proof-of-concept, design, and implementation of next-generation RESTful APIs 
                        using Java 8 technology applying its new concepts like lambdas and functional programming with 
                        a NoSQL backend and AngularJS on the frontend.</li>
                    </ul>
                    <p class="resume">Writing scripts to automate/streamline a number of development/deployment tasks 
                    using Python, Powershell, and/or Groovy where applicable.</p>
                </section>
                <div class="divider"></div>
                <section class="employer">
                <h4 class="resume-title">The Associated Press</h4>
                <h6 class="resume-title">June 2003 &mdash; July 2014</h6>
                </section>
                <section>
                    <h5 class="resume-title">Software Architect</h5>
                    <h6 class="resume-title">March 2012 &mdash; July 2014</h6>
                    <h6 class="resume-title">Cranbury, New Jersey</h6>
                    <p class="resume">In charge of design and implementation of APIs and services used by the AP Mobile 
                    Applications platform (including the AP Mobile News) and expansion of public-facing API 
                    (http://developer.ap.org/). Some of the prominent technologies used:</p>
                    <ul class="resume">
                        <li class="resume">Microsoft ASP.NET and NancyFx (for API implementation)</li>
                        <li class="resume">iOS/Android - mobile app development/prototype</li>
                        <li class="resume">Google App Engine - Services Backend in Python using AppEngine SQL/NoSQL storage</li>
                        <li class="resume">Java/Groovy - Pre-processing of raw data (e.g., sports scores) API data augmentation</li>
                        <li class="resume">MongoDB + Redis - Local NoSQL metadata storage and queue/caching </li>
                        <li class="resume">MySQL + Microsoft SQL Server - RDBMS </li>
                        <li class="resume">AngularJS MVVM</li>
                    </ul>
                    <p class="resume">Worked largely with the research team for optimizing our FAST ESP index profile. 
                    this involves writing custom software (using .NET and Powershell) and logging the results to a SQL 
                    Server for automated repeated ingestion of 13 million documents. This resulted to a highly-optimized 
                    FAST ESP search index profile that powers the Content API and the AP Images search engine.</p>
                    <p>Implemented an alerting platform that leverages open source technologies on a CentOS environment. 
                    This allows editorial to send breaking news messages to multiple alerting systems at the same time 
                    which includes iOS and Google Cloud Messaging (for Google products like Android) push notification. 
                    This used Gearman as an orchestration engine, Redis for queueing and MongoDB as datastore.</p>
                    <p>Implemented an enterprise-wide logging patterns and libraries (Python for Unix-based systems and 
                    .NET for Windows-based systems) using ElasticSearch and Kibana. This allows uniform logging of data 
                    and unique IDs shared across multiple systems that allows correlation and aggregation of data which 
                    is then used for trending. The libraries are thin wrappers for the REST calls to insert records to 
                    ElasticSearch so the app can easily adapt them in existing logging frameworks like log4j or NLog.</p>
                </section>
                <div class="divider"></div>
                <section>
                    <h2 class="resume-sub-header">Education</h2>
                    <section>
                        <h5 class="resume-title">Boston University</h5> <span class="tag resume-current">In Progress</span>
                        <h6 class="resume-title">MS Software Development</h6>
                        <h6 class="resume-title">2021 &mdash; </h6>
                    </section>
                    <section>
                        <h5 class="resume-title">Mapua University</h5>
                        <h6 class="resume-title">BS Computer Engineering</h6>
                        <h6 class="resume-title">1990 &mdash; 1995</h6>
                    </section>
                </section>
                <div class="divider"></div>
                <section>
                    <h2 class="resume-sub-header">Certifications</h2>
                    <section>
                        <h5 class="resume-title">AWS Certified Developer &mdash; Associate</h5>
                        <h6 class="resume-title">Amazon Web Services</h6>
                        <h6 class="resume-title">Issued January 2017</h6>
                    </section>
                    <section>
                        <h5 class="resume-title">AWS Certified Architect &mdash; Associate</h5>
                        <h6 class="resume-title">Amazon Web Services</h6>
                        <h6 class="resume-title">Issued January 2017</h6>
                    </section>
                </section>
            </section>
        </div>`
}