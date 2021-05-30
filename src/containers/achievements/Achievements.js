import React from 'react'
import { Fade } from 'react-reveal'

//MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

//Local Component
import { AcheivementDetails } from '../../profileDetails'
import AchievementCard from '../../components/acheivementsCard/AchievementCard'

//JSS
import theme from './AchievementsStyle'

const useStyles = makeStyles(theme)

export default function Achievement() {
    const classes = useStyles()

    return (
        <div id="certificates">
            <Fade left duration={1000}>
                {AcheivementDetails.enable && (
                    <div className={classes.achievementRoot}>
                        <Typography className={classes.achievementRootLabel}>
                            Certificates
                        </Typography>
                        <div className={classes.achievementLists}>
                            {AcheivementDetails.acheivements.map((achievement, index) => {
                                return (
                                    <AchievementCard
                                        key={'achievement-' + index}
                                        imageUrl={achievement.imageUrl}
                                        type={achievement.type}
                                        name={achievement.name}
                                        details={achievement.details}
                                        date={achievement.date}
                                        usefulLinks={achievement.usefulLinks}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )}
            </Fade>
        </div>
    )
}
