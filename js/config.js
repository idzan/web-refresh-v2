// Klaro Consent Manager
var klaroConfig = {
    elementID: 'klaro',
    klaroStorage: 'localStorage',
    cookieName: 'idzanWeb',
    cookieExpiresAfterDays: 120,
    privacyPolicy: '/privacy.html',
    default: true,
    mustConsent: false,

    translations: {
        en: {
            consentModal: {
                description:
                    'Here you can see and customize the information that we collect about you. Entries marked as "Required" are important to use on our web site to work properly.',
            },
            googleAnalytics: {
                description: 'Collecting surfing data and informations about visited pages. Every IP is anonymized.'
            },
            cloudflare: {
                description: 'Protection against DDoS attacks and our DNS provider (Required)',
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                styling: 'Styling',
            },
        },
    },

    apps: [
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                ['_ga', '_gat_gtag_UA_47485892_14', '_gid']
            ],
            required: false,
            optOut: false,
            onlyOnce: false,
        },
        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['styling'],
        },
        {
            name: 'cloudflare',
            title: 'Cloudflare',
            purposes: ['security'],
            cookies: ['_cfduid'],
            required: true,
        },
    ],
};
