import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pie-chart',
  template: '<div #chartDom style="width: 100%; height: 400px;"></div>'
})
export class PieChartComponent implements OnInit {
  @Input() perfectCount: number;
  @Input() unperfectCount: number;

  @ViewChild('pieChart') pieChartElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart(): void {
    const chartDom = document.getElementById('pieChart');
    const pieChart = echarts.init(chartDom);
  
    const option = {
      title: {
        text: 'Perfect vs Unperfect Counts',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: 'Count',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: this.perfectCount, name: 'Perfect' },
            { value: this.unperfectCount, name: 'Unperfect' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  
    pieChart.setOption(option);
  }
}  