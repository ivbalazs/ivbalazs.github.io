    function myFunction() {
        //jó:
        //document.querySelectorAll("#myCheck6")[0].checked;

        var checkBox = document.getElementsByClassName("csoportnev");
        var textA = document.querySelectorAll(".texta");
        var textB = document.querySelectorAll(".textb");
        //var checkBox = document.getElementById("myCheck6");
        //var text = document.getElementById("text6b");
        var i;
        for (i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked == true) {
                textA[i].style.display = "none";
                textB[i].style.display = "inline-block";
                //text6a.style.display = "none";
                //text6b.style.display = "inline-block";
                //text5a.style.display = "none";
                //text5b.style.display = "inline-block";
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //text.style.fontSize = "25px";
            } else {
                // text.style.display = "none";
                //text.style.fontSize = "9px";
                textB[i].style.display = "none";
                textA[i].style.display = "inline-block";
                //text5b.style.display = "none";
                //text5a.style.display = "inline-block";

            }


        }


    }

    function myList() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        document.getElementById('log').innerHTML = '<br><strong>Teljes:</strong><br>' + kiiras;

    }



    function myListPrinting() {

        for (j = 0; j < document.getElementsByClassName("button").length; j++) {
            document.getElementsByClassName("button")[j].style.display = "none";
        }

        for (j = 0; j < document.getElementsByClassName("td02").length; j++) {
            document.getElementsByClassName("td02")[j].style.display = "none";
        }


        document.querySelector("#table").style = "visibility:collapse";
        document.getElementById('log').innerHTML = "";

        var checkList = document.getElementsByClassName("csoportnev");

        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 0) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Aldi:</strong><br>' + kiiras;
        }

        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 1) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Lidl:</strong><br>' + kiiras;
        }

        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 2) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Auchan:</strong><br>' + kiiras;
        }

        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 3) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>DM:</strong><br>' + kiiras;
        }


        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 4) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Spar:</strong><br>' + kiiras;
        }

        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 5) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Rossmann:</strong><br>' + kiiras;
        }

        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 6) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Biobolt:</strong><br>' + kiiras;
        }

        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 7) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Ikea:</strong><br>' + kiiras;
        }

        var kiiras = "";
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 8) {
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";
            }
        }
        if (kiiras != "") {
            document.getElementById('log').innerHTML += '<br><strong>Szafi bolt:</strong><br>' + kiiras;
        }


    }

    function myListAldi() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 0) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Aldi:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Aldi: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }

    function myListLidl() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 1) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Lidl:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Lidl: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }

    function myListAuchan() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 2) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Auchan:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Auchan: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }

    function myListDm() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 3) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>DM:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>DM: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }

    function myListSpar() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 4) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Spar:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Spar: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }


    function myListRossmann() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 5) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Rossmann:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Rossmann: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }
    function myListBiobolt() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 6) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Biobolt:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Biobolt: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }

    function myListIkea() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 7) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Ikea:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Ikea: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }

    function myListSzafiBolt() {
        //var checkList = document.getElementsByClassName("lista");
        //var checkList = document.querySelectorAll(".textb");
        var checkList = document.getElementsByClassName("csoportnev");
        var kiiras = "";
        var i;
        for (i = 0; i < checkList.length; i++) {
            if (checkList[i].checked == true && document.getElementsByClassName("bolt")[i].selectedIndex == 8) {
                //console.log(document.querySelectorAll(".textb")[i].innerHTML);
                //document.write(document.querySelectorAll(".textb")[i].innerHTML);
                kiiras = kiiras + document.querySelectorAll(".textb")[i].innerHTML + "<br>";

            }


        }
        //document.writeln(kiiras);
        document.querySelector("#table").style = "visibility:collapse";
        if (kiiras != "") {
            document.getElementById('log').innerHTML = '<br><strong>Szafi bolt:</strong><br>' + kiiras;
        }else{
            document.getElementById('log').innerHTML = '<br><strong>Szafi bolt: </strong>Nincs termék a bevásárlólistán!<br>' + kiiras;
        }

    }

