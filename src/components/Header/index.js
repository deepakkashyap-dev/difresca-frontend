import React, { useState, useRef } from "react";
import HeadLine from './headLine';
import MainHeader from "./MainHeader";
import { redirect } from 'react-router-dom';
// import HeaderSearch from "./MainHeader/headerSearch";
import { useSelector, useDispatch } from 'react-redux';
import Auth from "../Auth";

const Header = () => {
    const { showLoginPopup } = useSelector((state) => state.authReducer);
    console.log(showLoginPopup,"showLoginPopup")
    const redirectHomePage = () => {
        redirect("/");
    };
    return (
        <header className="header">
            <div className="top-btn" id="scroll-to-top" >
                <button className="top-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                    <i className="fal fa-angle-up" />
                </button>
            </div>
            {/* <HeadLine /> */}
            {
                showLoginPopup && <Auth /> // to render login signup pages
            }
            <React.Fragment>
                {/* <Badge notificationCount={100}> */}
                {/* Header which have search box and all -- row-1 */}
                <MainHeader
                    goToHome={redirectHomePage}
                // setState={this.setState}
                // notificationCount={this.state.notificationCount}
                // messageMenu={this.state.messageMenu}
                // setMessageMenu={this.messageMenuPopup}
                // setValue={this.resetValueState}
                // logout={this.logout}
                // registerOpen={this.registerOpen}
                // cartLength={Object.keys(this.props.cartData).length}
                // userProfileBanner={this.props.userProfileBanner}
                // browser_location={this.props.browser_location}
                // openLocationPopup={this.openLocationPopup}
                // logo={this.props.siteLogo}
                />

                {/* </Badge> */}
                {/* <HeaderCategory
                    userData={this.props.userData.userdata}
                    messageMenu={this.state.messageMenu}
                    closeMessageMenu={this.closeMessageMenu}
                    setBrandState={(data) => this.setState({ isBrandOpen: data })}
                    isBrandOpen={this.state.isBrandOpen}
                    activeMenu={activeMenu}
                    brands={this.props.brands}
                    queryString={queryString}
                    categories={this.state.categories}
                    showLimitedCategory={this.showLimitedCategory}
                    showOtherCategory={this.showOtherCategory}
                    setCategory={(data) => this.setState({ categories: data })}
                    more={this.state.more}
                    setMore={(data) => this.setState({ more: data })}
                    boxClass={boxClass}
                    toggle={this.toggle}
                    openLocationPopup={this.openLocationPopup}
                // desableScrollBar={this.desableScrollBar}\
                /> */}
            </React.Fragment>

        </header >
    );
};
export default Header;