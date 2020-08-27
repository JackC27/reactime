import React, { Component } from 'react';
import * as d3 from 'd3';
import {filterHooks} from "./utils/utilFn.js";

let stylingEffects = {
  colors : [
    '#95B6B7',
    '#475485',
    '#519331',
    '#AA5039',
    '#8B2F5F',
    '#C5B738',
    '#858DFF',
    '#FF8D02',
    '#FFCD51',
    '#ACDAE6',
    '#FC997E',
    '#CF93AD',
    '#AA3939',
    '#AA6C39',
    '#226666',
    '#2C4870',
  ],

  stylingOne : function(d, this.colors){
      
    let loadTime = d.data.stateSnapshot.children[0].componentData.actualDuration;

    if (loadTime !== undefined) {
      if (loadTime > 16) {
        return '#ff0000';
      }
    }

    if (d.data.branch < colors.length) {
      return colors[d.data.branch];
    }
    let indexColors = d.data.branch - colors.length;
    while (indexColors > colors.length) {
      indexColors -= colors.length;
    }
    return colors[indexColors];
  }

}



export default stylingEffects;