import { useDispatch, useSelector } from "react-redux"
import { getListOfProducts } from "../features/products/productsSlice";
import { useEffect } from "react";

const About = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const parameters ={
    updatedURL: '',
    limitURL: '?limit=12&skip=0'
  }

  useEffect(()=>{
    console.log('useEffect - About');
    
    dispatch(getListOfProducts(parameters));
  },[])  

  console.log(products);

  return (
    <div>About</div>
  )
}

export default About