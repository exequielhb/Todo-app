import { useEffect } from "react"
import lottie from "lottie-web"

import duckAnimation from "../animations/duck.json"

const Duck = () => {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#duck"),
            animationData: duckAnimation,
            loop: true,
            autoplay: true,

        })
        // destruye el componente y no repite la imagen
        return () => lottie.destroy()
    }, [])

    return  <div id="duck" style={{ height: 250, width: 300}} ></div>
}

export default Duck