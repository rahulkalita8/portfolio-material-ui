import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Typography } from '@material-ui/core'
import CertificateCard from '../../components/certificateCard/CertificateCard'
import { LicenseCertificateDetails } from '../../profileDetails'

import theme from './CertificateStyle'

const useStyles = makeStyles(theme)

export default function Certificate() {
    const classes = useStyles()

    return (
        <div className={classes.certificateRoot}>
            {LicenseCertificateDetails.enable && (
                <div className={classes.certificateRoot}>
                    <Typography className={classes.certificateRootLabel}>
                        License and Certificates
                    </Typography>
                    <div className={classes.certificateLists}>
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
                    </div>
                </div>
            )}
        </div>
    )
}
