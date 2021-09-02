import React from "react";
import "./navbar.css";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
import user_img from "../../assets/images/praw.jfif";
import user_menu from "../../assets/jsonData/user-menus.json";

const user_now = {
    display_name: "Prawito",
    image: user_img,
};

const renderUser = (user) => (
    <div className="navbar_user">
        <div className="navbar_user-img">
            <img src={user.image} alt="" />
        </div>
        <div className="navbar_user-name">{user.display_name.slice(0, 7)}</div>
    </div>
);

const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
);

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_search">
                <input type="text" placeholder="Search.." />
                <i className="bx bx-search"></i>
            </div>
            <div className="navbar_right">
                <div className="navbar_right-item">
                    <Dropdown
                        customToggle={() => renderUser(user_now)}
                        contentData={user_menu}
                        renderItems={(item, index) =>
                            renderUserMenu(item, index)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
