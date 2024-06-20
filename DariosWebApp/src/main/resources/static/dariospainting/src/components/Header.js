import React, { useEffect, useState, useRef }  from "react";
import Logo from "/Users/matt.galvez/summer/DariosWebApplication/DariosWebApp/src/main/resources/static/dariospainting/src/images/sherwin_williams.jpg";
import { Box, HStack, Link, Image} from "@chakra-ui/react";

const socials = [
    {
        name: "Home",
        url: ""
    },
    {
        name: "Our Projects",
        url: ""
    },
    {
        name: "License",
        url: ""
    },
    {
        name: "About",
        url: ""
    },
    {
        name: "Login",
        url: ""
    },
    {
        name: "Schedule Estimate",
        url: ""
    },
]

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(prevScrollPos > currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);


    return (
        <Box
            position="fixed"
            top={isVisible ? 0 : -200}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="top"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            // find dark blue color
            // backgroundColor="#18181b"
            backgroundColor="#FFFFFF"
            zIndex={1000}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"

                >
                    <nav>
                        <Image
                            src={Logo}
                            // objectFit="cover"
                            width="200px"
                            height="100px"
                        />

                    </nav>
                    <nav  >
                        <HStack fontSize={14} spacing={14}>
                            {socials.map((social, index) => (
                                <Link key={index} href={social.url} color="black" textDecoration="none" isExternal
                                      _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.1s" }}>
                                    {social.name}
                                </Link>
                            ))}
                        </HStack>
                    </nav>

                </HStack>
            </Box>

        </Box>

        )

};

export default Header;
