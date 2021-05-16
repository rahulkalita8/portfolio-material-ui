export default (theme) => ({
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: '48px',
        [theme.breakpoints.up('md')]: {
            minHeight: '56px',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuTypography: {
        padding: '0.5rem 1rem',
        '&:hover, &:active, &:focus': {
            background: '#f4f4f4',
            borderRadius: '0.2rem',
        },
    },
    menuTypographyLink: {
        color: 'rgba(0, 0, 0, 0.87)',
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuWindow: {
        width: '100vw',
        boxShadow: 'none',
        borderRadius: '0',
    },
})
