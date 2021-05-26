export default (theme) => ({
    accomplishmentsCardRoot: {
        // margin: '10px',
    },
    accomplishmentsCard: {
        // padding: '0.5rem 1rem',
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
            fontSize: '2rem',
        },
    },
    date: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    issuer: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    details: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    accomplishmentButton: {
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
