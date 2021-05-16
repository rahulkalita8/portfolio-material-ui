export default (theme) => ({
    experienceRoot: {
        padding: '2rem',
        backgroundImage:
            'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/assets/images/about-background3.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            minHeight: '100vh',
        },
    },
    experienceRootLabel: {
        fontSize: '2rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    experienceLists: {
        // display: 'grid',
        // gridAutoRows: '1fr',
        // gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));',
        // gridGap: '1rem 1rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    missingOppositeContent: {
        '&:before': {
            display: 'none',
        },
    },
})
