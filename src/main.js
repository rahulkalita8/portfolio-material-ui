import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AboutCard from './components/aboutCard/AboutCard'
import Education from './containers/education/Education'
import Header from './components/Header/Header'
import Experience from './containers/experience/Experience'
import Achievement from './containers/achievements/Achievements'
import Accomplishments from './containers/accomplishments/Accomplishments'
import Contact from './containers/contact/Contact'
import Skills from './containers/skills/Skills'

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
    },
}))

export default function Main(props) {
    const classes = useStyles()

    return (
        <div className={classes.mainDiv}>
            <Header />
            <AboutCard />
            <Skills />
            <Education />
            <Experience />
            <Achievement />
            {/* <Certificate /> */}
            <Accomplishments />
            {/* <ExperienceDemo /> */}
            <Contact />
        </div>
    )
}
