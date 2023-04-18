class CarrierRocket {
  constructor(stages) {
    this.stages = stages.map((el) => el)
  }

  detachStage() {
    return this.stages.splice(0, 1)
  }
}

module.exports = CarrierRocket;
