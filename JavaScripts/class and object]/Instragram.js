class InstagramUser{
    constructor(username,follower,following,post,location,relationshipStatus){
        this.username=username
        this.follower=follower
        this.following=following
        this.post=post
        this.location=location
        this.relationshipStatus=relationshipStatus
    }
    fullDetails=()=>`UserName is = ${this.username},who is located in ${this.location} followers ${this.follower} following= ${this.following} and is currently ${this.relationshipStatus}`
    userActivity = () =>{
            if(this.post<=100){
                return `user is InActive`;
            }else if(this.post>=500 ){
                return `user is Active`;
            }else{
                return `user is Addicted`;
            }
    }
    

    Ustatus =()=>{
        if(this.relationshipStatus !='single'){
             return `single Never mind`
        }else{
           return this.fullDetails();
        }
    }
}
let inst = new InstagramUser('Ramaya',100,502,200,'bangaluru','single');
inst.fullDetails()
