<script setup>
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  DataZoomComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { shallowRef } from 'vue';

use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer
])

let options = {"title":{"left":"center","text":"Tootip and dataZoom on Mobile Device"},"legend":{"top":"bottom","data":["Intention"]},"tooltip":{"triggerOn":"none"},"toolbox":{"left":"center","itemSize":25,"top":55,"feature":{"dataZoom":{"yAxisIndex":"none"},"restore":{}}},"xAxis":{"type":"time","axisPointer":{"value":"2016-10-7","snap":true,"lineStyle":{"color":"#7581BD","width":2},"label":{"show":true,"backgroundColor":"#7581BD"},"handle":{"show":true,"color":"#7581BD"}},"splitLine":{"show":false}},"yAxis":{"type":"value","axisTick":{"inside":true},"splitLine":{"show":false},"axisLabel":{"inside":true,"formatter":"{value}\n"},"z":10},"grid":{"top":110,"left":15,"right":15,"height":160},"dataZoom":[{"type":"inside","throttle":50}],"series":[{"name":"Fake Data","type":"line","smooth":true,"symbol":"circle","symbolSize":5,"sampling":"average","itemStyle":{"color":"#0770FF"},"stack":"a","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(58,77,233,0.8)"},{"offset":1,"color":"rgba(58,77,233,0.3)"}],"x":0,"y":0,"x2":0,"y2":1,"type":"linear","global":false}},"data":[["2016-10-4",47],["2016-10-5",55],["2016-10-6",55],["2016-10-7",62],["2016-10-8",72],["2016-10-9",63],["2016-10-10",71],["2016-10-11",68],["2016-10-12",62]]},{"name":"Fake Data","type":"line","smooth":true,"stack":"a","symbol":"circle","symbolSize":5,"sampling":"average","itemStyle":{"color":"#F2597F"},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(213,72,120,0.8)"},{"offset":1,"color":"rgba(213,72,120,0.3)"}],"x":0,"y":0,"x2":0,"y2":1,"type":"linear","global":false}},"data":[["2016-10-4",31],["2016-10-5",29],["2016-10-6",20],["2016-10-7",12],["2016-10-8",5],["2016-10-9",7],["2016-10-10",3],["2016-10-11",1],["2016-10-12",1]]}]};
const option = shallowRef(options);

</script>


<template>
    <div style="height: 600px; width: 600px;">
        <v-chart
    class="chart" 
    :option="option"
    autoresize
    />
    </div>


</template>