//targil 1
<html>
    <head>
            <title>html rocks!!</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
    <body>
        <form>
            <p>atz shell: <input type="number" id="atznum" required/></p>
            <button onclick="atz()">atz</button>
        </form>
    </body>
    <script>
    function atz()
    {
        var y
        var x = $('#atznum').val()
        y = x
         while(x > 1)
         {
           y = y * (x - 1)
           x = x - 1
         }
      alert(y)
    }                                                                                    
    </script>
</html>
//targil 1

//targil 2
<html>
    <head>
            <title>html rocks!!</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
    <body>
            <table border="3">
                    <tr style="background: burlywood">
                        <th>arr1</th>
                        <th>arr2</th>
                        <th>wins:</th>
                    </tr>
                    <tbody id="body1">
                        <tr>  
                        </tr>
                    </tbody>
                </table>
                <button onclick="add()">add</button>
    </body>
    <script>
        var arr1 = []
        var arr2 = []
        function add()
        {
          var x = Math.floor((Math.random() * 11) + 10)
          var count1 = 0
            var count2 = 0
          for(var i = 0; i < x; i++)
          {
            arr1[i] = Math.floor((Math.random() * 201) - 100)
            arr2[i] = Math.floor((Math.random() * 201) - 100)
        

               if(arr1[i] > arr2[i])
               {
                 count1++
                 $('#body1').append(`<tr><td>${arr1[i]}</td><td>${arr2[i]}</td><td> arr1 won. arr1 score = ${count1}</td></tr>`)
               }
              else if(arr1[i] < arr2[i])
               {
                 count2++
                 $('#body1').append(`<tr><td>${arr1[i]}</td><td>${arr2[i]}</td><td> arr2 won. arr2 score =  ${count2}</td></tr>`)
               }
          }
        }  

    </script>
</html>
//targil 2


