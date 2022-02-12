import React from "react";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export function NewWindowLink(props: React.PropsWithChildren<{ href: string }>): React.ReactElement {
    return <Link href={props.href} target="_blank" underline="none">{props.children}</Link>;
}

export function Header(props: React.PropsWithChildren<{ href: string }>): React.ReactElement {
    return (
        <Typography variant="h4" component="div">
            <NewWindowLink href={props.href}>{props.children}</NewWindowLink>
        </Typography>
    )
}

export function Section(props: React.PropsWithChildren<any>): React.ReactElement {
    return <Typography variant="h6"component="div">{props.children}</Typography>;
}

export function BodyText(props: React.PropsWithChildren<any>): React.ReactElement {
    return <Typography variant="body1" gutterBottom>{props.children}</Typography>
}