
import {Button,Table, TableHead, TableRow, TableCell, TableBody ,makeStyles} from '@material-ui/core';
import { categories } from '../../constants/data';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    create: {
        margin: 20,
        width: '85%',
        background: '#6495ED',
        color: '#fff',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
    
})

const Categories = () =>{
    const classes = useStyle()
    return (
        <>
         <Link to='/create' className={classes.link}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>
         <Table className={classes.table}>
         <TableHead>
             <TableCell>
               <Link to={"/"} className={classes.link}>
                 All Categories
               </Link>  
             </TableCell>
         </TableHead>
         <TableBody>
             {
                 categories.map(category => (
                     <TableRow>
                         <TableCell>
                           <Link to={`/?category=${category}`} className={classes.link}>
                              {category}
                            </Link>  
                         </TableCell>
                     </TableRow>
                 ))
             }
         </TableBody>
     </Table>
 </>



    )
}

export default Categories; 