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
        // backgroundSize: '100% 100%',
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px',
        },
    },
    achievementCardContentRoot: {},
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
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    },
    date: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    },
    listItems: {
        padding: '0',
    },
    listIcon: {
        minWidth: '24px',
    },
    details: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    achievementButton: {
        background: 'transparent',
        margin: '0.5rem',
        borderRadius: '8px',
        border: '2px solid #3d5afe',
        '&:hover': {
            background: '#3d5afe',
            color: '#ffffff',
        },
    },
})
