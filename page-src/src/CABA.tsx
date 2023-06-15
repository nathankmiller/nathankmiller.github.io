// 
import React from "react";

import { Header, Section, BodyText, NewWindowLink } from "./Shared";

export function CABA(): React.ReactElement {
    return (
        <>
            <Header href="https://caba.app">Cars &amp; Bids Archive</Header>
            <Section>Summary</Section>
            <BodyText>
                Cars &amp; Bids Archive is a site I created from data scraped from <NewWindowLink href="https://carsandbids.com/">Cars and Bids</NewWindowLink>.
                It displays statistics and an easy way to browse auctions by make / model.
            </BodyText>
            <BodyText>
                I made this site because one day I was curious if <NewWindowLink href="https://carsandbids.com/">Cars and Bids</NewWindowLink> had a public API and when
                I found out that it didn't I reverse engineered what the live site was doing.
            </BodyText>

            <Section>Example</Section>
            <BodyText>
                Past <NewWindowLink href="https://www.caba.app/#/make/porsche/porsche_911">Porsche 911</NewWindowLink> auctions.
            </BodyText>
            <BodyText>
                <NewWindowLink href="https://www.caba.app/#/stats/expensive">Most expensive</NewWindowLink> auctions.
            </BodyText>
            <BodyText>
                Popular <NewWindowLink href="https://www.caba.app/#/stats/make-model">makes and models</NewWindowLink>.
            </BodyText>

            <Section>Technology</Section>
            <BodyText>
                Built using TypeScript, React, C# and ASP .NET.
            </BodyText>
            <BodyText>
                On the backend all data that drives the site is stored in Azure Table Storage. The scraper that I wrote stores its state data in Azure Blob Storage and runs in an Azure Function.
            </BodyText>
        </>
    );
}