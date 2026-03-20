function generateStarRating(rating) {
    let stars = "";
    for(let i=0;i<rating;i++){
        stars += "*";
    }
    console.log(stars);
}

generateStarRating(3);