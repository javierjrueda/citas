import React from "react";
import {StyleSheet} from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const PCard = ({titulo, imagen}) => {
    const route = "../../assets/img/"+imagen
    console.log(route)

    return ( 

        <Card style={styles.fullwidth}>
            <Card.Title title={titulo} />
            {/* <Card.Cover   source={ require(route) }/> */}
            {/* <Card.Cover   source={ require(`${route}`)}/> */}
            {/* <Card.Cover   source={ require(route) }/> */}
            <Card.Actions>
                <Button style={styles.button1}>Ver proyecto →</Button>
            </Card.Actions>
        </Card> 

     );
}

const styles = StyleSheet.create({

})
 
export default PCard;