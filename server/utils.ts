import express from 'express';

export class Utils {
  constructor() {}

  public generateGraph = (): [] => {
    const chartData: any = [];
    for (let i = 0; i < 8 + Math.floor(Math.random() * 10); i++) {
      chartData.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
    }
    console.log(chartData);
    return chartData;
  }
}
export default Utils;
