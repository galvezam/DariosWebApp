import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
        title: "Interior Painting",
        description:
            "Sample description",
        getImageSrc: () => require("/Users/matt.galvez/summer/DariosWebApplication/DariosWebApp/src/main/resources/static/dariospainting/src/images/interior_painting1.jpeg"),
    },
    {
        title: "Exterior Painting",
        description:
            "Sample description2",
        getImageSrc: () => require("../images/exterior_painting1.jpg"),
    },
    {
        title: "Cabinets",
        description:
            "Sample description3",
        getImageSrc: () => require("../images/cabinets1.jpg"),
    },
    {
        title: "Siding",
        description:
            "Log books and essays read in a competitive, but unambitious manner",
        getImageSrc: () => require("../images/siding1.jpg"),
    },
    {
        title: "Door Refurbishing",
        description:
            "Log books and essays read in a competitive, but unambitious manner",
        getImageSrc: () => require("../images/door1.jpg"),
    },
];

const ProjectsSection = () => {
    return (
        <FullScreenSection
            // dark green color: backgroundColor="#14532d"
            // cyan color: "#008080"
            // darker cyan: "#145b5f"
            backgroundColor="#B1D4E0"
            isDarkBackground
            p={10}
            // alignItems="flex-start"
            spacing={16}

        >
            <Heading as="h1" id="projects-section">
                Featured Projects
            </Heading>
            <Box
                display="grid"

                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={18}
            >
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                        link="https://www.github.com/galvezam"
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
};

export default ProjectsSection;
