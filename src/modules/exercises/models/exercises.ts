import { v4 as uuidv4 } from "uuid";

export class Exercise {

    public exerciseId: string;
    public series: number;
    public reps: number;
    public weight: number;
    public time: number;
    public name: string;
    public description: string;
    public image: string;
    public video: string;

    constructor(series: number, reps: number, weight: number, time: number,
                name: string, description: string, image: string, video: string
    ) {

        this.exerciseId = uuidv4();
        this.series = series;
        this.reps = reps;
        this.weight = weight;
        this.time = time;
        this.name = name;
        this.description = description;
        this.image = image;
        this.video = video;
    }
}
