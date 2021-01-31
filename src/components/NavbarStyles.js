import styled from 'styled-components'

export const NavbarStyles  = styled.div`

.navbar {
    background: #FFFFFF;
}

.nav-link {
    font-family: Mukta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #01037C;
    text-transform: uppercase;
}

.nav-link:hover {
    border-bottom: 2px solid #01037C;
}

.user-link, .nav-profile {
    background: #2E2E99;
    border-radius: 4px;
}
.user-link img {
    filter: brightness(0) invert(1);
}
.nav-profile img{
    filter: brightness(0) invert(1);
}

`


