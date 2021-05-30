export default (theme) => ({
    educationRoot: {
        padding: '2rem',
        boxSizing: 'border-box',
        backgroundImage:
            'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(/assets/images/education-background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('md')]: {
            minHeight: '80vh',
        },
    },
    educationRootLabel: {
        fontSize: '2rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    educationLists: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
})
