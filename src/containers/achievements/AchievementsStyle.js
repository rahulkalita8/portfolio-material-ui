export default (theme) => ({
    achievementRoot: {
        padding: '10px',
        background: 'rgb(116,211,226)',
        background:
            'linear-gradient(173deg, rgba(232,239,240,0.2539390756302521) 60%, rgba(255,255,255,1) 60%)',
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
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
