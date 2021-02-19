import React, { PureComponent } from 'react';
import {MailFilled, PushpinFilled, PhoneFilled } from '@ant-design/icons';

export default class Header extends PureComponent {
    render() {
        return (
            <div className="header__container">
                <div className="header__logo-wrap">
                    <img src="./assets/wsa.svg" className="header__logo" alt="logo"/>
                </div>
                <div className="header__email">
                    <MailFilled />
                    <div>wsa@wsa.com</div>
                </div>
                <div className="header__location">
                    <PushpinFilled />
                    <div>BBSR, Odisha</div>
                </div>
                <div className="header__phone">
                    <PhoneFilled />
                    <div>972-347-5584</div>
                </div>
            </div>
        )
    }
}