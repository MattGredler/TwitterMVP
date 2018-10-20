// const api = require(api-routes.js)
$.get('api/tweet')
.then(function(serverData){
    // console.log(serverData);
    for (let i = 0 ; i< serverData.length ; i++){
        render(serverData[i].tweet);
    }
})


const showModal = function(e){
    e.preventDefault();
    $('.modalContainer').show();

}

const hideModal = function(e){
    e.preventDefault();
    $('.modalContainer').hide();
}


//     Tweet.remove({"_id": ObjectId("5bc22ae6769a732858dc6131")});
// // {
//     console.log("end")

//     if(!err){
//         console.log("Deleted");
//     }
// })




    //get the id
//     console.log('hit this')
//     $.ajax({
//         url: '/api/tweets/' + (body.req._id),
//         type: 'DELETE'
//     })
//  }
 
 
 
//  $(document).on('click', '.delete', deleteTweet);


// ${this} get value of this and replace here. Template literals
const render = function(tweetText){
    $('.midFeed').append(`<div class="tweet">
    <br>
    <h4 class="handle">
        I Am Devloper
        <span class="tweetMeta"> @iamdevloper Oct. 5th</span> <button class="deleteTweet" id= "deleteTweet" type="button">x</button>
    </h4>
    <br>
    <p>${tweetText}

    </p>
    <br>
    <hr>
</div>`)
}

// // <div class="tweet">
// <p>${tweetText}
// </p>
// </div>

const removeTweet = function(id){
    $.ajax()
    const thisID = $(this).attr(id)
    console.log("begin" + thisID)
    $ajax(
        {url: '/api/tweets/${thisID}',
        method: 'DELETE'}
    )
    .then(function(){
        render()
    })

}
    


const saveTweet = function(e){
    event.preventDefault();
    const inputTweet = $('#newTweetText').val();
    if(inputTweet.length>140) {
        console.log('too long')}
        else{
            console.log('ok')
        }
    


const savedTweet = {
    tweet: inputTweet,
    username: 'IamDevlpr'   
}


$.post('/api/tweet', savedTweet)
.then(function(tweetResult){
    console.log(tweetResult);
    render(tweetResult.tweet);
})
}
$(".topButton").on('click', showModal)
$(".modalButton").on('click', hideModal)
$(".xButton").on('click', hideModal)
$(".modalButton").on('click', saveTweet)

$("body").on('click' , ".deleteTweet" , removeTweet)
// $(".rightButton").on('click', showSignUpForm)
// close modal should be same for tweet button and x in modal   
