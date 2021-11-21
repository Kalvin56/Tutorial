import { Avatar, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"

function Header({user}) {
    return (
        <Box p={2} style={{backgroundColor: '#FEA82F'}}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <Avatar src={user.url} sx={{ width: 65, height: 65 }}/>
                </Grid>
                <Grid item>
                    <Typography variant="h5">{user.pseudo}</Typography>
                    <Typography variant="subtitle2">{user.description}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header
