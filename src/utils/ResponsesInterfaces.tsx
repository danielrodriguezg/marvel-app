export interface IActionInterface{
    type: string,
    payload: any
}

export interface IResultCharacters {
    id: number,
    name: string,
    description: string,
    modified: string,
    thumbnail: IImage,
    resourceURI: string,
    comics: IItems,
    series: IItems,
    stories: IItems,
    events: IItems
}
export interface IItem {
    resourceURI: string,
    name: string
}
export interface IItems {
    available: number,
    collectionURI: string,
    items: IItem[]
    returned: number,
}

export interface IResponseCharacters {
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: IResultCharacters[]
    }
}

export interface IResponseComic{
    code:number,
    status:string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    data: IResultComicData
}
export  interface  IResultComicData{
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: IComicResult[],

}
export interface IComicResult{
    id: number,
    digitalId: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
    modified: string,
    isbn: string,
    upc: string,
    diamondCode: string,
    ean: string,
    issn: string,
    format: string,
    pageCount: number,
    textObject: IComicTextObjects[],
    resourceURI: string,
    urls: IComicURL[],
    series: IItem,
    variants: IItem[],
    collections: IItem[],
    collectedIssues: IItem[],
    dates: IComicDate[],
    prices: IComicPrices[],
    thumbnail: IImage,
    images: IImage[],
    stories: IItems,
    events: IItems,
    creators: IItems,
    characters: IItems
}
export interface IComicTextObjects{
    type: string,
    language: string,
    text: string
}
export interface IComicURL{    
    type: string,
    url: string
}
export interface IComicDate{
    type: string,
    date: string
}
export interface IComicPrices{
    type: string,
    price: number
}
export interface IImage{
    path: string,
    extension: string
}