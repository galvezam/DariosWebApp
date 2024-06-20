import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box backgroundColor="#000000">
            <footer>
                <Flex
                    margin="0 auto"
                    px={12}
                    color="white"
                    justifyContent="center"
                    alignItems="center"
                    maxWidth="1024px"
                    height={20}
                >
                    <p>Dario's Painting ••• © 2022</p>
                </Flex>
            </footer>
        </Box>
    );
};
export default Footer;
