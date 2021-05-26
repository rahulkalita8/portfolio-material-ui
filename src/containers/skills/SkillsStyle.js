export default (theme) => ({
    skillsRoot: {
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
    skillsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            flexWrap: 'nowrap',
        },
    },
    skillsBars: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    skillName: {
        width: '4rem',
        fontSize: '0.8rem',
        fontFamily: 'Monteserrat',
        color: '#ffffff',
        background: '#4da6ff',
        borderRadius: '0.5rem 0 0 0.5rem',
        padding: '0.4rem',
        textAlign: 'center',
        margin: '0.8rem 0rem',
        [theme.breakpoints.up('md')]: {
            width: '5rem',
            fontSize: '1rem',
            padding: '0.5rem',
            margin: '1rem 0rem',
        },
    },
    skillBarContainer: {
        width: '60vw',
        background: '#cccccc',
        borderRadius: '0 0.5rem 0.5rem 0',
        textAlign: 'center',
        margin: '0.8rem 0rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
            margin: '1rem 0rem',
        },
    },
    skillBarPercent: {
        background: '#b3e6ff',
        borderRadius: '0',
        padding: '0.4rem 0',
        textAlign: 'center',
        fontSize: '0.8rem',
        fontFamily: 'Monteserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
            padding: '0.5rem',
        },
    },
})
