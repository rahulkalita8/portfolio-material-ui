export default (theme) => ({
    accomplishmentsRoot: {
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
    accomplishmentsRootLabel: {
        fontSize: '2rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    heading: {
        fontSize: '1rem',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    },
    accordion: {
        margin: '1rem 0',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    accordionSummary: {
        display: 'flex',
        flexDirection: 'column',
    },
    accomplishmentsLists: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },

    projectBorder: {
        width: '100%',
        borderTop: '2px solid rgba(211, 211, 211, 0.5)',
    },
})