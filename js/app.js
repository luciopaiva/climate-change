
class ClimateChangeApp {

    constructor () {
        this.model = new ClimateChangeModel();

        DataBinder.setOnce('coal-co2-weight', this.model.fuelSources.coal.co2WeightInGrams);
        DataBinder.setOnce('coal-energy', this.model.fuelSources.coal.energyInKcal);
        DataBinder.setOnce('coal-co2-intensity', MathUtil.floatToStr(this.model.fuelSources.coal.co2Intensity));

        DataBinder.setOnce('natural-gas-co2-weight', this.model.fuelSources.naturalGas.co2WeightInGrams);
        DataBinder.setOnce('natural-gas-energy', this.model.fuelSources.naturalGas.energyInKcal);
        DataBinder.setOnce('natural-gas-co2-intensity',
            MathUtil.floatToStr(this.model.fuelSources.naturalGas.co2Intensity));

        DataBinder.setOnce('oil-co2-weight', this.model.fuelSources.oil.co2WeightInGrams);
        DataBinder.setOnce('oil-energy', this.model.fuelSources.oil.energyInKcal);
        DataBinder.setOnce('oil-co2-intensity', MathUtil.floatToStr(this.model.fuelSources.oil.co2Intensity));

        DataBinder.setOnce('coal-annual-energy-percentage',
            MathUtil.percToStr(this.model.fuelSources.coal.percentageOfGlobalProduction));
        DataBinder.setOnce('coal-annual-energy-watt-hours',
            MathUtil.floatToStr(this.model.fuelSources.coal.globalProductionInPWh));
        DataBinder.setOnce('coal-annual-co2-emission',
            MathUtil.floatToStr(this.model.fuelSources.coal.co2EmissionInPetaGrams));

        DataBinder.setOnce('natural-gas-annual-energy-percentage',
            MathUtil.percToStr(this.model.fuelSources.naturalGas.percentageOfGlobalProduction));
        DataBinder.setOnce('natural-gas-annual-energy-watt-hours',
            MathUtil.floatToStr(this.model.fuelSources.naturalGas.globalProductionInPWh));
        DataBinder.setOnce('natural-gas-annual-co2-emission',
            MathUtil.floatToStr(this.model.fuelSources.naturalGas.co2EmissionInPetaGrams));

        DataBinder.setOnce('oil-annual-energy-percentage',
            MathUtil.percToStr(this.model.fuelSources.oil.percentageOfGlobalProduction));
        DataBinder.setOnce('oil-annual-energy-watt-hours',
            MathUtil.floatToStr(this.model.fuelSources.oil.globalProductionInPWh));
        DataBinder.setOnce('oil-annual-co2-emission',
            MathUtil.floatToStr(this.model.fuelSources.oil.co2EmissionInPetaGrams));

        DataBinder.setOnce('total-amount-co2', MathUtil.floatToStr(this.model.totalAmountCo2InPg));
    }
}
