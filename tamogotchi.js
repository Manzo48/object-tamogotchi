const tamogotchi = {
  name: 'egg',
  meal: 1,
  energy: 2,
  mood: 4,


  getStatus: function(){
    let eatingMessage = '';
    let changerMessage = '';
    let reJoice = '';
    if (this.meal > 3){
        eatingMessage = "Я не голоден"
    } else{
        eatingMessage = "Я голоден"
    }
    if (this.energy > 3){
        changerMessage ="Я не хочу спать"
    }else {
        changerMessage = "Я хочу спать"
    }
    if (this.mood > 3){
        reJoice = "Мне весело"
    }else {
        reJoice = "Мне скучно"
    }
    if (this.eating <= 0 || this.energy <= 0 || this.mood <= 0){
        console.log( this.name + " УМЕР")

    } else {
        console.log(tamogotchi.name + ' ' + eatingMessage + ' ' + tamogotchi.meal + ' ' + changerMessage + " " + tamogotchi.energy + ' ' + reJoice +  " " + tamogotchi.mood)

    }
  },
  setName: function(name){
    return tamogotchi.name = name
  },
  eating: function(){
    if (this.meal < 5){
        tamogotchi.meal++
    }

    tamogotchi.mood--
  },
  recharge: function(){
    if (this.energy < 5){
        tamogotchi.energy++
    }
    tamogotchi.meal--
  },
  rejoice: function(){
    if(this.mood < 5){
        tamogotchi.mood++
    }
    tamogotchi.energy--
  },
  
  reset: function(){
    tamogotchi.mood = 3;
    tamogotchi.meal = 3;
    tamogotchi.energy = 3;
  }
}

tamogotchi.setName('Manzo')



