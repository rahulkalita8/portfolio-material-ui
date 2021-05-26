import React from 'react'
import { SkillsDetails } from '../../profileDetails'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import theme from './SkillsStyle'
import { Fade, Slide, Zoom } from 'react-reveal'

const useStyles = makeStyles(theme)

export default function Skills() {
    const classes = useStyles()

    return (
        <Fade duration={2000}>
            <div id="skills" className={classes.skillsRoot}>
                {SkillsDetails.enable && SkillsDetails.skills && (
                    <div>
                        <Typography className={classes.skillsRootLabel}>
                            Skills and Proficiency
                        </Typography>

                        <div className={classes.skillsContainer}>
                            {SkillsDetails.skills.map((skill) => {
                                return (
                                    <div className={classes.skillsBars}>
                                        <Paper className={classes.skillName}>
                                            {skill.skillName}
                                        </Paper>
                                        <Paper className={classes.skillBarContainer}>
                                            <div
                                                className={classes.skillBarPercent}
                                                style={{
                                                    width: skill.SkillPercent,
                                                    borderRadius:
                                                        skill.SkillPercent == '100%'
                                                            ? '0 0.5rem 0.5rem 0'
                                                            : '0',
                                                }}
                                            >
                                                {skill.SkillPercent}
                                            </div>
                                        </Paper>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </Fade>
    )
}
