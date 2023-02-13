import React, { useEffect } from 'react';
import HeaderFooter from '../../components/HeaderFooter.js';
import '../style.css';
import {TopDetails, DetailsContent} from './Section';

const Browse = () => {
  useEffect(() => {
    document.title = "Pre-Purchase & Pre-Order Marvel's Spider-Man Remastered - Epic Games Store";
  })

  return (
    <>
      <HeaderFooter
        containerContent={
          <>
            <div className='column-container'>
              <TopDetails />
              <DetailsContent />
            </div>
          </>
        }
      />
    </>
  )
}

export default Browse