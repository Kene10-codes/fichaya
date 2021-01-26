import styled from 'styled-components'


export const GenerateInvoiceStyles = styled.div `

.wrapper {
    width: 540px;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 10px;
    padding: 35px;
}

 table thead tr th {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.04em;    
    color: #606077;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 399.38px 0px;
    text-transform: uppercase;
 }

 table tbody tr td {
    font-family: Mukta;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #373737;
    flex: none;
    order: 0;
    flex-grow: 0;
 }

 table tbody tr td  span {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #373737;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
 }

 .text-unpaid {
    font-family: Mukta;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #F6431E;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
 }


 tbody tr:nth-child(2) td {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #606077;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
 }

 tbody tr:nth-child(3) td {
    font-family: Mukta;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #373737;
    flex: none;
    order: 0;
    flex-grow: 0;
 }

 .text-amount {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.04em;
    color: #606077;    
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 5px;
 }

 tbody tr:nth-child(4) td {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #606077;
    text-transform: uppercase;
 }

 tbody tr:nth-child(5) td {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 165.5%;
    color: #373737;
 }

 tbody tr:nth-child(7) td:nth-child(3),
 tbody tr:nth-child(8) td:nth-child(3),
 tbody tr:nth-child(9) td:nth-child(3) {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #606077;
    text-transform: uppercase;
 }

 tbody tr:nth-child(9) td:nth-child(4) {
    font-family: Mukta;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 165.5%;
    color: #01037C;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 109px 0px;
    border: none;
 }
 
 .go-back-btn {
   font-family: Mukta;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 27px;
   text-align: center;
   letter-spacing: 0.04em;
   color: #01037C;
   background: #E5E5E5;
   border: 1px solid #01037C !important;
   box-sizing: border-box;
   border-radius: 5px;
   width: 255px;
   height: 60px;
   text-transform: uppercase;
}

button {
   font-family: Mukta;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 27px;
   text-align: center;
   letter-spacing: 0.04em;
   color: #FFFFFF;
   width: 255px;
   height: 60px;
   background: #DEA000;
   border-radius: 5px;
   text-transform: uppercase;
   margin-bottom: 15px;
   border: none;
}

@media only screen and (max-width: 600px)  {
   .go-back-btn, button {
       font-size: 14px;
       width: 180px;
       height: 40px;
   }
 
`

