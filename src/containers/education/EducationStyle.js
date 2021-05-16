export default (theme) => ({
    educationRoot: {
        margin: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '2rem',
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
