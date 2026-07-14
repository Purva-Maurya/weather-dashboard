import { FaLocationArrow } from "react-icons/fa";


function LocationButton({ onLocation }) {

    const handleLocation = () => {

        if (!navigator.geolocation) {
            alert("Geolocation is not supported");
            return;
        }


        navigator.geolocation.getCurrentPosition(
            (position) => {

                const { latitude, longitude } = position.coords;

                onLocation(latitude, longitude);

            },

            () => {
                alert("Unable to get your location");
            }

        );

    };


    return (

        <button
            onClick={handleLocation}
            className="
      mt-5
      bg-white/20
      backdrop-blur-lg
      border border-white/30
      text-white
      px-6
      py-3
      rounded-xl
      flex
      items-center
      gap-2
      mx-auto
      hover:bg-white/30
      transition
      "
        >

            <FaLocationArrow />

            Use My Location

        </button>

    );

}

export default LocationButton;