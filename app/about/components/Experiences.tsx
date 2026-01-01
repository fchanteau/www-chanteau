'use client';
import { useState } from "react";
import { ExperienceItem } from "./ExperienceItem";

export function Experiences() {
    const [indexActive, setIndexActive] = useState(0);

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-6xl font-bold text-center">My Experiences</h2>
            <div className="flex flex-col gap-4">
                {[0,1,2,3].map((_, index) => (
                    <ExperienceItem key={index} onClick={setIndexActive} index={index} active={index === indexActive} />))}
            </div>
        </div>
    )
}