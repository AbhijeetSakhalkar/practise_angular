export class LikeComponent {
    constructor(private _likes: number, private _isLiked: boolean){
    }

    onClick(){
        if(this._isLiked){
            this._likes = this._likes - 1;
        }
        else{
            this._likes = this._likes + 1;
        }
        this._isLiked = !this._isLiked;

        console.log("likes: "+this._likes+ " isLiked: "+ this._isLiked);
    }
}