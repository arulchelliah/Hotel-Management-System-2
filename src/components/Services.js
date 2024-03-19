import React from 'react'

export default function Services() {
  return (
    <div>
      <>
  <title>Hotel Website | Services</title>
  <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
  <link
    href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow"
    rel="stylesheet"
    type="text/css"
  />
  {/*-start-Wrap-*/}
  {/*-start-header-*/}
  <div className="header">
    <div className="wrap">
      <div className="header-top">
        <div className="logo">
          <a href="index.html">
            <img src="images/logo2.png" title="logo" />
          </a>
        </div>
        <div className="contact-info">
          <p className="phone">
            Call us : <a href="#">980XXXXXXX</a>
          </p>
          <p className="gpa">
            Gpa : <a href="#">View map</a>
          </p>
          <p className="code">
            BROUGHT TO YOU BY:
            <a href="https:www.code-projects.org">CODE-PROJECTS</a>
          </p>
        </div>
        <div className="clear"> </div>
      </div>
    </div>
    <div className="header-top-nav">
      <div className="wrap">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li className="active">
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="gallery.html">Gallery</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <div className="clear"> </div>
        </ul>
      </div>
    </div>
  </div>
  {/*-End-header-*/}
  <div className="clear"> </div>
  {/*-start-content---*/}
  <div className="content">
    <div className="wrap">
      {/*---start--services----*/}
      <div className="services">
        <div className="service-content">
          <h3>Our Hotel Services</h3>
          <ul>
            <li>
              <span>1.</span>
            </li>
            <li>
              <p>
                <a href="#">CULTURE SHOW</a> Every Evening We . . . . .
              </p>
            </li>
            <div className="clear"> </div>
          </ul>
          <ul>
            <li>
              <span>2.</span>
            </li>
            <li>
              <p>
                <a href="#">SWIMMING POOL</a> You can enjoy Swimming in the pool
                and relax with a drink. . .. . .
              </p>
            </li>
            <div className="clear"> </div>
          </ul>
          <ul>
            <li>
              <span>3.</span>
            </li>
            <li>
              <p>
                <a href="#">RESTAURANT</a> You can have . . .{" "}
              </p>
            </li>
            <div className="clear"> </div>
          </ul>
          <ul>
            <li>
              <span>4.</span>
            </li>
            <li>
              <p>
                <a href="#">CONFERENCE HALL</a>Here You . . . .
              </p>
            </li>
            <div className="clear"> </div>
          </ul>
          <ul>
            <li>
              <span>5.</span>
            </li>
            <li>
              <p>
                <a href="#">SPA</a>Here . . . .
              </p>
            </li>
            <div className="clear"> </div>
          </ul>
          <ul>
            <li>
              <span>6.</span>
            </li>
            <li>
              <p>
                <a href="#">POOLSIDE BAR</a> To chill. . .. .{" "}
              </p>
            </li>
            <div className="clear"> </div>
          </ul>
        </div>
        <div className="services-sidebar">
          <h3>WE PROVIDE</h3>
          <ul>
            <li>
              <a href="#">other facility</a>
            </li>
            <li>
              <a href="#">other facility</a>
            </li>
            <li>
              <a href="#">other facility</a>
            </li>
            <li>
              <a href="#">other facility</a>
            </li>
            <li>
              <a href="#">other facility</a>
            </li>
            <li>
              <a href="#">BROUGHT TO YOU BY CODE-PROJECTS</a>
            </li>
            <li>
              <a href="#">other facility</a>
            </li>
          </ul>
        </div>
        <div className="clear"> </div>
      </div>
      {/*---End--services----*/}
    </div>
    <div className="clear"> </div>
    <div className="boxs">
      <div className="wrap">
        <div className="box"></div>
        <div className="box center-box">
          <ul>
            <li>
              <a href="https:www.code-projects.org">Leave a Feedback</a>
            </li>
            <li>
              <a href="https:www.code-projects.org">Reviews and Ratings</a>
            </li>
            <li>
              <a href="https:www.code-projects.org">FAQs</a>
            </li>
            <li>
              <a href="https:www.code-projects.org">Packages</a>
            </li>
            <li>
              <a href="https:www.code-projects.org">
                Know about Moutaineering and trekking here
              </a>
            </li>
            <li>
              <a href="https:www.code-projects.org">www.code-projects.org</a>
            </li>
          </ul>
        </div>
        <div className="box"></div>
        <div className="clear"> </div>
      </div>
      {/*-start-box--*/}
    </div>
    {/*-start-copy-Right---*/}
    <div className="copy-tight">
      <p>
        © HOTEL,Nepal 2017 "THIS PROJECT IS BROUGHT TO YOU BY{" "}
        <a href="http://www.code-projects.org/">CODE-PROJECTS"</a>
      </p>
    </div>
    {/*-End-copy-Right---*/}
  </div>
  {/*-End-content---*/}
  {/*-End-Wrap-*/}
</>

    </div>
  )
}
