    function addRow() {
        var table_id = "t2";
        var table = document.getElementById( table_id );
        var rows = table.getElementsByTagName( "tr" ).length;
        var tr = table.insertRow( rows );
        var td1 = document.createElement( "td" );
        var td2 = document.createElement( "td" );
        var td3 = document.createElement( "td" );
            td1.innerHTML = '<input type="text" class="border"/>';
            td2.innerHTML = '<input type="text" class="border"/>';
            td3.innerHTML = '<input type="text" class="border"/>';
            tr.appendChild( td1 );
            tr.appendChild( td2 );
            tr.appendChild( td3 );     
    }