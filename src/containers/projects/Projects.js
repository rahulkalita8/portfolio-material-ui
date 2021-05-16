import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import ProjectCard from '../../components/projectCard/ProjectCard'
import { ProjectDetails } from '../../profileDetails'

const useStyles = makeStyles((theme) => ({}))

export default function Project() {
    const classes = useStyles()

    return (
        <Paper>
            {ProjectDetails.enable && (
                <Paper>
                    <Typography variant="h3">Projects</Typography>
                    {ProjectDetails.projects.map((project) => {
                        return (
                            <ProjectCard
                                name={project.name}
                                imageUrl={project.imageUrl}
                                details={project.details}
                                date={project.date}
                                url={project.url}
                            />
                        )
                    })}
                </Paper>
            )}
        </Paper>
    )
}
