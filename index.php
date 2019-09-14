<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>My First Blog</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/knockout-3.5.0.js"></script>


        <!-- Favicon -->
        <link rel="shortcut icon" href="css/images/favicon.ico">

        <!-- Google Webfont -->
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>	
        <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,300italic,400italic' rel='stylesheet' type='text/css'>

        <!-- CSS -->
        <link rel="stylesheet" href="css/app.css">

        <script src='https://www.google.com/recaptcha/api.js'></script>
    </head>
    <body>
        <!--        <nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active">
                                <a class="page-scroll" href="#home_div">Home</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#about_div">About</a>
                            </li>                        
                            <li>
                                <a class="page-scroll" href="#careers_div">Careers</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#contact_div">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>-->


        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">My Company Logo and Name</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a data-toggle="tab" href="#home_div">Home</a></li>

                    <li><a data-toggle="tab" href="#about_div">About Us</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div>
                Some info ...... like company agenda.
            </div>
            <div id="Home_Screen">
                <div id="home_div" style="height: 300px; margin-top: 50px">
                    
                    <div data-bind="foreach: {data: topics, as: 'topic'}" class="topics_cont">
                        <div style="" class="_topic">
                            <a href="#" data-bind="click: $parent.gotoTopic"><span data-bind="text: subject"> </span></a><BR>
                            <span data-bind="text: content"> </span>
                        </div>
                    </div>
                </div>
                <div id="about_div" style="height: 300px">Hi, This is About Div</div>
                <div id="careers_div" style="height: 300px">Hi, This is Career Div</div>
                <div id="contact_div" style="height: 300px">Hi, This is Contact Div</div>

            </div>
            <div id="topic_details" style="margin-top: 3%;">
                <div style="text-align: right;"><a href="#" onclick="gotoMain();">Goto Home</a></div>
                <div>
                    <div data-bind="foreach: {data: topics, as: 'topic'}" class="topics_cont">
                        <span data-bind="text: subject"></span><BR>
                        <span data-bind="text: content"></span>
                    </div>
                </div>
            </div>
            <?php
//            echo 'Hai this is my first php application';
            ?>
        </div>        

        <script type="text/javascript" src="js/komain.js"></script>
        <script type="text/javascript" src="js/utility.js"></script>
    </body>
</html>
