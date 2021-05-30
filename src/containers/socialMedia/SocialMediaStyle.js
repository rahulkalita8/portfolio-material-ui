export default (theme) => ({
    socialMediaRoot: {
        padding: '5px',
        marginTop: '10px',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    button: {
        color: 'white',
        padding: '0.3rem',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '2.5rem',
        minWidth: '2.5rem',
        margin: '0.5rem',
        flexGrow: 1,
        transition: '0.2s ease-in',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
            minWidth: '3rem',
        },
    },
})
