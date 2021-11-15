import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'

import Data from '../servces/Data'
const { width, height } = Dimensions.get('window')
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from 'recyclerlistview'

const Main = () => {
  const dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2
  }).cloneWithRows(Data)

  const layoutProvider = new LayoutProvider(
    (index) => {
      let size = {
        w: dataProvider.getDataForIndex(index).image_type,
        h: dataProvider.getDataForIndex(index).height,
      }
      return size
    },
    (type, dim) => {
      if (type.w === 'FULL_WIDTH') {
        dim.width = width
        dim.height = type.h
      }
      if (type.w === 'HALF_WIDTH') {
        dim.width = width / 2
        dim.height = type.h
      }
    }
  )

  const rowRenderer = (type, item) => {
    if (type.w === 'FULL_WIDTH') {
      return (
        <TouchableOpacity activeOpacity={0.4}>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Image
              style={{ width: '100%', height: type.h - 10 }}
              source={{
                uri: item.url,
              }}
            />
            <View
              style={{
                backgroundColor: 'grey',
                width: 100,
                borderRadius: 2,
                zIndex: 10,
                marginTop: -30,
                marginLeft: width - 130,
                padding: 2,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '400' }}>
                {item.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    if (type.w === 'HALF_WIDTH') {
      return (
        <TouchableOpacity activeOpacity={0.4}>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Image
              style={{ width: width / 2, height: type.h - 10 }}
              source={{
                uri: item.url,
              }}
            />
            <View
              style={{
                backgroundColor: 'grey',
                width: 100,
                borderRadius: 2,
                zIndex: 10,
                marginTop: -30,
                marginLeft: 10,
                padding: 2,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '400' }}>
                {item.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
  }
  return (
    <RecyclerListView
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      rowRenderer={rowRenderer}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default Main
