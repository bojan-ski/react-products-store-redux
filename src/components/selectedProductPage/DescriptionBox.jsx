import { useLoaderData } from "react-router-dom"

const DescriptionBox = () => {
    const { description } = useLoaderData()
    return (
        <>
            <h5 className="text-center fw-bold mb-3">
                Description:
            </h5>
            <p>
                {description}
            </p>
        </>
    )
}

export default DescriptionBox