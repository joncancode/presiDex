import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const PresDetail = ({person}) =>  {
    const {number, president, image} = person
    const {imageStyle, headerContentStyle, imageContainerStyle, headerTextStyle, bigImageStyle} = styles

    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image style={imageStyle} source={{uri: image}}/>
                </View>
            <View style={headerContentStyle}>
            <Text>no. {number}</Text>
            <Text style={headerTextStyle}>{president}</Text>
            </View>
            </CardSection>
            <CardSection>
                <Image style={bigImageStyle} source={{uri: image}}/>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 50,
        width: 50
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }, 
    bigImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default PresDetail;
