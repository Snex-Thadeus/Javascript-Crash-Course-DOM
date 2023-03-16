const posts = [
    {title: "Post One", body: 'This is post one'},
    {title: "Post Two", body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    }); 
}

// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Async Await
// async function init(){
//     await createPost({title: 'Post Three', body: 'This is post three'});

//     getPosts();
// }
// init();

// Async Await with Fetch
async function fetchStatus() {
    const res = await fetch('https://dev-feature1.teknobuilt.com/index.php?do=/apiv1/3diwps/51/iwps&api_key=Ym9zY236Ym9zY28');

    const data = await res.json();
    // console.log(data);
    const arr = data[Object.keys(data)[4]];
    console.log(arr)
    for (i in arr){
        if(arr[i].object_id == '957'){
            console.log('URN:', arr[i].urn)
        }
        // console.log('CWA ID:', arr[i].cwaId, 'CWP ID:', arr[i].cwp_id, 'IWP ID:', arr[i].iwp_id, 'OBJECT ID:', arr[i].object_id, 'URN:', arr[i].urn);
    }
}
// fetchStatus();


// promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values => console.log(values));


// fetch('https://dev-feature1.teknobuilt.com/index.php?do=/apiv1/status/51/iwp&api_key=Ym9zY236Ym9zY28')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return fetch('https://dev-feature1.teknobuilt.com/index.php?do=/apiv1/3diwps/51/iwps&api_key=Ym9zY236Ym9zY28');
//   })
//   .then(response => response.json())
//   .then(data => {
//     const arr = data[Object.keys(data)[4]];
//     // console.log(arr);
//     for (i in arr){
//       var result3dUrn = arr[i].urn;
//       console.log('Result urn', result3dUrn);
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   });

  async function fetchStatus() {
    const res = await fetch('https://dev-feature1.teknobuilt.com/index.php?do=/apiv1/3diwps/51/iwps&api_key=Ym9zY236Ym9zY28');
  
    const data = await res.json();
    // console.log(data);
    const arr = data[Object.keys(data)[4]];
    console.log(arr);
    for (i in arr){
      var result3dUrn = arr[i].urn;
      console.log('Result urn', result3dUrn);
    }
  }
//   fetchStatus();

async function get3dIwpMappings(){
    let iwpUrl = 'https://dev-feature1.teknobuilt.com/index.php?do=/apiv1/status/51/iwp&api_key=Ym9zY236Ym9zY28';
    const res = await fetch(iwpUrl);

    const data = await res.json();
    console.log('Data..', data['data']); 
    let statusColor = {};
    for(let value of data['data']){
      statusColor[value.statusId] = {'status_id':value.statusId,'status_name':value.statusName, 'color':value.color};
        
    }
    console.log(statusColor);
}

// get3dIwpMappings()


// for (var i = 0, l = iwpStatusValue.length; i < l; i++) {
//     var keys = Object.keys(iwpStatusValue[i]);
//     for (var j = 0, k = keys.length; j < k; j++) {
//         console.log("Key:" + keys[j] + "  Value:" + arr[i][keys[j]]);
//     }
// }



// function enableDisable3dIcon(){

//   $.get('https://company-pace.teknobuilt.com/index.php?do=/project/statuscolor/', function(data) {
//     console.log(data);
//   });
// }

// enableDisable3dIcon();



function setLegendColors(){

  $.get('https://dev-feature1.teknobuilt.com/index.php?do=/apiv1/status/51/iwp&api_key=Ym9zY236Ym9zY28', {
					
				},
					(mdata) => {
            let res = mdata['data'];
            console.log(res)
            let statusColor = {};
            for(let value of res){
              statusColor[value.statusId] = {'status_id':value.statusId,'status_name':value.statusName, 'color':value.color};
            }
            // return statusColor;
            console.log(statusColor);
          })
}
setLegendColors();

function setLegendColor(){
  var status = statusColor;
  console.log('statusColor', status);
}

// setLegendColor();

let input = 'Status_Name';

let statusColor = [{Status_Name :"In Progress"}, {Status_Name :"To Be Drafted"}, {Status_Name :"Released"}, {Status_Name :"Close Out"}];

  // console.log(statusColor)
  // console.log(statusColor[input])
  // console.log(statusColor.Status_Name?.length)

  // const object = {
  //   firstObject: {
  //     key1: 'value1',
  //     key2: 'value2'
  //   },
  //   secondObject: {
  //     key3: 'value3',
  //     key4: 'value4'
  //   }
  // };
  
  // const values = Object.values(object);
  
  // for (const value of values) {
  //   console.log(value);
  // }

  // for (const value of values) {
  //   console.log(value.key1); // logs 'value1'
  //   console.log(value.key2); // logs 'value2'
  // }

  const objectOfObjects = {
    object1: {
      key1: 'value1',
      key2: 'value2'
    },
    object2: {
      key1: 'value3',
      key2: 'value4'
    }
  };
  
  console.log(Object.keys(objectOfObjects))
  const newobj = Object.entries(objectOfObjects)
  // console.log('newobj', newobj)

  const values = [];
  
  for (const object of Object.values(objectOfObjects)) {
    values.push(...Object.values(object));
  }
  
  // console.log(values);
  // Output: ['value1', 'value2', 'value3', 'value4']
  
  
  

