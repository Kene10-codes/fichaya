const validate = (values) => {
    const errors = {};

  
  /*  VALIDATE COMPANY NAME */
    if (!values.companyName) {
      errors.companyName = "Company Name is required";
    } else if (values.companyName.length < 1) {
      errors.companyName = "Invalid Company Name";
    } else {
      errors.companyName = "Awesome Company Name ";
    }
  
  /* VALIDATE EMAIL */
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
  /* VALIDATE PHONE */
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (values.phone.length <= 6) {
      errors.phone = "Phone Number is invalid";
    } else {
      errors.phone = "Phone Number is ok ";
    }


  /* VALIDATE ADDRESS */
  if (!values.address) {
    errors.address = "Address is required";
  } else if (values.address.length < 1) {
    errors.address = "Address length must be greater than one letter";
  } else {
    errors.address = "Address is ok";
  }



  /* VALIDATE ISSUE DATE */
  if (!values.issueDate) {
    errors.issueDate = "Date is required";
  } else if (values.issueDate.length < 1) {
    errors.issueDate = "Date is invalid";
  } else {
    errors.issueDate = "Date is ok";
  }

   /* VALIDATE DUE DATE */
   if (!values.dueDate) {
    errors.dueDate = "Date is required";
  } else if (values.dueDate.length < 1) {
    errors.dueDate = "Date is invalid";
  } else {
    errors.dueDate = "Date is ok";
  }

    /*  VALIDATE  INVOICE NUMBER */
    if (!values.invoiceNumber) {
        errors.invoiceNumber = "Invoice Number is required";
      } else if (values.invoiceNumber.length < 1) {
        errors.invoiceNumber = "Invoice Number is not valid";
      } else {
        errors.companyName = "Awesome Invoice Number ";
      }

      /*  VALIDATE VAT */
    if (!values.vat) {
        errors.vat = "VAT is required";
      } else if (values.vat.length < 1) {
        errors.vat = "VAT is not valid";
      } else {
        errors.vat = "vat is ok ";
      }

       /*  VALIDATE Service Description */
    if (!values.serviceDescription) {
        errors.serviceDescription = " service Description is required";
      } else if (values.serviceDescription.length === 0) {
        errors.serviceDescription = "service Description cannot be empty ";
      } else {
        errors.serviceDescription = "Awesome service Description";
      }


       /*  VALIDATE Service Amount*/
    if (!values.serviceAmount) {
        errors.serviceAmount = "Service Amount is required";
      } else if (values.serviceAmount.length === 0) {
        errors.serviceAmount = "Service Amount cannot be empty ";
      } else {
        errors.serviceAmount = "Awesome Service Amount";
      }

          /*  VALIDATE Total Amount*/
    if (!values.totalAmount) {
        errors.totalAmount = "Total Amount is required";
      } else if (values.totalAmount.length === 0) {
        errors.totalAmount = "Total Amount cannot be empty ";
      } else {
        errors.totalAmount = "Awesome Total Amount";
      }   
    return errors;
  };
  
  export default validate;