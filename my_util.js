const send_message = () => {
    //入力値の処理
    let input_label = document.getElementById("input_textfield");   //HTML から、id = "input_textfield" をもつ要素を取得し、input_label に格納
    var parameter = input_label.value;
    parameter = parameter.replace(/\r?\n/g, '\\r\\n');
    parameter = encodeURI(parameter);
    console.log(parameter)

    //URL作成
    request_url = "https://wzqxrvml0c.execute-api.us-east-1.amazonaws.com/prod/mywebapplicationapitest?param1=";
    request_url = request_url + parameter;
    console.log(request_url);

    //リクエストオブジェクト作成
    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);
    request.setRequestHeader("x-api-key", "N7m2xL6PYb2xXwVeM8p54435COPtAvVs2i5ubEBx");
    request.responseType = "json";

    //リクエストが成功したときに呼ばれるメソッド
    request.onload = function() {
        var json_data = this.response;
        var return_message = JSON.parse(json_data["body"]);
        //結果をhtmlに表示する
        let output_label = document.getElementById("output_label");
        output_label.innerText = return_message
    };

    request.setRequestHeader("GET","Access-Contlol-Allow-Origin: *");
    request.send(); //URLリクエストを送信する

}