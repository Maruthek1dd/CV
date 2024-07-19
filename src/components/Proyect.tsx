import pict from "../assets/Recreate_alexandria.jpeg";
import pict2 from "../assets/los_tres_indiecitos.jpeg";
import pict3 from "../assets/dhl.jpg";

export const Proyect = () => {
  return (
    <div className="pb-10 border-b border-neutral-800">
      <h1 className="my-20 text-center text-3xl">Proyectos</h1>
      <div className="flex flex-col items-center">
        <div className="space-y-8 w-full max-w-4xl">
          {" "}
          {/* Aumentar el ancho máximo */}
          <div className="flex items-center">
            <div className="text-lg font-bold w-1/4 flex-shrink-0 flex items-center justify-center p-4">
              <div></div>
            </div>
            <div className="w-3/4 p-4 rounded-2xl ml-4">
              <div className="mx-20 mb-4">
                <img
                  src={pict2}
                  alt="los_tres_indiecitos"
                  className="h-64 w-auto object-contain rounded-xl"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Desarrollo web - Freelancer
              </h2>
              <p>
                Creé una landing page utilizando HTML, CSS y JavaScript. Este
                proyecto me permitió desarrollar habilidades clave en diseño web
                y experiencia de usuario.
              </p>
            </div>
          </div>
          <div className="flex items-center mt-8 ">
            <div className="w-3/4 p-4 rounded-2xl mr-4">
              {" "}
              {/* Aumentar el ancho del contenedor */}
              <div className="mx-20 mb-4">
                <img
                  src={pict}
                  alt="Recreate Alexandria"
                  className="h-64 w-auto object-contain rounded-xl "
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Desarrollo web - Freelancer
              </h2>
              <p>
                Desarrollé una aplicación web con una interfaz de cliente y un
                panel de administrador para la gestión de una biblioteca.
                Utilicé HTML, Bootstrap, y FastAPI, permitiendo una gestión
                eficiente de libros y usuarios.
              </p>
            </div>
            <div className="text-lg font-bold w-1/4 flex-shrink-0 flex items-center justify-center p-4">
              <div></div>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <div className="text-lg font-bold w-1/4 flex-shrink-0 flex items-center justify-center p-4">
              <div></div>
            </div>
            <div className="w-3/4 p-4 rounded-2xl ml-4">
              <div className="mx-40 mb-4">
                <img
                  src={pict3}
                  alt="dhl"
                  className="h-64 w-auto object-contain ml-16"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Optimización de Seguimiento de Pedidos
              </h2>
              <p>
                Implementé un sistema para consumir una API de una empresa de
                envíos, obteniendo y optimizando la información del estado de
                los pedidos para los clientes. Utilicé Axios y React, mejorando
                la eficiencia y claridad de la información presentada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
