import React from 'react';
import { Entry } from './FrontComponents';
import { DexOption } from './FrontComponents';
import {dexApi} from '../data/Api';
import { Col, Form, Row } from 'react-bootstrap';

const api = new dexApi();
//let currentDexData = api.getPokedex('kanto');
export class Front  extends React.Component<{}, {currentRegion:string,dexData:any}> {
    setDexData(region:string){
        api.getPokedex(region).then((response:any) =>{
            this.setState({dexData: response.data[api.entries]});
        });
    }

    constructor(props:any){
        super(props);
        this.state = {
        dexData:  [],
        currentRegion: '',
    }

}
selectHandler = (event:any) => {
    this.setState({currentRegion: event.target.value}, () =>
      this.setDexData(this.state.currentRegion));
}
  componentDidMount(){
    this.setState({currentRegion: api.dexes[0].api}, () =>
      this.setDexData(this.state.currentRegion));
  }
    render(){
        return(
            <div>
            <Row>
                <Col lg={12}>
        <Form>
            <Form.Control onChange={this.selectHandler} as="select">
                {api.dexes.map((dex) => (
                    <DexOption key={dex.api} value={dex.api} name={dex.name}></DexOption>
                ))
                }

            </Form.Control>
        </Form>
                </Col>
        </Row>

            <Row>
                <Col lg={12}>
                {this.state.dexData.map((dex:any) => (
                            <Entry key={dex.entry_number} color="primary" number={dex.entry_number} name={dex.pokemon_species.name} > </Entry>
                ))
                }
                </Col>

            </Row>
            </div>

        );
    }
}