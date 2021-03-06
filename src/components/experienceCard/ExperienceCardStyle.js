export default (theme) => ({
    experienceCardRoot: {
        margin: '10px',
        minWidth: '300px',
    },
    experienceCard: {
        padding: '0.5rem 1rem',
        height: '100%',
        maxWidth: '350px',
        boxSizing: 'border-box',
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow:
            '2px 3px 8px -2px rgb(0 0 0 / 20%), 1px 1px 1px 0px rgb(0 0 0 / 14%), 1px 2px 2px 0px rgb(0 0 0 / 12%)',
        '&.hover': {
            width: '100%',
            transition: 'width 0.6s ease-in-out',
        },
    },
    experienceCardMediaRoot: {
        width: '80px',
        height: '80px',
        margin: 'auto',
        borderRadius: '50%',
        [theme.breakpoints.up('md')]: {
            width: '100px',
            height: '100px',
        },
    },
    experienceCardMedia: {
        height: '80px',
        width: '80px',
        backgroundPosition: 'center',
        [theme.breakpoints.up('md')]: {
            width: '100px',
            height: '100px',
        },
    },
    experienceCardContentRoot: {},
    experienceCardContent: {
        padding: '0 10px',
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            padding: '0 20px',
        },
    },
    companyName: {
        margin: 'auto',
        color: '#3f51b5',
        fontSize: '1rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    },
    role: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
    timeline: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
    details: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
})
