import { Day } from "@/models/day.model";
import { Speaker } from "@/models/speaker.model"
import { speakerById } from "@/data/speakers.data";

export const days: Day[] = [
    {
      name: 'Opening Day',
      date: '15 de Mayo',
      dateTime: '2022-05-15',
      speakers: [
        speakerById.LegalLab,
        speakerById.DiegoJaramillo,
        speakerById.XavierAndrade,
        speakerById.FranciscoAlmeida,
        speakerById.JoseAdatty,
        speakerById.FelipeOleas,
        speakerById.MiguelVillegas,
        speakerById.JoseSebastianPonce,
        speakerById.NicolasSerrano,
        speakerById.AlexPadilla,
      ],
    },
    {
      name: 'Blockchain y la Academia',
      date: '16 de Mayo',
      dateTime: '2022-05-16',
      speakers: [
        speakerById.AlexPadilla,
      ],
    },
    {
      name: 'DeFi y Ley Fintech en Ecuador',
      date: '17 de Mayo',
      dateTime: '2022-05-17',
      speakers: [
        speakerById.AlexPadilla,
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
        speakerById.AlexPadilla,
        speakerById.NicolasSerrano,
        speakerById.LuisUshiña,
        speakerById.VladimirLuna,
        speakerById.JoseLuisBenitez,
      ],
    },
    {
      name: 'Rollups y Layer 2',
      date: '19 de Mayo',
      dateTime: '2022-05-19',
      speakers: [
        speakerById.AlexPadilla,
        speakerById.NicolasSerrano,
        speakerById.LuisUshiña,
        speakerById.VladimirLuna,
        speakerById.JoseLuisBenitez,
      ],
    },
  ];
  
  