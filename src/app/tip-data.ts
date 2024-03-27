export class TipData {
  costOfService: number = 20.1111;
  serviceQuality: number = 0.15;
  roundUp: boolean = false;


  roundToDecimals = (num: number, decimals: number) => {
    const multiplier = 10 ** decimals;
    return Math.round((num * multiplier)) / multiplier;
  }
  calculateTipAmount = () => {
    let baseTip = this.costOfService * (this.serviceQuality);
    console.log("base tip : " + baseTip);
    let tipAmount = this.roundUp ? Math.ceil(baseTip) : (this.roundToDecimals(baseTip,2));

    console.log("final tip : " + tipAmount);
    return tipAmount
  }
  calculateFinalAmount = () => {
    return this.roundUp ? Math.ceil(this.costOfService) : this.roundToDecimals(this.costOfService + this.calculateTipAmount(),2);
  }

}
