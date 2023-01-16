import React from "react";
import Estado from "../estados/Estado";

const Estados = () => {
    let [estado, setEstado] = React.useState("");
    let [br, setBr] = React.useState("");
    console.log(br);

    React.useEffect(() => {
        fetch("https://covid19-brazil-api.vercel.app/api/report/v1")
            .then((responde) => responde.json())
            .then((dados) => setEstado(dados.data));
        fetch("https://covid19-brazil-api.vercel.app/api/report/v1/brazil")
            .then((responde) => responde.json())
            .then((dados) => setBr(dados.data));
    }, []);

    return (
        <div className="container p-0 mt-5">
            <h1 className="text-center p-2 bg-danger text-white d-flex justify-content-between align-items-center">
                COVID 19{" "}
                <span style={{ fontSize: "20px" }}>
                    Casos confirmados BR - {br.confirmed}
                </span>
            </h1>
            <div className="row row-cols-3">
                <Estado estado={estado}></Estado>
            </div>
        </div>
    );
};

export default Estados;
