import styled from 'styled-components'

export const RequestPageStyles = styled.div `

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

.card {
    border: 1px solid #EDEDED;
    border-radius: 10px;
    max-width: 100%;    
}

table tr th {
    font-family: Mukta;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 109.7%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #606077;
}

th span {
    font-family: Mukta;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #01037C;
}

tbody tr td {
    font-family: Mukta;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 109.7%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #606077;
}

tbody tr td span {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #01037C;
}

tbody .text-generated {
    font-family: Mukta;
    font-style: bold;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    text-transform: uppercase;
    color: #FF0000;
    background: #FF991F;
    opacity: 0.15;
    border-radius: 4px;    
    width: 170px;
    height: 23px;
    padding: 2px 5px;
}

button {
    font-family: Mukta;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 165.5%;
    color: #EDEDED; 
    background: #2E2E99;
    border-radius: 5px;
    width: 215px;
    height: 50px;
}

button:hover {
    color: #EDEDED; 
}

button span {
    background: #01037C;
    border-radius: 5px;
}

button span img {
    filter: brightness(0) invert(1);
    border-radius: 4px;
    transform: matrix(1, 0, 0, -1, 0, 0);
}

@media only screen and (max-width: 600px) {
    table tr th {
        font-size: 12px;      
    }

    th span {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }


    tbody tr td {
        font-size: 12px;
        line-height: 109.7%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #606077;
    }
    tbody tr:nth-child(1) td:nth-child(2) span , tbody tr:nth-child(1) td:nth-child(3) span  {
        font-size: 12px;
    } {
        font-size: 12px;
    }
    tbody tr:nth-child(2) td span  {
        font-size: 12px;
    }
    button {
        width: 85px;
        height: 70px;
    
    }
}

`