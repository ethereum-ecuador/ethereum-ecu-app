import { Day } from "./day.type";
import { speakerById } from "./speakers.lib";

export const days: Day[] = [
    {
      name: 'Apertura, enfoque legal',
      date: '15 de Mayo',
      dateTime: '2022-05-15',
      speakers: [
        speakerById.LegalLab,
        speakerById.DiegoJaramillo,
        speakerById.FabianJaramillo,
        speakerById.JuanFranciscoGonzalez,
        speakerById.XavierAndrade,
        speakerById.FranciscoAlmeida,
        speakerById.BarbaraTeran,
        speakerById.JoseAdatty,
        speakerById.PaulNoboa,
        speakerById.MiguelVillegas,
        speakerById.NicolasSerrano,
        speakerById.SantiagoLeon,
        speakerById.AlexPadilla,
      ],
    },
    {
      name: 'Blockchain y la Academia',
      date: '16 de Mayo',
      dateTime: '2022-05-16',
      speakers: [
        speakerById.FranciscoRamos,
        speakerById.JoseDanielRubio,
        speakerById.PazGomez,
        speakerById.MauricioRubio,
      ],
    },
    {
      name: 'DeFi y Ley Fintech',
      date: '17 de Mayo',
      dateTime: '2022-05-17',
      speakers: [
        speakerById.NicolasSerrano,
        speakerById.PazGomez,
        speakerById.JoseLuisBenitez,
        speakerById.VladimirLuna,
      ],
    },
    {
      name: 'Desarrollo con Solidity',
      date: '18 de Mayo',
      dateTime: '2022-05-18',
      speakers: [
        speakerById.NicolasSerrano,
        speakerById.LuisUshina,
        speakerById.AlexPadilla,
        speakerById.VladimirLuna,
        speakerById.JoseLuisBenitez,
      ],
    },
    {
      name: 'Rollups y Layer 2',
      date: '19 de Mayo',
      dateTime: '2022-05-19',
      speakers: [
        speakerById.RommelDeLosRios,
        speakerById.RicardoRuano,
        speakerById.AltairBarahona,
        speakerById.JoseIgnacioNaranjo,
        speakerById.WilsonYandun,
      ],
    },
  ];
  
  