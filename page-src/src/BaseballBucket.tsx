import React from "react";

import { Header, Section, BodyText, NewWindowLink } from "./Shared";

export function BaseballBucket(): React.ReactElement {
    return (
        <>
            <Header href="https://baseball-bucket.com">Baseball Bucket</Header>

            <Section>Summary</Section>
            <BodyText>
                This project uses the semi-public Major League Baseball GameDay API to have a live scoreboard on days there are games as well as past box scores.
            </BodyText>
            <BodyText>
                The goal of this project was to make it easy to check scores on your phone without having to deal with a media heavy site and to easily get to a game's radio / TV stream.
            </BodyText>

            <Section>Example</Section>
            <BodyText>
                Here is a <NewWindowLink href="https://www.baseball-bucket.com/08312021/632657">link to a game</NewWindowLink> that shows what the page looks like on a game day.
            </BodyText>

            <Section>Technology</Section>
            <BodyText>
                Built using TypeScript, React, C# and ASP .NET.
            </BodyText>
            <BodyText>
                On the backend historical game data is stored in Azure Table Storage and an Azure Function is run periodically to populate live game data.
            </BodyText>
        </>
    );
}