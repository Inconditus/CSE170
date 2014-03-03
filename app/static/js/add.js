$(".myButton").click(submit);

function submit() {
  //console.log($('#check').prop('checked'));

  var imgsrc = $("#imgup").val();
  // placeholder for now
  //imgsrc = "http://allaboutuarts.ca/wp-content/uploads/2012/07/placeholder.jpg";
  var name = $("#name").val();
  var desc = $("#desc").val();
  var origprice = $("#origprice").val();
  var price = $("#price").val();
  var check = $('#check').prop('checked');
  if (check === true)
    var minnum = $('#minnum').val();
  else
    var minnum = 0;

  var unfilled = 0;

  // Check for invalid input
  $(".content").find(':input[type=text]').each(function(i) {
      //console.log($(this).val());
      if( $(this).val() === "")
      unfilled++;
      });

  if( check === false )
    unfilled--;

  //console.log(unfilled);

  if (unfilled > 0)
  {
    alert("You have not filled in all the required fields. Please go back and make sure all fields are filled!");
  } else
  {
    if( (check === true) && (minnum == 0))
    {
      alert("Please enter a number > 0 for the minimum # of buyers.");
    }
    else

      if( (origprice < 0) || (price < 0 ) || (minnum < 0) )
      {
        alert("You cannot have negative numbers as prices or buyers!");
      }
      else

        if( isNaN(origprice) || isNaN(price) || isNaN(minnum) )
        {
          alert("Please enter only numbers for the prices and minimum amount of buyers.");
        }
        else
        {
          var origdec = parseFloat(origprice);
          origprice = +origdec.toFixed(2);

          var pricedec = parseFloat(price);
          price = +pricedec.toFixed(2);

          console.log("yay accepted");
          var JSONinfo = {}

          JSONinfo["check"] = check;
          JSONinfo["name"] = name;
          JSONinfo["desc"] = desc;
          JSONinfo["origprice"] = origprice;
          JSONinfo["price"] = price;
          JSONinfo["imgsrc"] = imgsrc;
          JSONinfo["minnum"] = minnum;
          JSONinfo["seller"] = "Edward T. Hung";

          var date = new Date();
          date.setTime(date.getTime() + (5 * 60 * 1000));
          $.post('/item/add', JSONinfo).done(function(data) {
              //maybe do something with the data to see if submit worked
              //window.location.href = "/items/";
              });
          //$.cookie("newitem", JSON.stringify(JSONinfo), { expires: date } );
        }

  }
  //alert( $.cookie("listinginfo") );
  //console.log(JSON.stringify(JSONinfo));
}
$(".logo").click( function() {
    document.location.href = '/items/';
});

