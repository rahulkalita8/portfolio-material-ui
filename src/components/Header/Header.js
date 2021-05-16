import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'

import theme from './HeaderStyles'
import { Link } from '@material-ui/core'

const useStyles = makeStyles(theme)

export default function PrimarySearchAppBar(props) {
    const classes = useStyles()
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

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
        <div className={classes.grow}>
            <AppBar position="static" color="transparent">
                <Toolbar className={classes.toolbar}>
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
                    <Typography variant="h6" noWrap>
                        Logo
                    </Typography>
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
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    )
}
