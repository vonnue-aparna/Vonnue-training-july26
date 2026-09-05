const comments = [
{
id: 1,
replies: [
{ id: 2, replies: [{ id: 3, replies: [] }] }
]
},
{ id: 4, replies: [] }
];


function countComments(comments){
       comments.forEach(function(comment){
        let count=0;
        if(comment.replies){
            for(let i=0; i<replies.length; i++){
                if(replies){
                     count++;
                };
            }
        }
        
       });
       return count;
}

console.log(countComments(comments));