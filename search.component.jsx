import "./search.component.css";
import dubai from "../../src/images/dubai.jpeg"
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "reactjs-popup";


export function Searchcomponent() {
   const [isPopupVisible, setPopupVisible] = useState(false);

   const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
   };


   return (
      <section >
         <header style={{ position: 'fixed', zIndex: 1000 }}>
         <div className="logo-nav">
            <div className="bag">

               <select className="select">
                  <option>English</option>
                  <option>Telugu</option>
                  <option>Hindi</option>
               </select>

               <select className="select">
                  <option>INR</option>
                  <option>USD</option>
                  <option>UAE</option>
               </select>
               <div className="redim">
                  
                  <h7>My Wishlist</h7>
                  <h7>Location</h7>
                  <h7>Track Order</h7>
               </div>
            </div>

            <div className="logo-nav-child">
               <img src={dubai} className="dubai-img"></img>

               <div className="bottle">
                  <input className="bottle" type="search" placeholder="Search" aria-label="Search"></input></div>
               <input type="button" value="search" className="brand "></input>
               <div className="bottle-li">
                  <h5>Compare</h5>
                  <h5 className="bottle-lii">Cart</h5>
                  <div className='menu-sii' onClick={togglePopup}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                     </svg>
                     {isPopupVisible && (
                        <div className="menu-si">
                           <div className='sub-menu'>
                              <a href=""><div className="file">Signup </div></a>
                          

                           <div className='sub-mi'>
                              <a href=""><div className="file">Login </div></a>
                              </div>
                           </div>

                        </div>

                     )
                     }
                  </div>
               </div>


            </div>
            <div className="service-items">
            <ul>
               <li>ACService</li>
               <li>Electrician</li>
               <li>Education</li>
               <li>Hotels</li>
               <li>Plumber</li>
               <li>Restaurant</li>
               <li>Tutor</li>
               <Popup
            trigger={
              <div className="rrr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>{" "}
                More
              </div>
            }
          >
            {(close) => (
              <div className="popup-container">
                <div className="popup-content">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input><br></br> */}
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="search-bar"
               //      value={searchTerm}
               //  onChange={(e) => handleSearch(e.target.value)}
                  />
                  <div className="popular-services">
                    <ul>
                     {/* {filteredServices.map((service, index) => (
                    <li key={index}>{service}</li> 
))} */}

                      <li>AC&nbsp;Services</li>
                  <li>Beauty</li>
                      <li>Car&nbsp;Rentals</li>
                      <li>Catering&nbsp;Service</li>
                    <li>Dentists</li>
                      {/* <li>Dermatologists</li> */}
                    
                    </ul>
                  </div><br></br>
                  <div  className="popular-services">
                     <ul>
                    
                     <li>Electricians</li>
                            <li>Fan&nbsp;Services</li>
                            <li>Furniture&nbsp;Service</li>
                            <li>Horoscope</li>
                          <li> Hospitals</li>
                          {/* <li>House&nbsp;Keeping</li> */}
                     </ul>
                  </div><br></br>
                  <div  className="popular-services">
                     <ul>
                      <li>Interior&nbsp;Designers </li>
                            <li>Jewellery</li>
                          <li> Lawyers</li>
                          <li>Transporters</li>
                          <li>Photographers</li>
                          {/* <li>Printing&nbsp;Service</li> */}
                          
                     </ul>
                  </div><br></br>
                  <div  className="popular-services">
                     <ul>
                     <li> Placement&nbsp;Service</li>
                            <li>Pest&nbsp;Control</li>
                            <li>Packers&nbsp;&&nbsp;Movers  </li>
                            <li>Beauty</li>
                          <li> Bike</li>
                     </ul>
                  </div><br></br>
               
                </div>
              </div>
            )}
          </Popup>
            </ul>
         </div>
         </div>
         
         </header>
      </section>
   )
}

