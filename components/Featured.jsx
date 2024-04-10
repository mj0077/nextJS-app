import React from 'react'
import PropertyCard from './PropertyCard'

const Featured = ({ properties }) => {
    const getFeaturedProperties = () => properties.filter(property => property.is_featured);

    return (<div className="my-5 max-h-96 overflow-hidden">
        <span className="md:block text-center text-grey text-3xl font-bold mb-10">Featured properties</span>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mx-10 col-span-2">

            {getFeaturedProperties().map(property => <PropertyCard property={property} key={property._id} />)}
            {/* {properties.map(property => <PropertyCard property={property} key={property._id} />)} */}
        </div>
    </div>
    )
}

export default Featured
