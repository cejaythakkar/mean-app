export class About {
    id:number;
    title: string;
    subtitle: string;
    year: string;
    place: string;
    country: string;
    description: string;
    
    constructor(id:number,
        title:string
        ,subtitle:string
        ,year:string
        ,place:string
        ,country:string,
        description:string){
            this.id = id,
            this.title = title,
            this.subtitle = subtitle,
            this.year = year,
            this.place = place,
            this.country = country,
            this.description = description;
        }
}