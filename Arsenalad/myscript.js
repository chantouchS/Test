$(document).ready(function() {
    $('#submit-btn').click(function() {
        console.log('click on submit button');
        $('#result').text($("#input-text").val());
    });

    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var data ="";
        response.forEach(element => {
            console.log(element.Name, element.Squad_number);
            data += "<tr>"+
            "<td>"+element.Name+"</td>"+
            "<td>"+element.Squad_number+"</td>"+
            "<td>"+element.Nationality+"</td>"+
            "<td>"+element.Position+"</td>"+
            "<td>"+element.Prefered_Foot+"</td>"+
            "</tr>";
            $("#dataUpdate").html(data);
            
        });
    });
});
$('#submit-btn').click(function() {
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var data = "";
        var check = 0;
        response.forEach(element => {
            if(element.Name.toLowerCase().includes($('#input-text').val().toLowerCase())){
                check += 1;
                console.log(check);
                data +="<tr>"+
                "<td>"+element.Name+"</td>"+
                "<td>"+element.Squad_number+"</td>"+
                "<td>"+element.Nationality+"</td>"+
                "<td>"+element.Position+"</td>" +
                "<td>"+element.Prefered_Foot +"</td>"
                "<tr>";
                $('#dataUpdate').html(data);
            }

        });
    });
});
$(document).ready(function() {
    $('#add').hide();

    $('#ads-btn').click(function(){
        $('#add').toggle();
    });
});
$('#s-btn').click(function() {
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var data = "";
        var check1 = document.getElementById("GK");
        var check2 = document.getElementById("CB");
        var check3 = document.getElementById("LB");
        var check4 = document.getElementById("RB");
        var check5 = document.getElementById("CDM");
        var check6 = document.getElementById("CM");
        var check7 = document.getElementById("CAM");
        var check8 = document.getElementById("LM");
        var check9 = document.getElementById("RM");
        var check10 = document.getElementById("ST");
        var check11 = document.getElementById("CF");
        var check12 = document.getElementById("LW");
        var check13 = document.getElementById("RW");
        var checkRF = document.getElementById("RightF");
        var checkLF = document.getElementById("LeftF");
        if(check1.checked == true){
            if(checkRF.checked == true){
            response.forEach(element => {
            if(element.Position == "GK" && element.Prefered_Foot == "Right"){
                data +="<tr>"+
                "<td>"+element.Name+"</td>"+
                "<td>"+element.Squad_number+"</td>"+
                "<td>"+element.Nationality+"</td>"+
                "<td>"+element.Position+"</td>" +
                "<td>"+element.Prefered_Foot +"</td>"
                "<tr>";
                $('#dataUpdate').html(data);
            }
        
            });
            }
            else if(checkLF.checked == true){
                response.forEach(element => {
                if(element.Position == "GK" && element.Prefered_Foot == "Left"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
            });
            }
            else{
                response.forEach(element => {
                    if(element.Position == "GK"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
            }
        }
        if(check2.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "CB" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "CB" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "CB"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
            }
        if(check3.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "LB" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "LB" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "LB"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check4.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "RB" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "RB" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "RB"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check5.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "CDM" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "CDM" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "CDM"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check6.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "CM" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "CM" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "CM"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check7.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "CAM" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "CAM" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "CAM"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check8.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "LM" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "LM" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "LM"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check9.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "RM" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "RM" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "RM"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check10.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "ST" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "ST" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "ST"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check11.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "CF" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "CF" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "CF"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check12.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "LW" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "LW" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "LW"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        if(check13.checked == true){
            if(checkRF.checked == true){
                response.forEach(element => {
                if(element.Position == "RW" && element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                    "<td>"+element.Name+"</td>"+
                    "<td>"+element.Squad_number+"</td>"+
                    "<td>"+element.Nationality+"</td>"+
                    "<td>"+element.Position+"</td>" +
                    "<td>"+element.Prefered_Foot +"</td>"
                    "<tr>";
                    $('#dataUpdate').html(data);
                }
            
                });
                }
                else if(checkLF.checked == true){
                    response.forEach(element => {
                    if(element.Position == "RW" && element.Prefered_Foot == "Left"){
                        data +="<tr>"+
                        "<td>"+element.Name+"</td>"+
                        "<td>"+element.Squad_number+"</td>"+
                        "<td>"+element.Nationality+"</td>"+
                        "<td>"+element.Position+"</td>" +
                        "<td>"+element.Prefered_Foot +"</td>"
                        "<tr>";
                        $('#dataUpdate').html(data);
                    }
                
                });
                }
                else{
                    response.forEach(element => {
                        if(element.Position == "RW"){
                            data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                        }
                    
                    });
                }
        }
        else if(checkRF.checked == true && checkLF.checked == false && check1.checked == false&& check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == false && check7.checked == false && check8.checked == false && check9.checked == false && check10.checked == false && check11.checked == false && check12.checked == false && check13.checked == false){
            response.forEach(element =>{
                if(element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                }
            });
        }
        else if(checkLF.checked == true && checkRF.checked == false && check1.checked == false&& check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == false && check7.checked == false && check8.checked == false && check9.checked == false && check10.checked == false && check11.checked == false && check12.checked == false && check13.checked == false){
            response.forEach(element =>{
                if(element.Prefered_Foot == "Left"){
                    data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                }
            });
        }
        else if(checkLF.checked == true && checkLF.checked == true && check1.checked == false&& check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == false && check7.checked == false && check8.checked == false && check9.checked == false && check10.checked == false && check11.checked == false && check12.checked == false && check13.checked == false){
            response.forEach(element =>{
                if(element.Prefered_Foot == "Left" || element.Prefered_Foot == "Right"){
                    data +="<tr>"+
                            "<td>"+element.Name+"</td>"+
                            "<td>"+element.Squad_number+"</td>"+
                            "<td>"+element.Nationality+"</td>"+
                            "<td>"+element.Position+"</td>" +
                            "<td>"+element.Prefered_Foot +"</td>"
                            "<tr>";
                            $('#dataUpdate').html(data);
                }
            });
        }
    });
});