export default (theme) => ({
    experienceRoot: {
        margin: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '2rem',
        },
    },
    experienceRootLabel: {
        fontSize: '2rem',
        fontFamily: 'Montserrat',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    experienceLists: {
        display: 'grid',
        gridAutoRows: '1fr',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));',
        gridGap: '1rem 1rem',
    },
})
