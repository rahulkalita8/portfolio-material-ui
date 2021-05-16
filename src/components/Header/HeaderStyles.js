export default (theme) => ({
    header: {
        backgroundColor: '#fff',
        position: 'fixed',
        maxWidth: '100%',
        padding: '0.5rem 1rem',
        boxShadow: '0px 8px 34px -1px rgba(0,0,0,0.57);',
    },
    grid: {
        margin: '0px auto',
        transition: 'max-height 0.2s ease-out',
    },
    gridItem: {
        display: 'block',
        padding: '1rem 1.5rem',
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#f4f4f4',
        },
    },
    /* menu */
    menu: {
        marginLeft: 'auto',
        maxHeight: '0',
        transition: 'max-height 02s ease-out',
    },
})
