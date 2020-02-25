import React from 'react';



function Footer() {
     return (
          <div class="pt-4 my-md-5 pt-md-5 border-top">
               <div class="row">
                    <div class="col-12 col-md">
                         <img class="mb-2" src="C:\Users\eacevedo\Documents\React\practica\src\images\bootstrap-solid.svg" alt="" width="24" height="24">
                              <small class="d-block mb-3 text-muted">&copy; 2017-2019</small>
                              <div className="col-6 col-md">
                                   <h5>Features</h5>
                                   <ul className="list-unstyled text-small">
                                        <li><a className="text-muted" href="#">Cool stuff</a></li>
                                        <li><a className="text-muted" href="#">Random feature</a></li>
                                        <li><a className="text-muted" href="#">Team feature</a></li>
                                        <li><a className="text-muted" href="#">Stuff for developers</a></li>
                                        <li><a className="text-muted" href="#">Another one</a></li>
                                        <li><a className="text-muted" href="#">Last time</a></li>
                                   </ul>
                              </div>
                              <div className="col-6 col-md">
                                   <h5>Resources</h5>
                                   <ul className="list-unstyled text-small">
                                        <li><a className="text-muted" href="#">Resource</a></li>
                                        <li><a className="text-muted" href="#">Resource name</a></li>
                                        <li><a className="text-muted" href="#">Another resource</a></li>
                                        <li><a className="text-muted" href="#">Final resource</a></li>
                                   </ul>
                              </div>
                              <div className="col-6 col-md">
                                   <h5>About</h5>
                                   <ul className="list-unstyled text-small">
                                        <li><a className="text-muted" href="#">Team</a></li>
                                        <li><a className="text-muted" href="#">Locations</a></li>
                                        <li><a className="text-muted" href="#">Privacy</a></li>
                                        <li><a className="text-muted" href="#">Terms</a></li>
                                   </ul>
                              </div>
                         </img>
                    </div>

               </div>
          </div>


     )
}

export default Footer;