import { Button, Stack } from "@chakra-ui/react";
import './Nav.css';
import React from "react";
import { Link, useNavigate, redirect } from "react-router-dom";

const sectionData = [
    {
        name: "Home",
        type: "page",
        url: "/",
        id: 1
    },
    {
        name: "About",
        type: "section",
        url: "about-section",
        id: 2
    },
    {
        name: "Menu",
        type: "page",
        url: "/menu",
        id: 3
    },
    {
        name: "Reservation",
        type: "page",
        url: "/reservation",
        id: 4
    },
    {
        name: "Order Online",
        type: "page",
        url: "url",
        id: 5
    },
    {
        name: "Log In",
        type: "page",
        url: "/login",
        id: 6
    },
];

const handleClick = (id, navigate) => () => {
    const element = document.getElementById(id);
    if (!element) {
        navigate(-1);
    }
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

const Nav = ({direction}) => {
    const navigate = useNavigate();
    return (
      <nav className='Nav'>
        <Stack
          direction={direction}
          gap={direction==="row"? "5" : "0"}
        >
            {sectionData.map((section) => {
                return section.type ==="page" ? (
                    <Link
                      className="button"
                      id={section.id}
                      key={section.id}
                      to={section.url}
                    >
                        <p>{section.name}</p>
                    </Link>
                ) : (
                    <Link
                      className="button"
                      id={section.id}
                      key={section.id}
                      onClick={handleClick(section.url, navigate)}
                    >
                        <p>{section.name}</p>
                    </Link>
                )
            })}
        </Stack>
      </nav>
    );
};

export default Nav;