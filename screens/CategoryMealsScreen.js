import React from 'react'
import { render } from 'react-dom'
import {Button, FlatList, StyleSheet, Text,View} from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props =>{
    const catId = props.route.params.categoryId
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
     setTimeout(function(){
        props.navigation.setOptions({title:selectedCategory.title})  //change header Dynamically
     },0.01)

     const renderMealItem = itemData =>{
         return(<View><Text>{itemData.item.title}</Text></View>)
     }

     const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0)


    return (
        <View style={styles.screen}>
            <FlatList data={displayMeals} renderItem={renderMealItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
 screen:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
 }   
})

export default CategoryMealsScreen