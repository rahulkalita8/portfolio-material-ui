import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Typography } from '@material-ui/core'
import AchievementCard from '../../components/acheivementsCard/AchievementCard'
import { AcheivementDetails } from '../../profileDetails'
import { Fade, Slide } from 'react-reveal'

import theme from './AchievementsStyle'

const useStyles = makeStyles(theme)

export default function Achievement() {
    const classes = useStyles()

    return (
        <div className={classes.achievementRoot} id="Achievements">
            <Fade left duration={1000}>
                {AcheivementDetails.enable && (
                    <div>
                        <Typography className={classes.achievementRootLabel}>
                            Achievements
                        </Typography>
                        <div className={classes.achievementLists}>
                            {AcheivementDetails.acheivements.map(
                                (achievement, index) => {
                                    return (
                                        <AchievementCard
                                            imageUrl={achievement.imageUrl}
                                            type={achievement.type}
                                            name={achievement.name}
                                            details={achievement.details}
                                            date={achievement.date}
                                            usefulLinks={
                                                achievement.usefulLinks
                                            }
                                        />
                                    )
                                }
                            )}
                        </div>
                    </div>
                )}
            </Fade>
        </div>
    )
}
