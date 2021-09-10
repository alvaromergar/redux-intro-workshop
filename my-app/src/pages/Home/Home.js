import React from "react";
import "./style.scss";
import SearchBar from "../../components/SearchBar";
import withLayout from "../../hoc/withLayout";

function Home ({
    // handleSearch,
    ...props
}) {
    return (
        <div className="gridForm">
            <div>
                <p>
                Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum. 
                </p>
            </div>    
            <div>
                <SearchBar
                    type="text"
                    id="search-home"
                    placeholder="Search"
                />
            </div>
        </div>
    );
}

export default withLayout(Home);