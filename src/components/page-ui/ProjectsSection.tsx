import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'NFT marketplace | Charlie Unicorn AI',
        link: 'https://charliemarketplace.eu',
        thumbnail: '/projects/mern-memories.png'
    },
    {
        title: 'Stader Labs',
        link: 'https://www.staderlabs.com',
        thumbnail: '/projects/next-event.png'
    },
    {
        title: 'AppFlowy',
        link: 'https://github.com/AppFlowy-IO/AppFlowy',
        thumbnail: '/projects/devspace.png'
    },

    {
        title: 'Aave',
        link: 'https://github.com/aave/aave-v3-core',
        thumbnail: '/projects/google-clone.png'
    },
    {
        title: 'Invoice Ninja',
        link: 'https://github.com/invoiceninja/invoiceninja',
        thumbnail: '/projects/old-portfolio.png'
    },
    {
        title: 'Dresscode',
        link: '',
        thumbnail: '/projects/dresscode.png'
    },
    {
        title: 'Firefly III',
        link: 'https://github.com/firefly-iii/firefly-iii',
        thumbnail: '/projects/portfoliov2.png'
    },
    {
        title: 'Crater',
        link: 'https://github.com/crater-invoice-inc/crater',
        thumbnail: '/projects/music-app.png'
    }
];
