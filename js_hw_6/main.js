// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (value) {
//         console.log(value);
//     });

//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let postsBox = document.getElementsByClassName("posts-box")[0];
        for (const post of posts){
            let pPost = document.createElement('p');
            pPost.innerText = `${post.id}-${post.title}`;
            postsBox.append(pPost);
            // console.log(post.id,post.title);
        }
    });

// *******************************************************************************************************
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// // https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         let commentsBox = document.getElementsByClassName("commentsBox")[0];
//
//         for (const comment of comments){
//             let pComment = document.createElement('p');
//             pComment.innerText = `${comment.id}-${comment.email}`;
//             // console.log(pComment)
//             commentsBox.appendChild(pComment);
//             // console.log(comment.id,comment.email);
//         }
//     });