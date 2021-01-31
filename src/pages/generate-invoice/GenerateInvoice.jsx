import React from 'react'
import Navbar from '..//..//components/Navbar'
import BgColor from '../common/BgColor'
import fichayaLogo from '..//..//components/assets/fichaya_logo.svg'
import { HeadStyles } from '../Invoice/Invoice.js'
import { GenerateInvoiceStyles } from './GenerateInvoice'
import { ButtonStyles } from '..//Invoice/Invoice.js';

const GenerateInvoice = () => {
    return (
        <div>
            <Navbar />
            <BgColor />
            <div className="container mt-5">
             <div className="row">
             <div className="col col-sm-6 col-lg-3 col-md-6">
                 <HeadStyles>
                   <h1>Generate Invoice</h1>  
                    <h3>preview your invoice</h3>
                   </HeadStyles>
                 </div>
              </div>
             </div>
            
            <GenerateInvoiceStyles>
             <div className="container">
                 <div className="row">
                     <div className="col-6">
                         <div className="wrapper  table-responsive-sm">
                          <table className="table table-light">
                              <thead>
                              <tr>
                                  <th><img src={fichayaLogo} alt="fichaya logo"/></th>
                                  <th>invoice</th>
                              </tr>
                              <tr>
                                <th>from</th>
                                <th>status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                    <td>fichaya<br/>
                                    <span>finance@fichaya.com</span> <br/>
                                    <span>+2348177141611</span>
                                    </td>
                                    <td className="text-unpaid">UNPAID <br/><br/>
                                    <span>CREATED</span> <br/>
                                    <span> October 8, 2020</span>
                                   
                                    </td>    
                                </tr>
                                <tr>
                                    <td>BILL TO</td>
                                    <td>DUE</td>
                                </tr>
                                <tr>
                                    <td>Spleet Nigeria Limited <br/>
                                    <span>info@spleet.ng</span> <br/>
                                    <span>51, Iwaya, Road, Onike Yaba <br/>
                                    <span>+2348140564969</span>
                                    </span>
                                    </td>
                                    <td>October 11, 2020<br/><br/>
                                    <span className="text-amount">AMOUNT</span> <br/>
                                    <span>NGN 48, 375</span>
                                    </td>  
                                </tr>
                                
                                <tr>
                                    <td>decription</td>
                                    <td>qty</td>
                                    <td>unit amount</td>
                                    <td>amount</td>
                                </tr>
                                 <tr>
                                     <td>5-Bedroom Duplex <br/>
                                     <span>post-con cleaning</span></td>
                                     <td>1</td>
                                     <td>N45,000</td>
                                     <td>N45,000</td>
                                 </tr>
                                 <tr>
                                     <td></td>
                                     <td><hr/></td>
                                     <td><hr/></td>
                                 </tr>
                                 <tr>
                                     <td></td>
                                     <td></td>
                                     <td>sub-total</td>
                                     <td>N45, 000</td>
                                 </tr>
                                 <tr>
                                     <td></td>
                                     <td></td>
                                     <td>vat(7.5%)</td>
                                     <td>N3, 375</td>
                                 </tr>
                                 <tr>
                                     <td></td>
                                     <td></td>
                                     <td>total</td>
                                     <td>N48, 375</td>
                                 </tr>
                              </tbody>
                          </table>
                         </div>
                         <ButtonStyles>
                         <div className="row mt-3">
                        <div className="col col-sm-6">
                         <button type="button" className="btn go-back-btn">go back</button>
                        </div>
                        <div className="col col-sm-6">
                         <button type="button">send to customer</button>
                        </div>
                      </div>
                    </ButtonStyles>
                     </div>
                 </div>
             </div>
             </GenerateInvoiceStyles>
        </div>
    )
}

export default GenerateInvoice
