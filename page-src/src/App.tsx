import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { CABA } from "./CABA";
import { QuiltFarm} from "./QuiltFarm";
import { BaseballBucket} from "./BaseballBucket";

export function App(): React.ReactElement {
    return (
        <Container>
            <Typography variant="h3" component="div">Nate's Projects</Typography>
            <Typography variant="caption" display="block">Contact: natescode at fastmail.com</Typography>

            <Box mb={1} />
            <QuiltFarm />

            <Box mb={4} />
            <CABA />

            <Box mb={4} />
            <BaseballBucket />
        </Container>
    )
}
