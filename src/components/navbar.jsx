import React from 'react';  

const NavBar = () => {
    return ( 
        <div id="site-header">
            <header id="header" className="header clearfix"> 
                <div className="header-wrap clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="flat-wrapper">
                                <div id="logo" className="logo">
                                        <img src="images/logosmall.png" alt="images" />
                                </div>
                                <div className="btn-menu">
                                    <span></span>
                                </div>
                           
                                <div className="nav-wrap">                                
                                    <nav id="mainnav" className="mainnav">
                                        <ul className="menu">
                                            <li className="home active">
                                                <a href="home.html">Home</a>
                                            </li>
                                
                                            <li className="resources has-mega-menu">
                                                <a className="has-mega" href="#">Platform</a>
                                                <div className="submenu mega-menu">
                                                    <div className="col-md-12 tabs-container">
                                                        <div className="col-md-2 col-sm-2 no-padding">
                                                          <ul className="nav nav-tabs tabs-left">
                                                            <li className="active" id="defaultOpen" onmouseover="learning(event, 'tab1-v')">Learning360.AI</li>
                                                            <li onmouseover="openSales(event, 'tab2-v')">My360.AI</li>
                                                          </ul>
                                                        </div>
                                                      
                                                        <div className="col-md-10 col-sm-10 no-padding1"> 
                                                          <div className="tab-content">
                                                            <div className="tabpane active" id="tab1-v">
                                                                <div className="col-md-3 col-sm-3 border-right">
                                                                    <a href="aboutlearning360.html"><img src="images/company1.png" />
                                                                    <p>About Learning360.AI</p></a>
                                                                  </div>
                                                                <div className="col-md-3 col-sm-3 border-right">
                                                                    <a href="learning360.html"><img src="images/company4.png" />
                                                                    <p>Apps in Platform</p></a>
                                                                </div>
                                                              
                                                              <div className="clearfix"></div>
                                                      
                                                            </div>
                                                            <div className="tabpane" id="tab2-v">
                                                                <div className="col-md-3 col-sm-3 border-right">
                                                                    <a href="aboutmy360.html"><img src="images/company4.png" />
                                                                    <p>About My360.AI </p></a>
                                                                  </div>
                                                                <div className="col-md-3 col-sm-3 border-right">
                                                                    <a href="salesAnalytics.html"><img src="images/company1.png" />
                                                                    <p>Sales Analytics </p></a>
                                                                  </div>
                                                                  <div className="col-md-3 col-sm-3 border-right">
                                                                    <a href="financeAnalytics.html"><img src="images/company2.png" />
                                                                    <p>Cash Flow Analytics</p></a>
                                                                </div>
                                                              <div className="clearfix"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                      </div>
                                                      
                                                </div>
                                            </li>
                                            <li className="has-mega-menu">
                                                <a className="has-mega" href="#mega">Technologies</a>
                                                <div className="submenu mega-menu">
                                                    <div className="row">
                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="dataManagment.html">
                                                                        <img src="images/huddle.png" alt="images" />
                                                                        <span>Data Management</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="dataIntegration.html">
                                                                        <img src="images/job-portal.png" alt="images" />
                                                                        <span>Data Integration and Virtualization</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="dataReport.html">
                                                                        <img src="images/App1.png" alt="images" />
                                                                        <span>Data Story Telling</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="digitalTechnologies.html">
                                                                        <img src="images/App2.png" alt="images" />
                                                                        <span>Digitalization</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="flat-divider d40px"></div>
                                                            
                                                        
                                                        <div className="flat-divider d40px"></div>
                                                    </div>
                                                    <div className="row">
                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="dataWarehouse.html">
                                                                        <img src="images/App3.png" alt="images" />
                                                                        <span>Data Warehouse & Data Lakes</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="cloudTechnologies.html">
                                                                        <img src="images/cloud.png" alt="images" />
                                                                        <span>Cloud Technologies</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="mobileTechnologies.html">
                                                                        <img src="images/DataAnalysis.png" alt="images" />
                                                                        <span>Mobile Technologies</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3 col-xs-6">
                                                                <div className="entry-cover">
                                                                    <a href="openSource.html">
                                                                        <img src="images/DataAnalysis.png" alt="images" />
                                                                        <span>Open Source</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="has-mega-menu">
                                                <a className="has-mega" href="#mega">Services</a>
                                                <div className="submenu mega-menu">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-3">
                                                            <div className="entry-cover">
                                                                <a href="consulting.html">
                                                                    <img src="images/services/services3.png" alt="images" />
                                                                    <span>Consulting Services</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-sm-3">
                                                            <div className="entry-cover">
                                                                <a href="knowledge.html">
                                                                    <img src="images/services/services1.png" alt="images" />
                                                                    <span>Knowledge Service</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                            <div className="col-md-3 col-sm-3">
                                                                <div className="entry-cover">
                                                                    <a href="projectService.html">
                                                                        <img src="images/services/services2.png" alt="images" />
                                                                        <span>Managed Services</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </li>   
                                            <li className="resources has-mega-menu">
                                                <a className="has-mega" href="#">Resources</a>
                                                <div className="submenu mega-menu">
                                                    <div className="row">
                                                            <div className="col-md-4 ">
                                                                <div className="mega-title">
                                                                    <h5 className="btn-mega">BLOGPOSTS</h5>
                                                                </div>
                                                                <ul className="mega-menu-sub"> 
    <li><a href="blog-EltActivity.html">Top 10 ETL Activities in DW Projects</a></li>
    <li><a href="blog-storytelling.html">Finding Story / 360 in Data sets</a></li>                  
    <li><a href="blog-platform.html">Importance of Analytics Platform for Small Business</a></li>
    <li><a href="blog.html" className="resources_data">See more blogs</a></li>
</ul>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="mega-title">
                                                                    <h5 className="btn-mega">Books</h5>
                                                                </div>
                                                                <ul className="mega-menu-sub"> 
                                                                   <li><a href="books.html">ABC dataWarehousing</a></li>
                                                                  <li><a href="books1.html">Retail 101 Glossary</a></li>
                                                                    {/* <!-- <li><a href="books1.html">Digital problems and solutions</a></li>                   */}
                                                                    <li><a href="books2.html">Can Business Executives develop store</a></li>
                                                                    <li><a href="blog.html" className="resources_data">See more books</a></li>     -->  
                                                                </ul>
                                                            </div>
                                        
                                                        </div>
                                                    </div>
                                            </li>
                                    
                                            <li className="resources has-mega-menu">
                                                <a className="has-mega" href="#">Company</a>
                                                <div className="submenu mega-menu">
                                                    <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="mega-title">
                                                                    <h5 className="btn-mega">About</h5>
                                                                </div>
                                                                <ul className="mega-menu-sub"> 
                                                                    {/* <!-- <li><a href="coreValues.html">Our Core Values</a></li> --> */}
                                                                    <li><a href="approach.html">Our Approach</a></li>                  
                                                                    <li><a href="culture.html">Our Culture</a></li>
                                                                    <li><a href="team.html">Our Team</a></li>                                                   
                                                                    {/* <!-- <li><a href="values.html" className="resources_data">Read more</a></li> --> */}
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="mega-title">
                                                                    <h5 className="btn-mega">Careers</h5>
                                                                </div>
                                                                <ul className="mega-menu-sub"> 
                                                                    <li><a href="career.html">SQL Developer</a></li>
                                                                    <li><a href="career.html">IT Recruiter</a></li>     
                                                                    <li><a href="career.html">BlockChain Developer</a></li>         
                                                                    <li><a href="positions.html" className="resources_data">See All Positions</a></li>
                                                                    
                                                                </ul>
                                                            </div>
                                                            
                                                           
                                                    </div>
                                                  
                                                </div>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>                                    
                                    </nav> 
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>
            </header>
        </div>
    
     );
}
 
export default  NavBar;