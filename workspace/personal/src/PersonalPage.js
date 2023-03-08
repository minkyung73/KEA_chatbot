import React from "react";
import img1 from "./img/IMG_6296.JPG"
import teemothee from "./img/IMG_3355.JPG"

function User({userData}) {
    return (
        <div>
            <table>
                <tr>
                    <th>email</th>
                    <td>{userData.email}</td>
                </tr>
                <tr>
                    <th>address</th>
                    <td>{userData.address}</td>
                </tr>
            </table>
            <h4>Github | Notion</h4>
        </div>
    )
}

function ImageBox() {
    return (
        <div className="img-container">
            <img src={teemothee} />
        </div>
    );
}

function PersonalPage() {
    const users = {email: 'minkyung7365@gmail.com', address: 'Seongam-si, Gyeongi-do'};
    return (
        <div style={{display: 'flex'}}>
            <div align="center" className="div-left">
                <h1>Kim minkyung</h1>
                <User userData={users}/>
            </div>
            <div className="div-right">
                <ImageBox />
            </div>
        </div>
    );
};

export default PersonalPage;