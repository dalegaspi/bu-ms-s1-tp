/**
 * Contact Vue content
 *
 * @author dlegaspi@bu.edu
 */
'use strict';

export const Work = {
    template: ` 
        <div>
            <div class="banner-image work-banner-image">
                <h1 class="home-banner-text text-focus-in">RESUME</h1>
            </div>
            <div id="top" class="content home-intro content-with-toc">
                <div class="content-left">
                    <div class="content-left-toc">
                        <ul>
                            <li><router-link to="#employers">Employment</router-link></li>
                            <ul>
                                <li><router-link to="#employer1">SiriusXM-Pandora</router-link></li>         
                                <li><router-link to="#employer2">Associated Press</router-link></li>
                                <li><router-link to="#employer3">Wave Systems</router-link></li>
                            </ul>
                            <li><router-link to="#education">Education</router-link></li>
                            <li><router-link to="#certifications">Certifications</router-link></li>
                            <br>
                            <simple-scroll-top type="image"></simple-scroll-top>
                        </ul>
                    </div>
                </div>
                <div class="content content-right">
                    <section>
                    <h2 id="employers" class="resume-sub-header">Employment History</h2>
                    <section id="employer1" class="employer">
                    <h4 class="resume-title">SiriusXM-Pandora</h4>
                    <h6 class="resume-title">August 2014 &mdash;</h6>
                    </section>
                    <section>
                        <h5 class="resume-title-inline">Team Lead, Principal Software Engineer</h5> <span class="tag resume-current">Current</span>
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
                    <simple-scroll-top type="image"></simple-scroll-top>
                    <div class="divider"></div>
                    <section id="employer2" class="employer">
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
                    <simple-scroll-top type="image"></simple-scroll-top>
                    <div class="divider"></div>
                    <section id="employer3" class="employer">
                    <h4 class="resume-title">Wave Systems Corp.</h4>
                    <h6 class="resume-title">July 2000 &mdash; July 2003</h6>
                    </section>
                    <section>
                        <h5 class="resume-title">Senior Software Engineer</h5>
                        <h6 class="resume-title">July 2000 &mdash; July 2003</h6>
                        <h6 class="resume-title">Plainsboro, New Jersey</h6>
                        <p class="resume">Designed and implemented a C Program that runs on a ARM CPU-based proprietary 
                        device that communicates with a Windows Host program via USB. The module that handles the communication 
                        is written as a DLL to promote reuse of the library. Device software was developed using ARM 
                        Project Manager; Host software was developed using Microsoft Visual C++ 6.0. Rational Rose and 
                        Rational Unified Process for design.</p>
                        <p class="resume">Designed and implemented an ATL Component that is used to facilitate installation 
                        of device driver for a proprietary multimedia software. Written using Microsoft Visual C++ 6.0 
                        utilizing the ATL Wizard.</p>
                        <p class="resume">Prototyped a Java Client that is designed to enable online (Internet) purchasing 
                        through Linux-based Set-Top Boxes that is powered Java. Created using Java/J2EE with XML over HTTPS 
                        for messaging (using Java Secure Sockets Extension) and JFC/Swing for user interface. Back-end is 
                        hosted on a Jetty Web Server with CGI components written in Java with Xalan and Xerces-J for XML 
                        and XSLT processing.</p>
                        <p class="resume">Improved an existing Account Manager that runs in a Java WebServer using Java 
                        Servlets and TopLink/JDBC for database access to a Sybase server.</p>
                    </section>
                    <simple-scroll-top type="image"></simple-scroll-top>
                    <div class="divider"></div>
                    <section id="education">
                        <h2 class="resume-sub-header">Education</h2>
                        <section>
                            <h5 class="resume-title">Boston University</h5> 
                            <h6 class="resume-title-inline">MS Software Development</h6> <span class="tag resume-current">In Progress</span>
                            <br>
                            <h6 class="resume-title">2021 &mdash; </h6>
                        </section>
                        <section>
                            <h5 class="resume-title">Mapúa University</h5>
                            <h6 class="resume-title">BS Computer Engineering</h6>
                            <h6 class="resume-title">1990 &mdash; 1995</h6>
                        </section>
                    </section>
                    <simple-scroll-top type="image"></simple-scroll-top>
                    <div class="divider"></div>
                    <section id="certifications">
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
                    <simple-scroll-top type="image"></simple-scroll-top>
                </section>
                </div>
            </div>
        </div>`
}