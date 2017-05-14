
class FuelSource {
    /**
     * @param {ClimateChangeModel} climateChangeModel
     * @param {Number} co2WeightInGrams the amount of CO2 produced per gram of fuel source
     * @param {Number} energyInKcal energy produced per gram of fuel source
     * @param {Number} percentageOfGlobalProduction how much this source contributes to world production
     */
    constructor (climateChangeModel, co2WeightInGrams, energyInKcal, percentageOfGlobalProduction) {
        this.co2WeightInGrams = co2WeightInGrams;
        this.energyInKcal = energyInKcal;
        this.percentageOfGlobalProduction = percentageOfGlobalProduction;

        /** The amount of CO2 (in grams) released for each unit of energy produced */
        this.co2Intensity = this.co2WeightInGrams / this.energyInKcal;
        this.globalProductionInPWh =
            climateChangeModel.globalAnnualEnergyConsumptionInPWh * this.percentageOfGlobalProduction;
        this.co2EmissionInPetaGrams = MathUtil.wattHourToKcal(this.globalProductionInPWh) * this.co2Intensity;
    }
}

class ClimateChangeModel {

    constructor () {
        this.globalAnnualEnergyConsumptionInPWh = 157.5;  // 157.5 * 1e15 Wh
        this.fuelSources = {
            coal: new FuelSource(this, 3.7, 7.9, .286),
            naturalGas: new FuelSource(this, 2.75, 13, .212),
            oil: new FuelSource(this, 3.09, 11.5, .313)
        };
        this.totalAmountCo2InPg = this.fuelSources.coal.co2EmissionInPetaGrams +
            this.fuelSources.naturalGas.co2EmissionInPetaGrams +
            this.fuelSources.oil.co2EmissionInPetaGrams;
    }
}
