export default (theme) => ({
    accomplishmentsRoot: {
        padding: '2rem',
        backgroundImage:
            'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/assets/images/accomplishment-background.jpg)',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            minHeight: '80vh',
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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    accomplishmentsListItem: {
        width: '100%',
    },
    projectBorder: {
        width: '100%',
        borderTop: '2px solid rgba(211, 211, 211, 0.5)',
    },
})
