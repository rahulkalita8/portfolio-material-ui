export default (theme) => ({
    achievementBorder: {
        border: '2px solid rgba(211, 211, 211, 0.397)',
        width: '90%',
        opacity: '1',
    },
    achievementRoot: {
        margin: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '2rem',
        },
    },
    achievementRootLabel: {
        fontSize: '2rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    achievementLists: {
        display: 'grid',
        gridAutoRows: '1fr',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));',
        gridGap: '1rem 1rem',
    },
})
