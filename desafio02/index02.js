// Brigde

class Device {
    turnOn() {
      throw new Error("Não implementado");
    }
    turnOff() {
      throw new Error("Não implementado");
    }
    get name() {
      return this.constructor.name;
    }
  }
  
  class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
  }
  
  class Radio extends Device {
    turnOn() {
      console.log("Rádio ligado.");
    }
    turnOff() {
      console.log("Rádio desligado.");
    }
  }
  
  // Abstração
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  // Abstração estendida
  class AdvancedRemoteControl extends RemoteControl {
    togglePower(state) {
      this.pressPowerButton(state);
    }
  }
  
  // Cliente
  const tv = new TV();
  const tvRemote = new RemoteControl(tv);
  tvRemote.pressPowerButton(true);
  tvRemote.pressPowerButton(false);
  
  const radio = new Radio();
  const radioRemote = new AdvancedRemoteControl(radio);
  radioRemote.togglePower(true);
  radioRemote.togglePower(false);