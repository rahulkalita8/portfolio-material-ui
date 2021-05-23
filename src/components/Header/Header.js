import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import Slide from '@material-ui/core/Slide'
import Paper from '@material-ui/core/Paper'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import theme from './HeaderStyles'
import { Link } from '@material-ui/core'

const useStyles = makeStyles(theme)

export default function Header(props) {
    const classes = useStyles()
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
    const trigger = useScrollTrigger()

    const menuItems = ['Education', 'Experience', 'Achievements', 'Contact']

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
            // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            className={classes.menuWindow}
            onClose={handleMobileMenuClose}
            PaperProps={{
                style: {
                    borderRadius: '0',
                    width: '100vw',
                    marginTop: '48px',
                    boxShadow: '0 4px 2px -2px gray',
                    // background: 'rgba(255, 255, 255, 0.1',
                },
            }}
        >
            {menuItems.map((m) => {
                return (
                    <MenuItem>
                        <Typography className={classes.menuTypography}>
                            <Link
                                href={'#' + m}
                                underline="none"
                                onClick={handleMobileMenuClose}
                                className={classes.menuTypographyLink}
                            >
                                {m}
                            </Link>
                        </Typography>
                    </MenuItem>
                )
            })}
        </Menu>
    )

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar
                // position="static"
                color="white"
            >
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logo}>Rahul Kalita</Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {menuItems.map((m) => {
                            return (
                                <Typography className={classes.menuTypography}>
                                    <Link
                                        href={'#' + m}
                                        underline="none"
                                        className={classes.menuTypographyLink}
                                    >
                                        {m}
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
