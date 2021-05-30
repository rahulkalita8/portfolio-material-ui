export default (theme) => ({
    accomplishmentsCardRoot: {},
    accomplishmentsCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow: 'none',
        '&.hover': {
            width: '100%',
            transition: 'width 0.6s ease-in-out',
        },
        background: 'rgba(255, 255, 255, 0.5)',
    },
    accomplishmentsCardMediaRoot: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px',
        },
    },
    accomplishmentsCardMedia: {
        height: '80px',
        width: '80px',
        backgroundPosition: 'center',
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px',
        },
    },
    accomplishmentsCardContentRoot: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    accomplishmentsCardContent: {
        padding: '0 10px',
        [theme.breakpoints.up('md')]: {
            padding: '0 20px',
        },
    },
    metadataInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    separatorDot: {
        margin: '0 0.5rem',
    },
    name: {
        fontSize: '1rem',
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
            fontSize: '1rem',
        },
    },
    issuer: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
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
    accomplishmentButton: {
        marginTop: '0.5rem',
        padding: '0.2rem 0.5rem',
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
