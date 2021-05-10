export default (theme) => ({
    card: {
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'row',
        '&.hover': {
            width: '100%',
            transition: 'width 0.6s ease-in-out',
        },
    },
    cardMedia: {
        objectFit: 'cover',
        marginRight: '2rem',
        width: '6rem',
        height: '6rem',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.3)',
        borderRadius: '50%',
    },
    cardContent: {},
})
