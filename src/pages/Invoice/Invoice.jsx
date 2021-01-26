import React from 'react'
import Navbar from '..//..//components/Navbar'
import BgColor from '..//common/BgColor'
import { HeadStyles, InvoiceStyles } from './Invoice'

const Invoice = () => {
    return (
        <div>
            <Navbar />
            <BgColor />  
            <div className="container mt-2">
            <div className="row">
            <div className="col col-sm-6 col-lg-3 col-md-6">
                 <HeadStyles>
                  <h1>Request Information</h1>  
                   <h3>Enter invoice info</h3>
                 </HeadStyles>
                 </div>
             </div>
             <InvoiceStyles>
             <div className="row">
                 <div className="col col-sm-6 mb-5">
                     <div className="form-wrapper">
                         <form action="">
                            <div className="form-row form-group">
                                <label htmlFor="customer-name">Customer/Company Name</label>
                                <input type="text" className="form-control" placeholder="Spleet Limited"/>
                           </div>
                           <div className="form-row form-group">
                            <div class="col">
                             <label htmlFor="email">Email Address</label>
                             <input type="text" className="form-control" placeholder="info@spleet.ng"/>
                            </div>
                            <div className="col">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="form-control" placeholder="081-6879-414"/>
                            </div>
                           </div>
                           <div className="form-row form-group">
                            <label htmlFor="home-address">Home/Building Address</label>
                            <input type="text" className="form-control" placeholder="51, Iwaya, Road, Iwaya"/>
                           </div>
                         </form>
                     </div>
                 </div>
                 <div className="col col-sm-6">
                     <div className="form-wrapper">
                         <form action="">
                           <div className="form-row form-group">
                               <div className="col">
                                <label htmlFor="issue-date">Issue Date</label><br/>
                                <input type="date" className="form-control" placeholder="6/10/2020"/>
                               </div> 
                               <div className="col">
                                <label htmlFor="date-due">Due date</label>
                                <input type="date" className="form-control" placeholder="08/12/20"/>
                               </div>
                           </div>
                           <div className="form-row form-group">
                               <div className="col">
                                <label htmlFor="invoice-number">Invoice Number</label>
                                <input type="text" className="form-control" placeholder="000000001"/>
                               </div>  
                               <div className="col">
                                <label className="mr-sm-2" htmlFor="Vat">V.A.T%</label>
                                <select className="custom-select mr-sm-2" name="vat" id="vat">
                                    <option value="7.5%" selected>7.5%</option>
                                    <option value="9.5%">9.5%</option>
                                    <option value="2.4%">2.4%</option>
                                    <option value="1.5%">1.5%</option>
                                    <option value="0.2%">0.2%</option>
                                </select>
                              </div>
                           </div>
                           <label htmlFor="service-description">Service Description</label>
                           <input type="text" className="form-control" placeholder="5 Bedroom Duplex post-con cleaning"/>
                          <div className="form-row form-group"> 
                            <div className="col">
                             <label htmlFor="service-amount">Service amount</label>
                              <input type="text" className="form-control"  placeholder="NGN 45, 000"/>
                           </div>
                           <div className="col">
                           <label htmlFor="total-amount">Total amount</label>
                           <input type="text" className="form-control" placeholder="NGN 45, 000"/>
                           </div>
                           </div>
                         </form>
                     </div>

                     {/* buttons */}
                      <div className="row mt-3">
                        <div className="col col-sm-6">
                         <button type="button" className="btn cancel-btn">Cancel</button>
                        </div>
                        <div className="col col-sm-6">
                         <button type="button">create invoice</button>
                        </div>
                      </div>
                 </div>
             </div>
             </InvoiceStyles>
            </div>
        </div>
    )
}

export default Invoice
