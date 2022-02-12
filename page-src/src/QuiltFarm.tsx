import React from "react";

import { Header, Section, BodyText, NewWindowLink } from "./Shared";

export function QuiltFarm(): React.ReactElement {
    return (
        <>
            <Header href="https://quilt.farm">Quilt Farm</Header>
            <Section>Summary</Section>
            <BodyText>
                Quilt Farm is a website that procedurally generates random quilts.
            </BodyText>

            <BodyText>
                I saw a <NewWindowLink href="https://thequiltshow.com/quiltipedia/what-is-a-barn-quilt">barn quilt</NewWindowLink> one day while out and though it would be fun to randomly generate them.
                I used <NewWindowLink href="https://www.quilterscache.com/">Quilter's Cache</NewWindowLink> as a source for quilt blocks and using a 2D map editor
                called <NewWindowLink href="https://www.mapeditor.org/">Tiled</NewWindowLink> re-created many of the blocks for use on my site.
            </BodyText>

            <BodyText>
                In addition to the website itself I also created a <NewWindowLink href="https://twitter.com/quilt_farm">Twitter bot</NewWindowLink> that tweets a random quilt each morning.
            </BodyText>

            <Section>Example</Section>
            <BodyText>
                <NewWindowLink href="https://quilt.farm/q/AQADAOY_Xl9lABAQAP8AAAD_AgA">
                    <img src="https://quiltfarm.azureedge.net/images/6zpzt4m0ETYznUnRZ8t7973mpTI2/c70fbd69-9b40-47ab-86d7-691205ca5578.png" alt="quilt"></img>
                </NewWindowLink>

                <NewWindowLink href="https://quilt.farm/q/AQADAHq4fiZVAAAAAP8AAAD_AgA">
                    <img src="https://quiltfarm.azureedge.net/images/6zpzt4m0ETYznUnRZ8t7973mpTI2/29b88e5e-d993-4f19-9d74-a5d0d5353549.png" alt="quilt"></img>
                </NewWindowLink>

                <NewWindowLink href="https://quilt.farm/q/AQACAFusKkFlAAAAAgIAAAD_AgA">
                    <img src="https://quiltfarm.azureedge.net/images/6zpzt4m0ETYznUnRZ8t7973mpTI2/fffaa282-b1ce-417b-b29c-524506a93c0c.png" alt="quilt"></img>
                </NewWindowLink>
            </BodyText>

            <Section>Technology</Section>
            <BodyText>
                Built using TypeScript, React, C# and ASP .NET.
            </BodyText>
            <BodyText>
                On the backend the source quilt blocks are stored in a single file in Azure Blob Storage. Saved quilt images are stored in Blob Storage and served via a CDN.
            </BodyText>
        </>
    );
}