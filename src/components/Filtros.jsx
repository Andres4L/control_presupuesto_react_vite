import { useState, useEffect } from "react"

const Filtros = ( {filtro, setFiltro}) => {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filtrar Gastos</label>
                    <select
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                    >
                        <option value=""> Todos los gastos </option>
                        <option value="casa"> casa </option>
                        <option value="ahorro"> ahorro </option>
                        <option value="comida"> comida </option>
                        <option value="gastos"> gastos  </option>
                        <option value="subscripciones"> subscripciones </option>
                        <option value="ocio"> ocio </option>
                        <option value="salud"> salud </option>

                    </select>
                </div>
            </form>

        </div>
    )
}

export default Filtros
