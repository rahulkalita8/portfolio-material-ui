import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import AchievementCard from '../../components/acheivementsCard/AchievementCard'
import { AcheivementDetails } from '../../profileDetails'

const useStyles = makeStyles((theme) => ({}))

export default function Achievement() {
    const classes = useStyles()

    return (
        <Paper>
            {AcheivementDetails.enable && (
                <Paper>
                    <Typography variant="h3">Achievements</Typography>
                    {AcheivementDetails.acheivements.map((achievement) => {
                        return (
                            <AchievementCard
                                imageUrl={achievement.imageUrl}
                                type={achievement.type}
                                name={achievement.name}
                                details={achievement.details}
                                date={achievement.date}
                                usefulLinks={achievement.usefulLinks}
                            />
                        )
                    })}
                </Paper>
            )}
        </Paper>
    )
}
