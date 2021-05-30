export default (theme) => ({
    aboutMain: {
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/assets/images/about-background4.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
    },
    aboutDetails: {
        height: '100vh',
        margin: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexBasis: '0',
        flexGrow: '1',
        [theme.breakpoints.up('md')]: {
            margin: '0 100px',
        },
    },
    main__animation: {
        minWidth: '300px',
        flexBasis: '0',
        flexGrow: '1',
    },

    name: {
        paddingBottom: '1rem',
        color: '#207ed6',
        fontSize: '3rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        },
    },

    aboutDetailsPara: {
        maxWidth: '50vw',
        fontSize: '1rem',
        textAlign: 'left',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    },

    resumeBtn: {
        padding: '0.8rem 2rem',
        textAlign: 'center',
        borderRadius: '40px',
        color: '#2295ba',
        background: '#ffffff',
        border: '2px solid #2295ba',
        fontSize: '1rem',
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
