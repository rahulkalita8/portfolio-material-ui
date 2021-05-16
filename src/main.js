import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AboutCard from './components/aboutCard/AboutCard'
import Education from './containers/education/Education'
import Header from './components/Header/Header'
import Experience from './containers/experience/Experience'

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
    },
}))

export default function Main() {
    const classes = useStyles()

    return (
        <div className={classes.mainDiv}>
            <Header />
            <AboutCard />
            <Education />
            <Experience />
        </div>
    )
}
