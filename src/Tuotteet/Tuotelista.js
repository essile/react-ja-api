import React, { Component } from 'react';

class Tuotelista extends Component {

    render() {

        var kaikkiTuotteet = [].concat(this.props.lista)
        // concat luo uuden listan, jotta alkuperäinen ei muutu
        .sort((a,b) => a.hinta - b.hinta )        
        .map(function (item) {
            return (<Tuote
                // nimi={item.nimi}
                // tyyppi={item.tyyppi}
                // tuoteryhmä={item.tuoteryhmä}
                // hinta={item.hinta}
                // id={item.tuote_id}
                tuote={item}
                key={item.tuote_id} />)
        });
        console.dir(kaikkiTuotteet);

        console.log("Renderöidään näkyviin");
        return (
            <tbody>
                {kaikkiTuotteet}
            </tbody>
        );
    }
}

export default Tuotelista;


class Tuote extends Component {
    render() {
        let t = this.props.tuote;
        return (
            <tr>
                <td>{t.nimi}</td>
                <td>{t.tyyppi}</td>
                <td>{t.tuote_id}</td>
                <td>{t.hinta}</td>
            </tr>
        );
    }
}