import axios from "axios"

export const getDetail = (context,txtField ) => {
    // eslint-disable-next-line  
    debugger;
    var data = JSON.stringify({
        "long_url": txtField[0],
        "domain": txtField[1],
        "include_qr_code": false
      });
      var apiToken ="s8bWkI3tDczElxWKgz7Bhyv6SIEXVsTl1gCpilY6sNaH7M8B0LjB5BJ8nyEP"
      var config = {
        method: 'post',
        url: 'https://t.ly/api/v1/link/shorten?api_token='+ apiToken,
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
        },
        data : data
      };
      
      axios(config)
      .then(response => {
        context.commit('SET_DETAIL',response.data)
        console.log(response.data)
        .catch(function (error) {
            console.log(error);
        });
      
    })
             
            // const URL = "http://ip-api.com/json/"+ txtField;
            // axios.get(URL).then(response => {
            //     context.commit('SET_DETAIL',response.data)
            //     console.log(response.data)
            //     .catch(function (error) {
            //         console.log(error);
            //     });
              
            // })
}
