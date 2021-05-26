export default (theme) => ({
    contactRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    footer: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
