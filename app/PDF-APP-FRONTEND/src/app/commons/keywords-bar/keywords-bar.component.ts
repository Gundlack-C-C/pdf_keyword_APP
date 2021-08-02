import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';
import { KeywordAnalytics } from '../models';
import * as d3 from 'd3';


function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

@Component({
  selector: 'app-keywords-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './keywords-bar.component.html',
  styleUrls: ['./keywords-bar.component.css']
})
export class KeywordsBarComponent implements OnInit {
  @Input() keywords: KeywordAnalytics[]
  id = revisedRandId();

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      window.setTimeout(()=>{
        this.renderChart()
      }, 100)
  }
  renderChart() {
    const id = this.id;
    const data = this.keywords
    const keys: string[] = data.map((item: KeywordAnalytics)  => {
        return item.key;
    });
    const values: number[] = data.map((item: KeywordAnalytics) => {
        return item.score;
    })
    console.log(`Render Chart for ${id}`);

    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 30, bottom: 40, left: 90 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(`#${id}`)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    let max = Math.max.apply(Math, values.map(function (o) { return o; }))
    // Add X axis
    var x = d3.scaleLinear()
        .domain([0, max])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
        
    // Y axis
    var y = d3.scaleBand()
        .range([0, height])
        .domain(keys.map(function (o) { return o; }))
        .padding(.1);

    svg.append("g")
        .call(d3.axisLeft(y))

    //Bars
    svg.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0))
        .attr("y", function (d: KeywordAnalytics): number { return y(d.key) as number; })
        .attr("width", function (d: KeywordAnalytics) { return x(d.score); })
        .attr("height", y.bandwidth())
        .attr("fill", "#69b3a2")
  }

}
