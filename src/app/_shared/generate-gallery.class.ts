export class Gallery {
  public static generateImages(zdjecia, img_path){
    const array = [];
    for(var i = 0; i < zdjecia.length; i++){
      const temp = {};
      temp['small'] = img_path+zdjecia[i];
      temp['medium'] = img_path+zdjecia[i];
      temp['big'] = img_path+zdjecia[i];
      array.push(temp);
    }
    return array;
  }
}
