// import {Link as RouterLink} from "react-router-dom"
import React from "react";
import {Box, VStack, Image, Button} from "@chakra-ui/react";
import Img from "../images/call2actionimg.jpg";

const CompanyDescription = () => {
    return (
        <Box
            className="call-to-action"
            backgroundColor="#0C2D48"
            color="white"
            display="flex"
            alignItems="center"
            marginTop="140px"
            padding="60px"
            justifyContent="space-between"


        >
            <VStack spacing={4} maxWidth="50%">
                <h1 style={{ color:"white", fontSize: "36pt", margin: 0 }}>Dario's Painting</h1>
                <h2 style={{justifyContent: "left", fontSize: "20pt", margin: 0}}>Memphis, TN</h2>
                <p style={{ fontSize: "16pt", margin: 20 }}>
                    Your favorite place to dine! We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                {/* <RouterLink to="/contact"> */}
                    <Box
                        _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                    >
                        <Button
                            fontSize="17px"
                            padding="0.5em 2em"
                            border="transparent"
                            boxShadow="2px 2px 4px rgba(0,0,0,0.4)"
                            bg = "#FFFFFF"
                            color="black"
                            borderRadius="4px"
                            _hover={{
                                background: "linear-gradient(90deg, rgba(255, 206, 20, 1) 0%, rgba(255, 234, 0, 1) 100%)"
                                /*background: "linear-gradient(90deg, rgba(30,144,255,1) 0%, rgba(0,212,255,1) 100%)"*/
                            }}
                            _active={{
                                transform: "translate(0em, 0.2em)"
                            }}
                            mt="auto"

                        >
                            Schedule an Estimate!
                        </Button>
                    </Box>
                {/* </RouterLink>*/}
            </VStack>
            <Image
                src={Img}
                alt="Our Latest Job"
                boxSize="400px"
                width="500px"
                height = "350px"
                // objectFit="cover"
                borderRadius="10px"
            />
        </Box>
    );
};

export default CompanyDescription;