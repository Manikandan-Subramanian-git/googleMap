import { ImageSourcePropType } from "react-native"

export interface ICardData{
    id:string
    title:string
    image:ImageSourcePropType
    date:string
}

export const CUSTOM_CARD_DATA:ICardData[] = [
    {
        id:"1",
        title: "eoiuroier",
        image: require('../../assets/images/brandon_griggs_e3dyvvibMkU_unsplash.jpg'),
        date: "31-Jan - 7:00 pm"
    },
    {
        id:"2",
        title: "dkfjdjk",
        image:require('../../assets/images/europeana_w5sZ5pohapM_unsplash.jpg'),
       date: "31-Jan - 4:00 pm"
    },
    {
        id:"3",
        title: ";slkd;ls",
        image: require('../../assets/images/flaviu_costin__lQPU026_ko-unsplash.jpg'),
        date: "31-Jan - 1:00 am"
    },
    {
        id:"4",
        title: "dl;fjd;fjl",
        image: require('../../assets/images/gaku_suyama_1aShpJ6mWAs_unsplash.jpg'),
        date: "31-Jan - 9:00 am"
    },
    {
        id:"5",
        title: "ndvbbvdbjkd",
        image: require('../../assets/images/gustavo_zambelli_LJh9ayGO8t8_unsplash.jpg'),
        date: "25-Feb - 2:30 pm"
    },
    {
        id:"6",
        title: "dkjfdljfoidj",
        image: require('../../assets/images/kevin_woblick_NIAlMzwwbNA_unsplash.jpg'),
        date: "16-Sep - 6:05 am"
    },
    {
        id:"7",
        title: "dkjfdljfoidj",
        image: require('../../assets/images/gaku_suyama_1aShpJ6mWAs_unsplash.jpg'),
        date: "16-Sep - 6:05 am"
    },
    {
        id:"5",
        title: "ndvbbvdbjkd",
        image: require('../../assets/images/gustavo_zambelli_LJh9ayGO8t8_unsplash.jpg'),
        date: "25-Feb - 2:30 pm"
    },
     {
        id:"8",
        title: ";slkd;ls",
        image: require('../../assets/images/europeana_w5sZ5pohapM_unsplash.jpg'),
        date: "31-Jan - 1:00 am"
    },
]