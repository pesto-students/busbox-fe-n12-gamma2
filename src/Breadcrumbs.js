
import React from 'react'
import { Breadcrumbs as MB, Typography} from '@mui/material';
import {Link} from "react-router-dom"
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className='breadcrumbs'>
      <React.Fragment >
        <MB className='typography-container' separator="›" aria-label="breadcrumb" maxItems={3} >
          {breadcrumbs.map( ({breadcrumb}, index, arr) => {
            const isLast = index === arr.length-1
            return (
              <Typography className='link-typography' key={index} variant='string'>
                    <Link className='actual-link' to={breadcrumb.key}> 
                        {breadcrumb}  
                    </Link>
                </Typography>
              )
            })}
          </MB>
      </React.Fragment>
    </div>
  );
}

export default Breadcrumbs;