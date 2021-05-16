export default (theme) => ({
    main: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        padding: '1.25rem 0.8rem',
        margin: '0px auto',
        // background: 'linear-gradient(to right, #348f50, #56b4d3)',
        display: 'flex',
    },
    main__div: {
        alignSelf: 'center',
        position: 'relative',
        top: '1rem',
    },
    main__animation: {
        flex: '1 1',
        alignSelf: 'center',
    },

    typographyH1: {
        padding: '1.25rem 0.8rem',
        margin: '0px auto',
        color: '#000',
        fontSize: '5rem',
        paddingBottom: '1rem',
    },

    typographyBody1: {
        margin: '0',
        fontSize: '2rem',
        padding: '0 1rem',
    },

    subTitle: {
        color: '#868e96 !important',
    },

    greetingMain: {
        display: 'flex',
        '>*': {
            flex: '1',
            marginBottom: '2rem',
        },
    },

    buttonGreetingDiv: {
        display: 'flex',
        marginTop: '1 rem',
    },

    greetingText: {
        fontSize: '70px',
        lineHeight: '11',
        color: 'black !important',
    },

    greetingTextP: {
        fontSize: '2rem',
        lineHeight: '2.5rem',
    },

    greetingImageDiv: {
        img: {
            maxWidth: '100%',
            height: 'auto',
        },
    },
})
