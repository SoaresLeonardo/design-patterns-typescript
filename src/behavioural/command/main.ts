import { LightPoweCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz quarto');

// Command
const lightPowerCommand = new LightPoweCommand(bedroomLight);

// Constrole - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addComand('btn-1', lightPowerCommand);
smartHouseApp.execulteCommand('btn-1');
