import React from 'react'
import { SkillsDetails } from '../../profileDetails'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import theme from './SkillsStyle'

const useStyles = makeStyles(theme)

export default function Skills() {
    const classes = useStyles()

    return (
        <div id="skills" className={classes.skillsRoot}>
            {SkillsDetails.enable && SkillsDetails.skills && (
                <div>
                    <Typography className={classes.skillsRootLabel}>
                        Skills and Proficiency
                    </Typography>
                    <div className={classes.aboutRoot}>
                        {/* <div className={classes.whatIdo}>
                            <Typography className={classes.whatHowIdoHeading}>What I do</Typography>
                            <Typography className={classes.whatIdoText}>
                                {SkillsDetails.whatIdo}
                            </Typography>
                        </div> */}

                        <div className={classes.howIdoIt}>
                            {/* <Typography className={classes.whatHowIdoHeading}>
                                How I do it
                            </Typography> */}
                            {SkillsDetails.skills.map((skill) => {
                                return (
                                    <div className={classes.skillsBars}>
                                        <Paper
                                            style={{
                                                width: '6rem',
                                                background: '#4da6ff',
                                            }}
                                        >
                                            {skill.skillName}
                                        </Paper>
                                        <Paper
                                            style={{
                                                width: '60vw',
                                                background: '#cccccc',
                                                
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: skill.SkillPercent,
                                                    height: '1rem',
                                                    background: '#b3e6ff',
                                                }}
                                            ></div>
                                        </Paper>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
