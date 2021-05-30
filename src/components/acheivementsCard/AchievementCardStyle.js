export default (theme) => ({
    achievementCardRoot: {
        margin: '10px',
        minWidth: '300px',
    },
    achievementCard: {
        padding: '0.5rem 1rem',
        height: '100%',
        boxSizing: 'border-box',
        boxShadow:
            '2px 3px 8px -2px rgb(0 0 0 / 20%), 1px 1px 1px 0px rgb(0 0 0 / 14%), 1px 2px 2px 0px rgb(0 0 0 / 12%)',
        '&:hover': {
            width: '100%',
            transition: 'width 0.6s ease-in-out',
        },
    },
    achievementCardMediaRoot: {
        width: '80px',
        height: '80px',
        margin: 'auto',
        borderRadius: '50%',
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px',
        },
    },
    achievementCardMedia: {
        height: '80px',
        width: '80px',
        backgroundPosition: 'center',
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px',
        },
    },
    achievementCardContentRoot: {
        height: 'calc(100% - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            height: 'calc(100% - 150px)',
        },
    },
    achievementCardContent: {
        padding: '0 10px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '0 20px',
        },
    },
    organization: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
    },
    name: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    date: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        marginBottom: '0.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
    details: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        marginBottom: '0.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
    achievementButton: {
        padding: '0.5rem 0.5rem',
        textAlign: 'center',
        borderRadius: '20px',
        color: '#2295ba',
        background: '#ffffff',
        border: '2px solid #2295ba',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        '&:hover': {
            color: '#ffffff',
            background: '#2295ba',
            border: '2px solid #ffffff',
        },
    },
})
