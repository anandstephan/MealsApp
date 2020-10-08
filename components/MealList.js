import React from 'react'
import {Text,View,FlatList, StyleSheet} from 'react-native'
import MealItem from './MealItem'

const MealList = (props) =>{


    const renderMealItem = itemData =>{
        return <MealItem 
        title={itemData.item.title} 
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
         onSelectMeal={()=>{props.navigation.navigate('MealDetail',{mealId:itemData.item.id})}}/>
    }

    return (
        <View style={styles.list}>
            <FlatList 
            data={props.listData} 
            renderItem={renderMealItem}
            style={{width:'100%'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    list:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }   
   })

export default MealList