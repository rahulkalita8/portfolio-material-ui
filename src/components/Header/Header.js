import React from 'react'

//MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import {
    Link,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    MenuItem,
    Menu,
    Slide,
    useScrollTrigger,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

//Local Component
import {
    SkillsDetails,
    EducationDetails,
    WorkExperienceDetails,
    AcheivementDetails,
    AccomplishmentsDetails,
    ContactDetails,
} from '../../profileDetails'

//JSS
import theme from './HeaderStyles'

const useStyles = makeStyles(theme)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getAllEnabled() {
    const enabledComponent = {}
    enabledComponent['skills'] = SkillsDetails.enable ? SkillsDetails.enable : false
    enabledComponent['education'] = EducationDetails.enable ? EducationDetails.enable : false
    enabledComponent['experiences'] = WorkExperienceDetails.enable
        ? WorkExperienceDetails.enable
        : false
    enabledComponent['certificates'] = AcheivementDetails.enable ? AcheivementDetails.enable : false
    enabledComponent['accomplishments'] = AccomplishmentsDetails.enable
        ? AccomplishmentsDetails.enable
        : false
    enabledComponent['contact'] = ContactDetails.enable ? ContactDetails.enable : false

    return enabledComponent
}

export default function Header(props) {
    const classes = useStyles()
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
    const trigger = useScrollTrigger()

    const enabledComponent = getAllEnabled()
    const menuItems = Object.keys(enabledComponent).filter(function (key) {
        return enabledComponent[key]
    })

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            className={classes.menuWindow}
            onClose={handleMobileMenuClose}
            PaperProps={{
                style: {
                    borderRadius: '0',
                    width: '100vw',
                    marginTop: '48px',
                    boxShadow: '0 4px 2px -2px gray',
                },
            }}
        >
            {menuItems.map((m, index) => {
                return (
                    <MenuItem key={m + '-' + index}>
                        <Typography key={m + '-' + index} className={classes.menuTypography}>
                            <Link
                                href={'#' + m}
                                underline="none"
                                onClick={handleMobileMenuClose}
                                className={classes.menuTypographyLink}
                                key={m + '-' + index}
                            >
                                {capitalizeFirstLetter(m)}
                            </Link>
                        </Typography>
                    </MenuItem>
                )
            })}
        </Menu>
    )

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logo}>Rahul Kalita</Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {menuItems.map((m, index) => {
                            return (
                                <Typography key={m + index} className={classes.menuTypography}>
                                    <Link
                                        href={'#' + m}
                                        underline="none"
                                        className={classes.menuTypographyLink}
                                        key={m + index}
                                    >
                                        {capitalizeFirstLetter(m)}
                                    </Link>
                                </Typography>
                            )
                        })}
                    </div>
                    <IconButton
                        edge="start"
                        aria-controls={mobileMenuId}
                        className={classes.sectionMobile}
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                {renderMobileMenu}
            </AppBar>
        </Slide>
    )
}
