class subscription {
    constructor (serviceType, frequency, cargoType, timeOfDay, timeFrame) {
        this.serviceType = serviceType;
        this.frequency = frequency;
        this.cargoType = cargoType;
        this.timeOfDay = timeOfDay;
        this.timeFrame =timeFrame
    } 
    }
    premium(timeOfDay){
        this.timeOfDay = guaranteedDelivery;

    }

    class oneTime extends subscription {
        constructor (serviceType, frequency, cargoType, timeOfDay, timeFrame) {
            super(serviceType, frequency, cargoType, timeOfDay, timeFrame);
            this.initialDiscount = this.initialDiscount;

        }

        firstTime(initialDiscount){

            this.initialDiscount = fifteenPercent;

        }
    }

    class basic extends subscription {
        constructor (serviceType, frequency, cargoType, timeOfDay, timeFrame) {
        super (serviceType, frequency, cargoType, timeOfDay, timeFrame);   
        this.referralDiscount = referralDiscount;    
        this.regularDiscount = regularDiscount;
        this.twoHourDelivery = twoHourDelivery;
    }
        refDisc(referralDiscount) {
            this.referralDiscount = twentyPercent;
        }

        regDisc(regularDiscount) {
            this.regularDiscount = tenPercent;
        }

        autoPremium(twoHourDelivery) {
            this.twoHourDelivery = guaranteed;
        }
    }    

    class premium extends basic {
        constructor (serviceType, frequency, cargoType, timeOfDay, timeFrame) {
        super (serviceType, frequency, cargoType, timeOfDay, timeFrame);    
        this.weightLimit = weightLimit;

    }
        weightDisc(weightLimit){
            this.weightLimit = unlimited;
        }

    }   
 