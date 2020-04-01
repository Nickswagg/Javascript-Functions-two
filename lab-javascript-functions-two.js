var slideshow = {

    photoList : ['slide-one', 'slide-two', 'slide-three', 'slide-four'],
   
    currentPhotoIndex : 0,
 
    // Next Function
   function nextPhoto(){
 
       if (this.currentPhotoIndex < this.photoList.length) {
 
         console.log(this.photoList[this.currentPhotoIndex+1]); 
         return this.currentPhotoIndex ++ ;
       }
       else{
          
         console.log("End of slideshow");
       }
 
   },
 
   // Previous Function
   function prevPhoto(){
 
       if ( this.currentPhotoIndex > 0) {
 
         console.log(this.photoList[this.currentPhotoIndex-1]);
         return this.currentPhotoIndex-- ;
       }
       else{
 
           console.log("End of Slideshow");
       }
 
   },
 
   // Get Current Photo
   function getCurrentPhoto(){
       console.log(this.photoList[this.currentPhotoIndex]); 
       return this.photoList[this.currentPhotoIndex];
   },
 }
 
 console.log(slideshow.prevPhoto())