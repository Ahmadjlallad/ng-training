export class Recipe {
  name: string;
  description: string;
  imgPath: string

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
  }
}
