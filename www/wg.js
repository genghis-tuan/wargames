var KeyCodes = {};
KeyCodes.CANCEL = 3;
KeyCodes.HELP = 6;
KeyCodes.BACK_SPACE = 8;
KeyCodes.TAB = 9;
KeyCodes.CLEAR = 12;
KeyCodes.RETURN = 13;
KeyCodes.ENTER = 14;
KeyCodes.SHIFT = 16;
KeyCodes.CONTROL = 17;
KeyCodes.ALT = 18;
KeyCodes.PAUSE = 19;
KeyCodes.CAPS_LOCK = 20;
KeyCodes.ESCAPE = 27;
KeyCodes.SPACE = 32;
KeyCodes.PAGE_UP = 33;
KeyCodes.PAGE_DOWN = 34;
KeyCodes.END = 35;
KeyCodes.HOME = 36;
KeyCodes.LEFT = 37;
KeyCodes.UP = 38;
KeyCodes.RIGHT = 39;
KeyCodes.DOWN = 40;
KeyCodes.PRINTSCREEN = 44;
KeyCodes.INSERT = 45;
KeyCodes.DELETE = 46;
KeyCodes.ZERO = 48;
KeyCodes.ONE = 49;
KeyCodes.TWO = 50;
KeyCodes.THREE = 51;
KeyCodes.FOUR = 52;
KeyCodes.FIVE = 53;
KeyCodes.SIX = 54;
KeyCodes.SEVEN = 55;
KeyCodes.EIGHT = 56;
KeyCodes.NINE = 57;
KeyCodes.SEMICOLON = 59;
KeyCodes.EQUALS = 61;
KeyCodes.A = 65;
KeyCodes.B = 66;
KeyCodes.C = 67;
KeyCodes.D = 68;
KeyCodes.E = 69;
KeyCodes.F = 70;
KeyCodes.G = 71;
KeyCodes.H = 72;
KeyCodes.I = 73;
KeyCodes.J = 74;
KeyCodes.K = 75;
KeyCodes.L = 76;
KeyCodes.M = 77;
KeyCodes.N = 78;
KeyCodes.O = 79;
KeyCodes.P = 80;
KeyCodes.Q = 81;
KeyCodes.R = 82;
KeyCodes.S = 83;
KeyCodes.T = 84;
KeyCodes.U = 85;
KeyCodes.V = 86;
KeyCodes.W = 87;
KeyCodes.X = 88;
KeyCodes.Y = 89;
KeyCodes.Z = 90;
KeyCodes.CONTEXT_MENU = 93;
KeyCodes.NUMPAD0 = 96;
KeyCodes.NUMPAD1 = 97;
KeyCodes.NUMPAD2 = 98;
KeyCodes.NUMPAD3 = 99;
KeyCodes.NUMPAD4 = 100;
KeyCodes.NUMPAD5 = 101;
KeyCodes.NUMPAD6 = 102;
KeyCodes.NUMPAD7 = 103;
KeyCodes.NUMPAD8 = 104;
KeyCodes.NUMPAD9 = 105;
KeyCodes.MULTIPLY = 106;
KeyCodes.ADD = 107;
KeyCodes.SEPARATOR = 108;
KeyCodes.SUBTRACT = 109;
KeyCodes.DECIMAL = 110;
KeyCodes.DIVIDE = 111;
KeyCodes.F1 = 112;
KeyCodes.F2 = 113;
KeyCodes.F3 = 114;
KeyCodes.F4 = 115;
KeyCodes.F5 = 116;
KeyCodes.F6 = 117;
KeyCodes.F7 = 118;
KeyCodes.F8 = 119;
KeyCodes.F9 = 120;
KeyCodes.F10 = 121;
KeyCodes.F11 = 122;
KeyCodes.F12 = 123;
KeyCodes.F13 = 124;
KeyCodes.F14 = 125;
KeyCodes.F15 = 126;
KeyCodes.F16 = 127;
KeyCodes.F17 = 128;
KeyCodes.F18 = 129;
KeyCodes.F19 = 130;
KeyCodes.F20 = 131;
KeyCodes.F21 = 132;
KeyCodes.F22 = 133;
KeyCodes.F23 = 134;
KeyCodes.F24 = 135;
KeyCodes.NUM_LOCK = 144;
KeyCodes.SCROLL_LOCK = 145;
KeyCodes.COMMA = 188;
KeyCodes.PERIOD = 190;
KeyCodes.SLASH = 191;
KeyCodes.BACK_QUOTE = 192;
KeyCodes.OPEN_BRACKET = 219;
KeyCodes.BACK_SLASH = 220;
KeyCodes.CLOSE_BRACKET = 221;
KeyCodes.QUOTE = 222;
KeyCodes.META = 224;

var games = ["FALKEN'S MAZE","BLACK JACK","GIN RUMMY",
        "HEARTS","BRIDGE","CHECKERS","CHESS","POKER","FIGHTER COMBAT",
        "GUERRILLA ENGAGEMENT","DESERT WARFARE","AIR-TO-GROUND WARFARE",
        "THEATERWIDE TACTICAL WARFARE","THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE",
        "","GLOBAL THERMONUCLEAR WAR"];
        
        function typewriter(stringToPrint, elementId)
        {
            removeCursor();
            var i = 0;
            for (var c in stringToPrint) 
            {
                setTimeout(function(c) 
                {                    
                    printChar(stringToPrint[c], elementId);  
                    setTimeout(function(){$("#"+ elementId).removeClass("cursor")}, 70);               
                }.bind(this, c, elementId), i++ * 30);            
            }
            return true;
        }

        function printChar(c, elementId)
        {            
            document.getElementById(elementId).classList.add("cursor")
            document.getElementById(elementId).innerHTML += c;
        }

        function createListItem(parentEle, listElementId)
        {
            $(parentEle).append("<li><span id='" + listElementId + "' contenteditable></span></li>");
        }

        function removeCursor()
        {
            $("span").removeClass("cursor");
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function printGames(games)
        {
            $('#command').attr('contenteditable',false);
            $("#terminal").append('<ul id="game-list"></ul>')
            for(var i=0; i<games.length; i++)
            {
                var speed = (games[i].length + 1000) 
                setTimeout(function(i){
                    listId = "game_" + i;
                    createListItem("#game-list", listId)
                    typewriter(games[i], listId);
                }.bind(this, i), i * speed)
            }
        }

        function process_logon(logonValue)
        {
            logonValue = logonValue.trim();
            switch(true)
            {
                case logonValue == "joshua":
                    setContentEditable("#logon", false);
                    removeCursor();
                    typewriter(greetingsProfessor, 'logon_msg')
                    break;
                case logonValue == "Help Logon":
                    setContentEditable("#logon", false);
                    removeCursor();
                    typewriter(logonHelpNotAvailMsg, 'logon_msg')
                    resetLogon()
                    break;
                case logonValue == "Help Games":
                    setContentEditable("#logon", false);
                    removeCursor()
                    typewriter(gameHelpMsg, 'logon_msg')  
                    setTimeout(function(){                        
                        $("#command").show().addClass("cursor").focus();                     
                    }, 2900);                    
                    break;
                case logonValue.split(" ")[0] == "Help":
                    setContentEditable("#logon", false);
                    removeCursor();
                    typewriter(logonHelpNotAvailMsg, 'logon_msg')
                    resetLogon()
                    break;
                default:
                    setContentEditable("#logon", false);
                    removeCursor();
                    typewriter(invalidLogonMsg, 'logon_msg');
                    resetLogon()
            }
        }

        function resetLogon()
        {
            setTimeout(function(){
            setContentEditable("#logon", true);
            $("#logon").addClass("cursor");
            $("#logon").text("");
            $("#logon_msg").text("");
            }, 3000);
        }

        function bind_logon()
        {
            $("span[name ='logon']").keypress(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13')
                {
                    process_logon($(this).text());
                }
            });//logon keypress
        }

        function bind_command()
        {
            $("#command").keypress(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13' && $("#command").text().trim() == "List Games")
                {
                    printGames(games);
                }
                else if(keycode == '13' && $("#command").text().trim() != "List Games")
                {
                    $("#command").text("");
                }
            });//command keypress
        }

        function bind_cursor()
        {
            $('body').keypress(function(event){
                $(".cursor").focus();
            })
        }

        function setContentEditable(selector, isEditable)
        {
            $(selector).attr('contenteditable',isEditable);
        }

        var logonHelpNotAvailMsg = "HELP NOT AVAILABLE";
        var gameHelpMsg = "'GAMES' REFERS TO MODELS, SIMULATIONS AND GAMES \nWHICH HAVE TACTICAL AND STRATEGIC APPLICATIONS.";
        var invalidLogonMsg = "IDENTIFICATION NOT RECOGNIZED BY SYSTEM \n--CONNECTION TERMINATED--";
        var greetingsProfessor = "GREETINGS PROFESSOR FALKEN\n\nSHALL WE PLAY A GAME?";
        var txt = "EXCELLENT.  IT'S BEEN A LONG TIME.  CAN YOU EXPLAIN THE REMOVAL OF THE USER ACCOUNT NUMBER ON 6/23/73?";

         

// looking for the 'secret code' and loading the terminal with font font-family:'VT323'
$(document).ready(function ($) {
    var keyHistory = new Array();
    $(window).keyup(function(e) {
      keyHistory.push( e.which );
      if ( keyHistory.length > 8 ) {
        keyHistory.shift();
      }
      // super secret code
      if (
        keyHistory[0] == KeyCodes.W &&
        keyHistory[1] == KeyCodes.A &&
        keyHistory[2] == KeyCodes.R &&
        keyHistory[3] == KeyCodes.G &&
        keyHistory[4] == KeyCodes.A &&
        keyHistory[5] == KeyCodes.M &&
        keyHistory[6] == KeyCodes.E &&
        keyHistory[7] == KeyCodes.S

      ) {
        $("<style type='text/css'> body{font-family:'VT323';font-size:24px;width:900px;background-color:rgb(32,32,32);}span{white-space:pre-wrap;}#game-list{list-style:none;padding-left:0px;}#game-list li{min-height:20px;}.cursor{border-right:10px solid rgb(238,237,240);}#command{display:none;}#terminal{margin-left:33%;margin-top:10%;padding:20px;background-color:rgb(32,32,32);color:rgb(238,237,240);height:700px;}@font-face{font-family:'VT323';src:url(data:application/x-font-woff;charset=utf-8;base64,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) format('truetype');font-weight:400;font-style:normal;font-stretch:normal;unicode-range:U+0020-00FE;}</style>").appendTo("head");

        var termBody = $('<div id="terminal"><p rel="logon">LOGON: &nbsp;&nbsp;<span class="cursor" id="logon" name="logon" contenteditable></span></p><p><span id="logon_msg"></span></p><p><span id="command" contenteditable></span></p></div>');
        $('body').html(termBody);

        bind_logon();
        bind_command();
        bind_cursor();
      }
    });
  });

