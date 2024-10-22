import { useLoaderData } from "react-router-dom"

const ImagesGalleryBox = () => {
    const {images, title} = useLoaderData()

  return (
    <img src={images[0]} alt={title} className="img-fluid"/>
  )
}

export default ImagesGalleryBox