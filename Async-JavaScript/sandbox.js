// HTTP request

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4) {
        console.log(request.responseText)
    }
});

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();