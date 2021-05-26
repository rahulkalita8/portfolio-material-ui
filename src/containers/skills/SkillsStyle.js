export default (theme) => ({
    skillsRoot: {
        maxHeight: '100vh',
        padding: '2rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
    },
    skillsRootLabel: {
        fontSize: '2rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    aboutRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        [theme.breakpoints.up('md')]: {
            flexWrap: 'nowrap',
        },
    },
    skillsBars: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    heading: {
        fontSize: '1rem',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    },
})
