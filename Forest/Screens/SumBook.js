import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';

export default class Sumbook extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.20.10.5:3003/booking'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
            
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#82E0AA',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>
            <Text style={{color:'#000000'}}>ID: {item.CID}</Text>{'\t'} Tour: {item.GTour}</Text>
          
          <Text style={{color:'#fff'}}>Tour: {item.BTour}</Text>
          <Text style={{color:'#fff'}}>Lunch: {item.Lunch}</Text>
          <Text style={{color:'#fff'}}>Dinner: {item.Dinner}</Text>
          <Text style={{color:'#fff'}}>Date: {item.Date}</Text>
        </View>

        } 
      />
      
      
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});


{/*import "babel-polyfill";

import React from "react";
import { Dimensions, ScrollView, StatusBar, Text } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import ScrollableTabView from "react-native-scrollable-tab-view";

import {
  contributionData,
  data,
  pieChartData,
  progressChartData,
  stackedBarGraphData
} from "./data";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: "#000000",
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: "#022173",
    backgroundGradientFrom: "#022173",
    backgroundGradientTo: "#1b3fa0",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForBackgroundLines: {
      strokeDasharray: "" // solid background lines with no dashes
    }
  },
  {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
  },
  {
    backgroundColor: "#26872a",
    backgroundGradientFrom: "#43a047",
    backgroundGradientTo: "#66bb6a",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: "#000000",
    backgroundGradientFrom: "#000000",
    backgroundGradientTo: "#000000",
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
  },
  {
    backgroundColor: "#0091EA",
    backgroundGradientFrom: "#0091EA",
    backgroundGradientTo: "#0091EA",
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
  },
  {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: "#b90602",
    backgroundGradientFrom: "#e53935",
    backgroundGradientTo: "#ef5350",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: "#ff3e03",
    backgroundGradientFrom: "#ff3e03",
    backgroundGradientTo: "#ff3e03",
    color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
  }
];

export default class App extends React.Component {
  renderTabBar() {
    return <StatusBar hidden />;
  }

  render() {
    const { width } = Dimensions.get("window");
    const height = 256;
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: "center",
            fontSize: 16
          };
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          };
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
              <Text style={labelStyle}>Bezier Line Chart</Text>
              <LineChart
                bezier
                data={data}
                width={width}
                height={height}
                yAxisLabel="$"
                yAxisSuffix="k"
                chartConfig={chartConfig}
                style={graphStyle}
                verticalLabelRotation={20}
                onDataPointClick={({ value, getColor }) =>
                  showMessage({
                    message: `${value}`,
                    description: "You selected this value",
                    backgroundColor: getColor(0.9)
                  })
                }
                formatXLabel={label => label.toUpperCase()}
              />
              <FlashMessage duration={1000} />
              <Text style={labelStyle}>Progress Chart</Text>
              <ProgressChart
                data={progressChartData}
                width={width}
                height={height}
                chartConfig={chartConfig}
                style={graphStyle}
                hideLegend={false}
              />
              <Text style={labelStyle}>Bar Graph</Text>
              <BarChart
                width={width}
                height={height}
                data={data}
                yAxisLabel="$"
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Stacked Bar Graph</Text>
              <StackedBarChart
                style={graphStyle}
                data={stackedBarGraphData}
                width={width}
                height={220}
                chartConfig={chartConfig}
              />
              <Text style={labelStyle}>Stacked Bar Graph Percentile</Text>
              <StackedBarChart
                style={graphStyle}
                data={stackedBarGraphData}
                width={width}
                height={220}
                chartConfig={chartConfig}
                percentile
              />
              <Text style={labelStyle}>Pie Chart</Text>
              <PieChart
                data={pieChartData}
                height={height}
                width={width}
                chartConfig={chartConfig}
                accessor="population"
                style={graphStyle}
                backgroundColor="transparent"
                paddingLeft="15"
              />
              <Text style={labelStyle}>Line Chart</Text>
              <LineChart
                data={data}
                width={width}
                height={height}
                yAxisLabel="$"
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Contribution Graph</Text>
              <ContributionGraph
                values={contributionData}
                width={width}
                height={height}
                endDate={new Date("2016-05-01")}
                numDays={105}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Line Chart</Text>
              <LineChart
                data={data}
                width={width}
                height={height}
                yAxisLabel="$"
                segments={5}
                chartConfig={chartConfig}
                style={graphStyle}
                hidePointsAtIndex={[0, data.datasets[0].data.length - 1]}
              />
              <Text style={labelStyle}>
                Line Chart with shadow background as line color
              </Text>
              <LineChart
                bezier
                data={data}
                width={width}
                height={height}
                yAxisLabel="$"
                segments={5}
                chartConfig={{
                  ...chartConfig,
                  useShadowColorFromDataset: true
                }}
                style={graphStyle}
                hidePointsAtIndex={[0, data.datasets[0].data.length - 1]}
              />

              <Text style={labelStyle}>Scrollable Line Chart</Text>
              <LineChart
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June"
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                withInnerLines={false}
                withDots={false}
                withShadow={false}
                withScrollableDot={true}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundGradientFrom: "#1F1F1F",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => "#FF5500",
                  labelColor: (opacity = 1) => "#A0A0A0",
                  linejoinType: "round",

                  scrollableDotFill: "#fff",
                  scrollableDotRadius: 6,
                  scrollableDotStrokeColor: "#FF5500",
                  scrollableDotStrokeWidth: 3,

                  scrollableInfoViewStyle: {
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "#121212",
                    borderRadius: 2
                  },
                  scrollableInfoTextStyle: {
                    color: "#C4C4C4",
                    marginHorizontal: 4,
                    flex: 1,
                    textAlign: "center"
                  },
                  scrollableInfoSize: { width: 65, height: 30 },
                  scrollableInfoOffset: 15
                }}
                style={{
                  marginVertical: 8
                }}
              />
            </ScrollView>
          );
        })}
      </ScrollableTabView>
    );
  }
}*/}