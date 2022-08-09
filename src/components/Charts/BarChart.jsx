import React from 'react'
import Plot from 'react-plotly.js'


const BarChart = () => {
  var x = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']

  var y = ['0','0','0','0','0','0','294','3','0','3','0','3','0',]
  var z = ['0','0','0','0','0','0','100','3','0','3','0','3','0',]
  var w = ['0','0','0','0','0','0','194','3','0','3','0','3','0',]
  return (
    <div>
      <Plot
          data = {[
          {
            histfunc: "sum",
            y,
            x,
            type: "histogram",
            name: "revenus",
            marker:{
              color:'rgb(54,127,180)'
            }
          },
          {
            histfunc: "sum",
            y:z,
            x,
            type: "histogram",
            name: "dépenses",
            marker:{
              color:'rgb(123,33,76)'
            }
          },
          {
            histfunc: "sum",
            y:w,
            x,
            type: "histogram",
            name: "économies",
            marker:{
              color:'rgb(57,180,54)'
            }
          }]}
          className="w-full rounded-xl overflow-hidden"
          />
    </div>
  )
}

export default BarChart