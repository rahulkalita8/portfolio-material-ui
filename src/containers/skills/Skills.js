import React from 'react'
import { Fade } from 'react-reveal'

//MaterialUI
import { makeStyles, Paper, Typography } from '@material-ui/core'

//Local Component
import { SkillsDetails } from '../../profileDetails'

//JSS
import theme from './SkillsStyle'

const useStyles = makeStyles(theme)

export default function Skills() {
    const classes = useStyles()

    return (
        <Fade duration={2000}>
            <div id="skills">
                {SkillsDetails.enable && SkillsDetails.skills && (
                    <div className={classes.skillsRoot}>
                        <Typography className={classes.skillsRootLabel}>
                            Skills and Proficiency
                        </Typography>

                        <div className={classes.skillsContainer}>
                            {SkillsDetails.skills.map((skill, index) => {
                                return (
                                    <div className={classes.skillsBars} key={skill + '-' + index}>
                                        <Paper className={classes.skillName} key={skill + index}>
                                            {skill.skillName}
                                        </Paper>
                                        <Paper
                                            className={classes.skillBarContainer}
                                            key={skill + '--' + index}
                                        >
                                            <div
                                                className={classes.skillBarPercent}
                                                style={{
                                                    width: skill.SkillPercent,
                                                    borderRadius:
                                                        skill.SkillPercent === '100%'
                                                            ? '0 0.5rem 0.5rem 0'
                                                            : '0',
                                                }}
                                                key={skill + index + '-'}
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
