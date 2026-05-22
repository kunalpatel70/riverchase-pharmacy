"use client";
import Script from "next/script";

export default function ChamberBadge() {
    return (
        <>
            <div id="mni-membership-639150622645303471" />
            <Script
                src="https://hooverchamberal.chambermaster.com/Content/Script/Member.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    new (window as any).MNI.Widgets.Member(
                        "mni-membership-639150622645303471",
                        {
                            member: 5525,
                            styleTemplate:
                                "#@id{text-align:left;position:relative}" +
                                "#@id .mn-widget-member-name{font-weight:600;font-size:0.75rem}" +
                                "#@id .mn-widget-member-logo{max-width:100%;height:auto}",
                        }
                    ).create();
                }}
            />
        </>
    );
}
