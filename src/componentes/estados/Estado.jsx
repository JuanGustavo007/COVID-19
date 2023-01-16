import React from "react";
import AC from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/AC.png";
import AL from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/AL.png";
import AM from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/AM.png";
import AP from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/AP.png";
import BA from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/BA.png";
import CE from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/CE.png";
import DF from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/DF.png";
import ES from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/ES.png";
import GO from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/GO.png";
import MA from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/MA.png";
import MG from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/MG.png";
import MS from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/MS.png";
import MT from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/MT.png";
import PA from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/PA.png";
import PB from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/PB.png";
import PE from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/PE.png";
import PI from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/PI.png";
import PR from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/PR.png";
import RJ from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/RJ.png";
import RN from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/RN.png";
import RO from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/RO.png";
import RR from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/RR.png";
import RS from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/RS.png";
import SC from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/SC.png";
import SE from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/SE.png";
import SP from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/SP.png";
import TO from "/Users/juangustavo/Documents/projeto360dias/dash/dashboard/src/imgs/TO.png";

const Estado = ({ estado }) => {
    const bandeiras = [
        { UF: AC, ver: "AC" },
        { UF: AL, ver: "AL" },
        { UF: AM, ver: "AM" },
        { UF: AP, ver: "AP" },
        { UF: BA, ver: "BA" },
        { UF: CE, ver: "CE" },
        { UF: DF, ver: "DF" },
        { UF: ES, ver: "ES" },
        { UF: GO, ver: "GO" },
        { UF: MA, ver: "MA" },
        { UF: MG, ver: "MG" },
        { UF: MS, ver: "MS" },
        { UF: MT, ver: "MT" },
        { UF: PA, ver: "PA" },
        { UF: PB, ver: "PB" },
        { UF: PE, ver: "PE" },
        { UF: PI, ver: "PI" },
        { UF: PR, ver: "PR" },
        { UF: RJ, ver: "RJ" },
        { UF: RN, ver: "RN" },
        { UF: RO, ver: "RO" },
        { UF: RR, ver: "RR" },
        { UF: RS, ver: "RS" },
        { UF: SC, ver: "SC" },
        { UF: SE, ver: "SE" },
        { UF: SP, ver: "SP" },
        { UF: TO, ver: "TO" },
    ];
    console.log(" sdasdda ");
    console.log(bandeiras);
    if (estado) {
        return estado.map((item) => {
            return (
                <div key={item.state}>
                    <div className="card p-0 mb-2">
                        <div
                            className="card-body d-flex flex-column justify-content-between p-0"
                            style={{ height: "480px" }}
                        >
                            {bandeiras.map((i) =>
                                i.ver === item.uf ? (
                                    <img
                                        src={i.UF}
                                        alt="Bandeira"
                                        className="img-fluid w-100 h-100"
                                        style={{
                                            borderRadius: "5px 5px 0px 0px",
                                        }}
                                    ></img>
                                ) : (
                                    ""
                                )
                            )}
                            <h5 className="card-title text-center p-1 bg-dark text-white">
                                {item.state.toUpperCase()}
                            </h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    Total de casos - {item.cases}
                                </li>
                                <li class="list-group-item">
                                    Total de Mortes - {item.deaths}
                                </li>
                                <li class="list-group-item">
                                    Total de suspeitos - {item.suspects}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        });
    }
};
export default Estado;
