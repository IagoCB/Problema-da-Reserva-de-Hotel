function getCheapestHotel (input) { //DO NOT change the function's name.
    try{
        if(input.includes("Reward")){
            let lakewood = 0 ,bridgewood = 0,ridgewood = 0
            let days = input.replace("Reward: ", "")
            days = days.split(",")

            for(let i = 0; i < days.length; i++){
                if(days[i].includes("sat") || days[i].includes("sun")){
                    lakewood += 80
                    bridgewood += 50
                    ridgewood += 40
                }
                else{
                    lakewood += 80
                    bridgewood += 110
                    ridgewood += 100
                }
            }  

            if(lakewood < bridgewood && lakewood < ridgewood){
                return "Lakewood"
            }
            else if(bridgewood < ridgewood){
                return "Bridgewood"
            }
            else return "Ridgewood"
            
        }
        else if(input.includes("Regular")){
            let lakewood = 0 ,bridgewood = 0,ridgewood = 0
            let days = input.replace("Regular: ", "")
            days = days.split(",")

            for(let i = 0; i < days.length; i++){
                if(days[i].includes("sat") || days[i].includes("sun")){
                    lakewood += 90
                    bridgewood += 60
                    ridgewood += 150
                }
                else{
                    lakewood += 110
                    bridgewood += 160
                    ridgewood += 220
                }
            }  
                      
            if(lakewood < bridgewood && lakewood < ridgewood){
                return "Lakewood"
            }
            else if(bridgewood < ridgewood){
                return "Bridgewood"
            }
            else return "Ridgewood"
        }
        else{
            return "Client's type is incorrect"
        }       
    } catch (e){
        return e
    }
}

exports.getCheapestHotel = getCheapestHotel
