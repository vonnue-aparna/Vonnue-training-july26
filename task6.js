function countComments(comments){
    let count=0
    function recursiveCount(comments){
        comments.forEach(comment => {
            // console.log(comment);
            if(comment.replies){
                count++
                if(comment.replies.length==0){
                    return 0
                }
                else{
                    // console.log(comment.replies);
                    recursiveCount(comment.replies)
                }
            }
        });
    }
    recursiveCount(comments)
    console.log(count);
    return count
}


const comments = [
{
id: 1,
replies: [
{ id: 2, replies: [{ id: 3, replies: [] }] }
]
},
{ id: 4, replies: [] }
];

const nocomments = [{
id: 1
}];

countComments(comments)
countComments(nocomments)
countComments([])
// console.log(count);