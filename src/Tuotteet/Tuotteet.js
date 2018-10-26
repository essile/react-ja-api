import React, { Component } from 'react';
import Tuotelista from './Tuotelista';
import { haeLista, haeHaetutTuotteet } from '../ServiceClient';
import EtsintäForm from './EtsintäForm';
import { Table } from 'reactstrap';

class Tuotteet extends Component {

    state = { listatuotteista: [] }

    componentDidMount() {
        this.haeListaJaPäivitä();
    }

    // haeListaJaPäivitä = () => {
    //     haeLista(function (lista) {
    //         console.log("päivitetään lista:");
    //         // console.dir(lista);
    //         this.setState({ listatuotteista: lista });
    //     }.bind(this));
    // }
    haeListaJaPäivitä = () => {
        haeLista(function (lista) {
            console.log("päivitetään lista:");
            // console.dir(lista);
            this.setState({ listatuotteista: lista });
        }.bind(this));
    }

    etsiTuotetta = (tuote) => {
        console.log("välitetty object:");
        console.dir(tuote);
        haeHaetutTuotteet(tuote, function (hakutulos) {
            console.log("päivitetään hakulistaa");
            this.setState({ listatuotteista: hakutulos });
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h2>Tietokannassa olevat tuotteet:</h2>
                <EtsintäForm etsiTuote={this.etsiTuotetta} /><br/>
                <input type="button" value="Kaikki tuotteet" onClick={this.haeListaJaPäivitä}/><br/>
                <br />
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Tuotteen nimi</th>
                            <th>Tyyppi</th>
                            <th>Tuoteryhmä</th>
                            <th>Hinta</th>
                        </tr>
                    </thead>

                    <Tuotelista lista={this.state.listatuotteista} />

                </Table>
            </div>
        );
    }
}

export default Tuotteet;