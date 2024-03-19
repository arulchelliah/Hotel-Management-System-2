import React from 'react'

export default function Gallery() {
  return (
    <div>
      <>
  {/*
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
*/}
  <title>Hotel Website | Gallery</title>
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
          <li>
            <a href="services.html">Services</a>
          </li>
          <li className="active">
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
      {/*--start-image-gallery---*/}
      <div className="gallerys">
        <h3>gallery</h3>
        <div className="gallery-grids">
          <div className="gallery-grid">
            <a href="images/slider1.jpg">
              <img src="images/slider1.jpg" alt="" />
            </a>
            <h4>Photo title</h4>
            <p>Description</p>
            <div className="gallery-button">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="gallery-grid grid2">
            <a href="images/slider3.jpg">
              <img src="images/slider3.jpg" alt="" />
            </a>
            <h4>Photo title</h4>
            <p>Description</p>
            <div className="gallery-button">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="gallery-grid">
            <a href="images/slider1.jpg">
              <img src="images/slider1.jpg" alt="" />
            </a>
            <h4>Photo title</h4>
            <p>Description</p>
            <div className="gallery-button">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="clear"> </div>
        </div>
        <div className="clear"> </div>
        <div className="gallery-grids">
          <div className="gallery-grid">
            <a href="images/slider3.jpg">
              <img src="images/slider1.jpg" alt="" />
            </a>
            <h4>Photo title</h4>
            <p> Description</p>
            <div className="gallery-button">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="gallery-grid grid2">
            <a href="images/slider3.jpg">
              <img src="images/slider3.jpg" alt="" />
            </a>
            <h4>Photo title</h4>
            <p>Description</p>
            <div className="gallery-button">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="gallery-grid">
            <a href="images/slider1.jpg">
              <img src="images/slider1.jpg" alt="" />
            </a>
            <h4>Photo title</h4>
            <p>Description</p>
            <div className="gallery-button">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          type="text/css"
          href="css/lightbox.css"
          media="screen"
        />
        <div className="clear"> </div>
        <div className="projects-bottom-paination">
          <ul>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
          </ul>
        </div>
      </div>
      {/*--start-image-gallery---*/}
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
