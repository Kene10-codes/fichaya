import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

const RequestPage = React.lazy(() => import('./pages/Request/Request.jsx'))
const InvoicePage = React.lazy(() => import('./pages/Invoice/Invoice.jsx'))
const GenerateInvoice = React.lazy(() => import('./pages/generate-invoice/GenerateInvoice.jsx')) 


const App = () => {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' >
          <RequestPage/>
        </Route>
        <Route path='/invoice'>
          <InvoicePage/>
        </Route>
        <Route path='/generate-invoice'>
          <GenerateInvoice />
        </Route>
        <Route path='/generate-invoice'>
          <GenerateInvoice />
        </Route>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
