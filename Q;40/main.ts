function make_album(artist:string,tittle:string,tracks?:number){
    let album={artist,tittle}
    if(tracks){album[`tracks`]=tracks}
    return album
}
console.log(make_album("Artist One","The First Album"));
console.log(make_album("Artist two","The Second Album"));
console.log(make_album("Artist Three","The Third Album" ));