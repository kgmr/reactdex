import React from 'react';
import { Entry } from './FrontComponents';
import { DexOption } from './FrontComponents';
import {dexApi} from '../data/Api';
import { Form } from 'react-bootstrap';

const data = new dexApi();
//let currentDexData = api.getPokedex('kanto');
export class Front  extends React.Component {
    render(){
        return(
        <Form>
            <Form.Control as="select">
                {data.dexes.map((dex) => (
                    <DexOption value={dex.api} name={dex.name}></DexOption>
                ))}

            </Form.Control>

        </Form>
        );
    }
}