import Lottie from "react-lottie";
import lotus from "../static2/lotus.json";
import "../css/Nosotros.css"

const lotusData = {loop:true, autoplay:true, animationData:lotus}

function Nosotros() {
    return (
        <>
        <div className='padre-animacion'>
        <div className='animacion'>
            <Lottie options={lotusData} height={150} width={150}/>
        </div>

        <div className='texto1'>
            <h5>Sobre nuestro centro:</h5>
            <p>En "Aesthethic" te ofrecemos todo tipo de tratamientos estéticos, médicos faciales y corporales.</p>

            <p>Contamos con equipamiento de avanzada, que junto a un buen criterio profesional y a los avances tecnológicos de la medicina estética, nos permite obtener los mejores resultados en cada tratamiento.</p>

            <p>Dirigido por la <b>Dra Lorena Rojo</b>. MN 113.160</p>
            <p>Médica especialista en Medicina Estética.</p>
            <p>Médica especialista en Diagnóstico por Imágenes.</p>

        </div>
        </div>
        </>
    )
}
export default Nosotros;