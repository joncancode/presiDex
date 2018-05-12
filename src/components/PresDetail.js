import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const PresDetail = ({person}) =>  {
    const {number, president, image, birth_year, wiki} = person
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
            <CardSection>
                <Button onPress={() => Linking.openURL(wiki)} />
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
