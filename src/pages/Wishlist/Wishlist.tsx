import React, { useEffect } from 'react'
import HeaderFooter from '../../components/HeaderFooter';
import {ContainerWishlist} from './Section';

const Wishlist = () => {
  useEffect(() => {
    document.title = "Wishlist";
  })
  return (
    <>
      <ContainerWishlist />
    </>
  )
}

export default Wishlist