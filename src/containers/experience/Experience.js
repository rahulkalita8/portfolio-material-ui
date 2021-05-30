import React from 'react'

//MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

//Local Component
import ExperienceCard from '../../components/experienceCard/ExperienceCard'
import { WorkExperienceDetails } from '../../profileDetails'

//JSS
import theme from './ExperienceStyle'

const useStyles = makeStyles(theme)

export default function Experience() {
    const classes = useStyles()

    return (
        <div id="experiences">
            {WorkExperienceDetails.enable && (
                <div className={classes.experienceRoot}>
                    <Typography className={classes.experienceRootLabel}>Work Experience</Typography>
                    <div className={classes.experienceLists}>
                        {WorkExperienceDetails.experience.map((company, index) => {
                            return (
                                <ExperienceCard
                                    key={'experience-' + index}
                                    logo={company.logo}
                                    name={company.name}
                                    allDetails={company.allDetails}
                                />
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
