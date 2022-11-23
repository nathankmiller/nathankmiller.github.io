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

            <Section>Examples</Section>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: "1em" }}>
                    <NewWindowLink href="https://quilt.farm/q/AQADAOY_Xl9lABAQAP8AAAD_AgA">
                        <img src="/images/quilt-farm/AQADAOY_Xl9lABAQAP8AAAD_AgA.png" alt="quilt"></img>
                    </NewWindowLink>
                </div>

                <div style={{ marginRight: "1em" }}>
                    <NewWindowLink href="https://quilt.farm/q/AQADAHq4fiZVAAAAAP8AAAD_AgA">
                        <img src="/images/quilt-farm/AQADAHq4fiZVAAAAAP8AAAD_AgA.png" alt="quilt"></img>
                    </NewWindowLink>
                </div>

                <NewWindowLink href="https://quilt.farm/q/AQACAFusKkFlAAAAAgIAAAD_AgA">
                    <img src="/images/quilt-farm/AQACAFusKkFlAAAAAgIAAAD_AgA.png" alt="quilt"></img>
                </NewWindowLink>
            </div>

            <Section>Technology</Section>
            <BodyText>
                Built using TypeScript, React, C# and ASP .NET.
            </BodyText>
        </>
    );
}