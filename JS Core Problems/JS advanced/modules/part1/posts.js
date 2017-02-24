
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
        }
        toString(){
            return `Post: ${this.title}
Content: ${this.content}`
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content, likes, dislikes){
            super(title,content);
            this.likes=Number(likes);
            this.dislikes=Number(dislikes);
            this.comments=[];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let ratAndCom=`\nRating: ${this.likes-this.dislikes}`
            if(this.comments.length>0){
                ratAndCom+='\nComments:';
                for(let i of this.comments){
                    ratAndCom+=`\n * ${i}`;
                }
            }
            return super.toString()+ratAndCom;
        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views=Number(views);
        }
        view(){
            this.views+=1;
            return this;
        }
        toString(){
            return super.toString()+`\nViews: ${this.views}`
        }
    }


let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
