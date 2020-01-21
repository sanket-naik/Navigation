import React from 'react'
import { withRouter } from "react-router";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './Navigation.css'

function Navigation(props) {
    return (
    <div>
    <div className="Nav">Logo here</div>
    <SideNav 
        style={{backgroundColor:"#00bfda", marginTop:"60px"}}
        onSelect={(selected) => {
            switch (selected) {
                case "home":
                    props.history.push("/")
                    break;
                case "add-member":
                    props.history.push("/add-member")
                    break;
            
                default:
                    break;
            }
        }}
    >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home Page
            </NavText>
        </NavItem>
        <NavItem eventKey="add-member">
            <NavIcon>
                <i className="fa fa-fw  fa-user-plus" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Add Member
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
</div>
    )
}

export default withRouter(Navigation)
