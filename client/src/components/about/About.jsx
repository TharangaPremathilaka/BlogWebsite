import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Facebook, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3"><center>EDUcated Lanka</center></Typography>
                <Typography variant="h5" className={classes.text}>Hey friends! My name is Oshani Tharanga.I'm 23 years old.I am an undergraduate student in information and communication Technology from the University of Sri Jayewardenepura.I am a freelancer in graphic design and web development..<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/TharanagPremathilaka" color="blue" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on Facebook
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.facebook.com/oshani.tharanga.77/" color="blue" target="_blank">
                            <Facebook />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:oshani981011@gmail.com?Subject=This is a subject" target="_blank" color="blue">
                            <Email />
                        </Link>.
                </Typography>
            </Box>
        </Box>
    )
}

export default About;