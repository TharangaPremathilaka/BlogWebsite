
import { AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import { Link} from 'react-router-dom';
//import { useOktaAuth } from '@okta/okta-react';

const useStyles = makeStyles({
      component: {
            background:'#FFFFFF',
            color: 'black'

      },
      container:{
            justifyContent:'center',
            '& > *': {
                  padding: 20
            
            }

      },
      link:{
            textDecoration: 'none',
            color:'inherit'

            
      }

           
})


const Header = () => {
      const classes = useStyles();
     
    return (
      <AppBar className={classes.component}>
          <Toolbar className={classes.container}>
              <Link to='/home'>HOME</Link>
              <Link to='/about'>ABOUT</Link>
              <Link to='/contact'>CONTACT</Link> 
              <Link to='/register'>REGISTER</Link>
              <Link to='/login'>LOGIN</Link>
              <Link to='/logout'>LOGOUT</Link>
              
          </Toolbar>
      </AppBar>
  )


      
}


export default Header; 
