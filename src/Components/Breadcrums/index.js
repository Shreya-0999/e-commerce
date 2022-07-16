import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import useStyle from './Styles/useStyles.js';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Breadcrumb = (props) => {
    const navigate = useNavigate();
    const classes = useStyle();
    const handleBreadcrumb = (item) => {
        if (item === 'Home')
            navigate('/')
        else
            navigate('/' + item)
    }
    const breadcrumbs = ['Home', ...props.breadcrumItems]
    const currentBreadcrumbs = breadcrumbs.pop();


    return (
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                color="secondary.light"
            >
                {
                    breadcrumbs.map((item, key) => (
                        <Link
                            underline="hover"
                            key={key}
                            color="secondary.light"
                            onClick={(e) => handleBreadcrumb(item)}
                            className={classes.breadcrumbLink}
                        >
                            {item}
                        </Link>
                    ))
                }
                <Typography key={breadcrumbs.length} color="secondary.light">
                    {currentBreadcrumbs}
                </Typography>,
            </Breadcrumbs>
    );
}
export default Breadcrumb;