import React, { Component } from 'react';
import * as d3 from 'd3';
import filterHooks  from "./utils/utilFn.js";

let mouseEffects = {

  expandToolTip : function (d, tooltipDiv) {
    d3.select(this).transition(100).duration(20).attr('r', 25);

    tooltipDiv.transition().duration(50).style('opacity', 0.9);

    if (d.data.stateSnapshot.children[0].name === 'RecoilRoot') {
      console.log('enter');
      this.isRecoil = true;
    }
    
    if (!this.isRecoil) {
      tooltipDiv
        .html(util.filterHooks(d.data.stateSnapshot.children), this)
        .style('left', d3.event.pageX - 90 + 'px')
        .style('top', d3.event.pageY - 65 + 'px');
    } else {
      tooltipDiv
        .html(
          'Load Time : ' +
            JSON.stringify(
              d.data.stateSnapshot.children[0].componentData.actualDuration
            ).substring(0, 5) +
            ' ms',
          this
        )
        .style('left', d3.event.pageX - 90 + 'px')
        .style('top', d3.event.pageY - 65 + 'px');
    }
  },

  transitionOut : function (d, tooltipDiv) {
    d3.select(this).transition().duration(300).attr('r', 15);

    tooltipDiv.transition().duration(400).style('opacity', 0);
  }

}

export default mouseEffects