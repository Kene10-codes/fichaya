import styled from 'styled-components'

export const HeadStyles = styled.div `

h1 {
    background: #2E2E99;
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.87);
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
    padding: 4px;
}

h3 {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: 0.04em;
    color: #606077;
}
`


export const InvoiceStyles = styled.div`

.form-wrapper {
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 10px;
    padding: 35px;
    width: 100%;
    height: 488px;
}

label {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #373737;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
}

input, select {
    border: 1px solid #DEA000;
    box-sizing: border-box;
    border-radius: 5px;
    height: 60px;
}

::placeholder {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 165.5%;
    color: #606077;
}
::-webkit-input-placeholder {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 165.5%;
    color: #606077;
}

::-moz-placeholder {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 165.5%;
    color: #606077;
  }

  @media only screen and (max-width: 600px) {
    .form-wrapper {
        height: 100%;
    }


  }

`

export const ButtonStyles = styled.div`
    .cancel-btn {
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
        border: none;
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
        border: none;
        background: #DEA000;
        border-radius: 5px;
        text-transform: uppercase;
        margin-bottom: 15px;
    }

    @media only screen and (max-width: 600px)  {
        .cancel-btn, button {
            font-size: 14px;
            width: 100%;
            height: 40px;
        }
    }
`