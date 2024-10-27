import React from "react";

const sectionData = [
    {
        name: "Home",
        url: "url",
        id: 1
    },
    {
        name: "About",
        url: "url",
        id: 2
    },
    {
        name: "Menu",
        url: "url",
        id: 3
    },
    {
        name: "Reservations",
        url: "url",
        id: 4
    },
    {
        name: "Order Online",
        url: "url",
        id: 5
    },
    {
        name: "Log In",
        url: "url",
        id: 6
    },
];

const Nav = (props) => {
    return (
      <nav>
        <ul>
            {sectionData.map((section) => {
                return (
                  <li>
                    <a role="button" href={section.url} id={section.id}>{section.name}</a>
                  </li>)
            })}
        </ul>
      </nav>
    );
};

export default Nav;