
import { makeStyles, Box,Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            fontWeight:'bold',
            color: '#000',
            background: '#FFF',
            lineHeight: 1,
        },
        '& :last-child': {
            fontSize: 50,
            fontWeight:'bold',
            
            
        }
    }
})


const Banner = () => {
    const classes = useStyle();
    return (
        <>
        <Box className={classes.image}>
            <Typography>EDUcated Lanka</Typography>
            <Typography>BLOG</Typography>
        </Box>
    </>
    )
}

export default Banner;