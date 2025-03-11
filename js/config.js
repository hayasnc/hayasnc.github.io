const CONFIG = {
    personal: {
        name: 'Hayas Ismail',
        title: 'Software Engineer | Consultant | Tech Leader',
        tagline: 'Building Scalable Applications | Exploring AI for Smarter Solutions',
        email: 'hayasnc@gmail.com',
        copyright: '© 2025 Hayas Ismail. All rights reserved.'
    },
    social: {
        github: {
            url: 'https://github.com/hayasnc',
            icon: 'fab fa-github',
            label: 'GitHub'
        },
        linkedin: {
            url: 'https://linkedin.com/hayasnc',
            icon: 'fab fa-linkedin',
            label: 'LinkedIn'
        },
        email: {
            url: 'mailto:hayasnc@gmail.com',
            icon: 'fas fa-envelope',
            label: 'Email'
        }
    },
    sections: {
        about: {
            title: 'About Me',
            content: 'I design and develop robust software solutions, focusing on building scalable backend systems and integrating AI to enhance functionality and efficiency. With a strong emphasis on security and performance, I create applications that deliver real business value. My approach combines problem-solving, innovation, and a commitment to crafting reliable, high-quality software that meets evolving technological and business needs.'        },
        technologies: {
            title: 'Technologies',
            intro: ''
        }
    }
};

// Prevent accidental modifications to the configuration
Object.freeze(CONFIG);
Object.freeze(CONFIG.personal);
Object.freeze(CONFIG.social);
Object.freeze(CONFIG.sections);

export default CONFIG;
