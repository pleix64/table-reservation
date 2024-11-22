import { Stack } from "@chakra-ui/react";
import './Nav.css';
import React from "react";
import { Link } from "react-router-dom";

const sectionData = [
    {
        name: "Home",
        url: "/",
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
        url: "/reservation",
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

const Nav = ({direction}) => {
    return (
      <nav className='Nav'>
        <Stack
          direction={direction}
          gap={direction==="row"? "5" : "0"}
        >
            {sectionData.map((section) => {
                return (
                    <Link className="button" to={section.url} id={section.id} key={section.id}><p>{section.name}</p></Link>
                )
            })}
        </Stack>
      </nav>
    );
};

export default Nav;