'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Netguru',
        description: (
            <ul className="list-disc">
                <li>Architected a global Fintech SaaS platform, optimizing transaction processing for 500k+ monthly active users.</li>
                <li>
                    Developed and audited Smart Contracts (Solidity) for DeFi protocols, securing $10M+ in assets with 0 security breaches.
                </li>
                 <li>
                    Led the transition to a microservices architecture on AWS, reducing infrastructure costs by 30%.
                </li>
            </ul>
        ),
        badge: 'Senior Solutions Architect/Mar 2022 - Jan 2026'
    },
    {
        title: '10Clouds',
        description: (
            <ul className="list-disc">
                <li>
                    Engineered a cross-platform mobile banking app using Flutter, achieving a 4.9-star rating on the App Store.
                </li>
                <li>
                    Integrated real-time payment gateways and KYC/AML verification systems for European Fintech startups.
                </li>
                <li>Mentored a team of 5 developers, improving deployment frequency by 60% through automated CI/CD pipelines.</li>
            </ul>
        ),
        badge: 'Senior Software Developer/Jan 2019 - Feb 2022'
    },
    {
        title: 'Software Mind',
        description: (
            <ul className="list-disc">
                <li>Developed scalable Web MVPs for early-stage SaaS startups using the MERN stack (MongoDB, Express, React, Node).</li>
                <li>Collaborated on a blockchain-based supply chain tracking system, increasing data transparency for enterprise clients.</li>
            </ul>
        ),
        badge: 'Software Developer/Oct 2017 - Dec 2018'
    },
];
