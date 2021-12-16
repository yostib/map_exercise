function search(){

    //variables for receiving the users input 

    let input_street =document.getElementById("street").value;
    let input_city =document.getElementById("city").value;

    //iframeAddress =input_street +input_city;

    console.log("streetName : "+input_street+" + cityName: "+ input_city);
    document.getElementById('mapFrame').src="https:/www.google.com/maps?q="+input_street + input_city +"&output=embed";




}