import React from 'react'
import Navbar from '../../components/Navbar'
import BgColor from '../common/BgColor'
import caretDown from '..//..//components/assets/caret-down.svg'
import { RequestPageStyles } from './Request'


const Request = () => {
    return (
        <div>
           <Navbar />  
           <BgColor />
           <RequestPageStyles>
            <div className="container mt-5">
               <div className="row">
                 <div className="col col-sm-6 col-lg-3 col-md-6">
                 <h1>Request Information</h1>
                 </div>
              </div>

               <div className="row">
                   <div className="col col-sm-8">   
                       <div className="card">
                        <div className="card-body">
                        <table className="table table-light">
                        <thead>
                            <tr>
                            <th scope="col">Request Type <br/>
                             <span>post-con</span>
                            </th>
                            <th scope="col">Customer Name <br/>
                             <span>peter-abu-ekpesie</span>
                            </th>
                            <th scope="col">Cleaning Date <br />
                             <span>09-10-2019</span>
                             </th>
                            </tr>
                        </thead>
                          <tbody>
                            <tr>
                              <td>invoice status <br /> 
                              <div className="text-generated">ungenerated</div>
                              </td>
                              <td>request date <br/>
                              <span>06-10-2016</span>
                               </td>
                              <td>request time <br />
                              <span>8:00am</span>
                              </td>
                            </tr>
                            <tr>
                              <td>location <br/>
                              <span>8, yovi, street, <br/> iwaya, onike, iyaba</span>
                              </td>
                              <td>house-type <br/>
                              <span>5-bedroom duplex</span>
                              </td>
                            </tr>
                            <tr>
                              <td><hr/></td>
                              <td><hr/></td>
                              <td><hr/></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>  
                              <td><button className="btn" type="button" data-toggle="modal" data-target="#actionModal">Actions <span><img src={caretDown} alt=""/></span></button></td>
                              <div className="modal fade" id="actionModal" tabindex="-1" role="dialog">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <p>Contact customer</p>
                                    <hr/>
                                    <p>Generate invoice</p>
                                    <hr/>
                                    <p>Reject request</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </tr>
                          </tbody>
                        </table>
                       </div>
                      </div>
                   </div>
                </div>
               </div>
           </RequestPageStyles>
        </div>
    )
}

export default Request
