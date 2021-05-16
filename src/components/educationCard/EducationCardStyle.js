export default (theme) => ({
    educationCardRoot: {
        margin: '10px',
    },
    educationCard: {
        padding: '0.5rem 1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow:
            '2px 3px 8px -2px rgb(0 0 0 / 20%), 1px 1px 1px 0px rgb(0 0 0 / 14%), 1px 2px 2px 0px rgb(0 0 0 / 12%)',
        '&.hover': {
            width: '100%',
            transition: 'width 0.6s ease-in-out',
        },
        background: 'rgba(255, 255, 255, 0)',
    },
    educationCardMediaRoot: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px',
        },
    },
    educationCardMedia: {
        height: '80px',
        width: '80px',
        backgroundPosition: 'center',
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px',
        },
    },
    educationCardContentRoot: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    educationCardContent: {
        padding: '0 10px',
        [theme.breakpoints.up('md')]: {
            padding: '0 20px',
        },
    },
    schoolName: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    },
    schooldegree: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    schoolyears: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    grade: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
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
})
