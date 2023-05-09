import { Day } from "./day.type";
import { speakerById } from "./speakers.lib";

export const days: Day[] = [
    {
      name: 'Apertura - Temas legales',
      date: 'Mayo 15 - USFQ',
      dateTime: '2022-05-15',
      speakers: [
        speakerById.DiegoJaramillo,
        speakerById.FabianJaramillo,
        speakerById.JuanFranciscoGonzalez,
        speakerById.BarbaraTeran,
        speakerById.JoseAdatty,
        speakerById.PaulNoboa,
        speakerById.AndresSanchez,
        speakerById.ChristianEspinoza,
        speakerById.FarithSimon,
        speakerById.NicolasSerrano,
        speakerById.JoseSebastianPonce,
        speakerById.MiguelVillegas,
        speakerById.AlexPadilla,
      ],
    },
    {
      name: 'Academia y Blockchain',
      date: 'Mayo 16 - USFQ',
      dateTime: '2022-05-16',
      speakers: [
        speakerById.LuisEspinosaGoded,
        speakerById.FranciscoRamos,
        speakerById.JoseDanielRubio,
        speakerById.FelipeSalgado,
        speakerById.PazGomez,
        speakerById.MauricioRubio,
        speakerById.ChristianNarvaez,
      ],
    },
    {
      name: 'Ley Fintech y DeFi',
      date: 'Mayo 17 - EPN',
      dateTime: '2022-05-17',
      speakers: [
        speakerById.NicolasSerrano,
        speakerById.PazGomez,
        speakerById.ClaudioCossio,
        speakerById.JoseLuisBenitez,
        speakerById.PaulNoboa,
        speakerById.MiguelVillegas,
        speakerById.SantiagoLeon,
      ],
    },
    {
      name: 'Desarrollo con Solidity',
      date: 'Mayo 18 - EPN',
      dateTime: '2022-05-18',
      speakers: [
        speakerById.NicolasSerrano,
        speakerById.LuisUshina,
        speakerById.JoseLuisBenitez,
        speakerById.LuisCarchi,
        speakerById.IrwinTello,
        speakerById.ErrolCartwright,
      ],
    },
    {
      name: 'Rollups y Layer 2',
      date: 'Mayo 19 - UDLA',
      dateTime: '2022-05-19',
      speakers: [
        speakerById.AltairBarahona,
        speakerById.JoseIgnacioNaranjo,
        speakerById.CrisInCrypto,
        speakerById.SantiagoLeon,
        speakerById.NicolasSerrano
      ],
    },
    {
      name: 'Clausura',
      date: 'Mayo 20 - Ocho Cafe',
      dateTime: '2022-05-19',
      speakers: [
        speakerById.NicolasSerrano,
      ],
    },
  ];
  
  
  