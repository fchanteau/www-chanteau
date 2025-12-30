'use client';

import { BriefcaseBusiness, Calendar1, MapPin, ChevronDown, ChevronUp } from "lucide-react";

type ExperienceItemProps = {
    active?: boolean;
    index: number;
    onClick: (index: number) => void
}

export function ExperienceItem({ active = false, onClick, index }: ExperienceItemProps) {
    const accordeonHeaderActiveClass = active ? "bg-emerald text-white" : "";
    const accordeonTitleActiveClass = active ? "text-white" : "text-emerald";

    const accordeonBodyActiveClass = active ? "max-h-[999px] py-4" : "max-h-0 py-0";

    const Chevron = active ? ChevronUp : ChevronDown;

    return (
        <div className={`accordeon-item border-2 border-emerald rounded-xl group`}>
            <div onClick={() => onClick(index)} role="button" className={`accordeon-header p-8 flex justify-between items-center ${accordeonHeaderActiveClass}
            hover:bg-emerald hover:text-white hover:cursor-pointer transition-colors duration-300`}>
                <div className="flex gap-8 items-center"> 
                    <BriefcaseBusiness />
                    <div className="accordeon-title">
                        <h3 className={`text-4xl font-bold ${accordeonTitleActiveClass} group-hover:text-white transition-colors duration-300`}>Consultant confirmé</h3>
                        <p className={`${accordeonTitleActiveClass} group-hover:text-white transition-colors duration-300`}>@ Talan</p>
                    </div>
                </div>
                <div className="accordeon-actions flex gap-16 items-center">
                    <ul className="space-y-1">
                        <li className="flex gap-2"><Calendar1 /> 2021 - Present</li>
                        <li className="flex gap-2"><MapPin /> Nantes, France</li>
                    </ul>
                    <Chevron />
                </div>
            </div>
            <div className={`accordeon-body px-8 overflow-hidden transition-all duration-300 ${accordeonBodyActiveClass}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque, dolore fugiat vero ut expedita libero in atque iure nihil suscipit soluta ipsa provident, quis veniam repellat similique sequi aliquam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque, dolore fugiat vero ut expedita libero in atque iure nihil suscipit soluta ipsa provident, quis veniam repellat similique sequi aliquam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque, dolore fugiat vero ut expedita libero in atque iure nihil suscipit soluta ipsa provident, quis veniam repellat similique sequi aliquam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque, dolore fugiat vero ut expedita libero in atque iure nihil suscipit soluta ipsa provident, quis veniam repellat similique sequi aliquam.</p>
            </div>
        </div>
    )
}