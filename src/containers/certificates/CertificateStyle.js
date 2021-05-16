export default (theme) => ({
    certificateRoot: {
        margin: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '2rem',
        },
    },
    certificateRootLabel: {
        fontSize: '2rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    certificateLists: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
})
