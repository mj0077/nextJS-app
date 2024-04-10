import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PropertyCard = ({ property }) => {

    const getRateDisplay = () => {
        if (property.rates.monthly) {
            return property.rates.monthly + "/month";
        } else if (property.rates.nightly) {
            return property.rates.nightly + "/night";
        } else {
            return property.rates.weekly + "/week";
        }

    }

    // const picLetter = property.images[0][0];
    // const picLetter = String.fromCharCode(property._id%100 + 64).toLowerCase();
    // console.log(String.fromCharCode(1 + 64).toLowerCase());
    // console.log("/images/properties/"+ picLetter +"1.jpg")
    
    return (
        <div className="rounded-xl shadow-md relative h-min">
            <Image
                src={"/images/properties/"+ property.images[0]}
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
                <div className="text-left md:text-center lg:text-left mb-6">
                    <div className="text-gray-600">{property.type}</div>
                    <h3 className="text-xl font-bold">{property.name}</h3>
                </div>
                <h3
                    className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
                >
                    {/* ${property.rates.monthly}/mo */}
                    ${getRateDisplay()}
                </h3>

                <div className="flex justify-center gap-4 text-gray-500 mb-4">
                    <p>
                        <i className="fa-solid fa-bed"></i> {property.beds}
                        <span className="md:hidden lg:inline">{` Bed${property.beds===1? '':'s'}`}</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-bath"></i> {property.baths}
                        <span className="md:hidden lg:inline">{` Bath${property.baths===1? '':'s'}`}</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-ruler-combined"></i>
                        {property.square_feet}
                        <span className="md:hidden lg:inline">{' '}sqft.</span>
                    </p>
                </div>

                <div
                    className="flex justify-center gap-4 text-green-900 text-sm mb-4"
                >
                    <p><i className="fa-solid fa-money-bill"></i> Weekly </p>
                    <p><i className="fa-solid fa-money-bill"></i> Monthly </p>
                </div>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                        <i
                            className="fa-solid fa-location-dot text-lg text-orange-700"
                        ></i>
                        <span className="text-orange-700">{property.location.city + ", " + property.location.state}</span>
                    </div>
                    <Link
                        href={"/properties/" + property._id}
                        className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard
