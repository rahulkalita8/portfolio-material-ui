export default (theme) => ({
    aboutMain: {
        width: '100vw',
        height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        backgroundImage: 'url(/assets/images/about-background4.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            // flexDirection: 'row',
        },
    },
    aboutDetails: {
        height: '100vh',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: '0',
        flexGrow: '1',
    },
    main__animation: {
        minWidth: '300px',
        flexBasis: '0',
        flexGrow: '1',
    },

    typographyH1: {
        paddingBottom: '1rem',
        fontSize: '3rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        },
    },

    typographyBody1: {
        margin: '0',
        padding: '0 1rem',
        fontSize: '1rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    },
})
