import * as d3 from 'd3'

// const data= [12,18,20,25,10];
const url ="https://udemy-react-d3.firebaseio.com/ages.json";
export default class D3Chart{
    constructor(element){
        
        const svg =  d3.select(element)
        .append("svg")
        .attr("height",500)
        .attr("width",500)

        d3.json(url).then(agesData=>{
            const rects = svg.selectAll("rect")
                         .data(agesData)

        rects.enter().append("rect")
            .attr("x",(d,i)=>i*100)
            .attr("y",50)
            .attr("width",50)
            .attr("height",d=>d.age*10)
            .attr("fill","blue")
        })

       

        // data.forEach((d,i)=>{
        //     svg.append("rect")
        //     .attr("x",i*100)
        //     .attr("y",50)
        //     .attr("width",50)
        //     .attr("height",d)
        //     .attr("fill","grey")
        // });
    }
}