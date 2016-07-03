function GetAuthCode()
        {
            var userAuthCode = document.getElementById("AuthCodeTextField").value;
            var steamId = document.getElementById("SteamID").value;
            
            if (steamId.startsWith('STEAM') == false)
                {
                    alert("Invalid SteamID!");
                    
                }
            else if (userAuthCode.length < 15 || userAuthCode.length > 15)
                {
                    alert("Invalid Authentication Code!");
                }
            else
                {
                    window.open("team.html","_self")
                    alert("Authenticated Successfully!");
                }
        }

 function GetTournamentLayout()
        {
            $.ajax
            ({
                method: "GET",
                url: "http://pickemchallenge.2fh.co/proxy.php?route=/other/resource",
                dataType: "text",
                success: function(data)
                {
                    var tournamentLayoutParsed
                    
                    try
                    {
                        //Try the retrieved string first
                        tournamentLayoutParsed = JSON.parse(data);
                    }
                    catch(e)
                        {
                            //If it fails, attempt to add a closing curly bracket
                            try
                                {
                                    tournamentLayoutParsed = JSON.parse(data + "}");
                                }
                                catch(e)
                                    {
                                        console.error("Failed to parse into JSON!");
                                    }
                        }
                     
                    console.log("Success!");
                },
                error: function(xhr, status, error)
                {
                    console.log("Status: " + status + "\nError: " + error);
                }
            });
        }
        