import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import CertificateCard from '../../components/certificateCard/CertificateCard'
import { LicenseCertificateDetails } from '../../profileDetails'

const useStyles = makeStyles((theme) => ({}))

export default function Certificate() {
    const classes = useStyles()

    return (
        <Paper>
            {LicenseCertificateDetails.enable && (
                <Paper>
                    <Typography variant="h3">
                        License and Certificates
                    </Typography>
                    {LicenseCertificateDetails.certificates.map(
                        (certificate) => {
                            return (
                                <CertificateCard
                                    imageUrl={certificate.imageUrl}
                                    name={certificate.name}
                                    organization={certificate.organization}
                                    details={certificate.details}
                                    date={certificate.date}
                                    url={certificate.url}
                                />
                            )
                        }
                    )}
                </Paper>
            )}
        </Paper>
    )
}
