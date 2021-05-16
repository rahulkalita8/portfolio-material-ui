export default (theme) => ({
    aboutMain: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    aboutDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // [theme.breakpoints.up('md')]: {
        flexBasis: '0',
        flexGrow: '1',
        // },
    },
    main__animation: {
        minWidth: '300px',
        flexBasis: '0',
        flexGrow: '1',
        // [theme.breakpoints.up('md')]: {
        // flex: '1 0 0',
        // },
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
