'use client'

import { useParams, useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";

const SearchResults = ({ properties }) => {
    const uRLSearchParams = useSearchParams();
    const enteredLocation = uRLSearchParams.get('loc')?.charAt(0).toUpperCase() + uRLSearchParams.get('loc')?.slice(1);
    console.log(enteredLocation)

    const propertiesAtLocation = Array.from(properties).filter(p => Object.values(p.location).includes(enteredLocation));
    console.log(propertiesAtLocation)

    // console.log(Object.values(properties[0].location))
    console.log(Object.values(properties[0].location).includes(enteredLocation))

    return (
        <>
            {enteredLocation ?
                (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* {properties.filter((property) => { property.location === '65fded032575b0ff12197315' })} */}
                    {propertiesAtLocation.map(property => <PropertyCard key={property._id} property={property} />) }
                </div>) :
                            (<><div className=" md:block text-grey text-2xl font-bold ml-4 mb-10">Search for your property</div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {(properties).map((property) => <PropertyCard key={property._id} property={property} />)}
                </div>
                </>)
            }
        </>
    )
}

export default SearchResults
